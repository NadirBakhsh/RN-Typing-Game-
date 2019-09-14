//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'
import { get_all_user } from '../store/action';

import Header from './GameHeader'
import Card from './GameCard'

import CountDown from 'react-native-countdown-component';

// create a component
class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wordsArray: [],
            index: 0,
            gameEnd: false,
            score: 0,
            textWord: "",
            countDownTime: this.props.timers,
        }
    }

    componentDidMount() {
        this.fetchAllUser()
        const unShuffleArray = this.props.wordsArray;
        this.shuffle(unShuffleArray)
        setInterval(this.changeWord, this.state.countDownTime);
    }

    componentWillUnmount() {
        this.fetchAllUser()
    }

    async fetchAllUser() {
        await fetch('https://nadirabc.herokuapp.com/user/getAll')
            .then(response => response.json())
            .then(data => {
                this.props.store_users_data(data)
            }).then(data => console.log(data))
        }



    async checkSwitch() {
        switch (this.props.level) {
            case 'esay':
                this.state.score > this.props.user.esay ? await this.scoreUpdate() : alert("Your Score less then Last Score");
                break;

            case 'medium':
                this.state.score > this.props.user.medium ? await this.scoreUpdate() : alert("Your Score less then Last Score");
                break;

            case 'hard':                
                this.state.score > this.props.user.hard ? await this.scoreUpdate() : alert("Your Score less then Last Score");
                break;

            default:
                alert("NUMBER NOT FOUND");

        }

    }


    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        this.setState({ wordsArray: a })
    }

    changeWord = () => {
        if (this.state.index === this.state.wordsArray.length - 1) {
            this.setState({ gameEnd: true })
        }
        this.setState({ index: this.state.index + 1 })
        this.state.textWord = "";

    }


    score() {
        const word = this.state.wordsArray[this.state.index]
        const text = this.state.textWord;
        if (text === word) {
            this.setState({
                score: 10 + this.state.score,
                index: this.state.index + 1,
            })
            this.state.textWord = "";

        }
        if (this.state.index === this.state.wordsArray.length - 1) {
            this.state.textWord = "";
            this.setState({ gameEnd: true })
            this.checkSwitch()
        }

        this.setState({ index: this.state.index + 1 })
        this.state.textWord = "";
    }

    playGain() {
        this.setState({ score: 0, })
        this.props.navigation.navigate('Level')
    }

    async scoreUpdate() {
        await fetch("https://nadirabc.herokuapp.com/user/update", {
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({ email: this.props.user.email, score: { [this.props.level]: this.state.score } })
        }
        )
            .then(res => res.json())
            .then(data => console.log(data.result))
    }


    keyUp = () => {
        this.score()
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title={"Player" + " : " + this.props.user.playerName} />
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    {!this.state.gameEnd && <CountDown
                        until={this.state.wordsArray.length * this.state.countDownTime / 1000}
                        size={20}
                        digitStyle={{ backgroundColor: '#FFF' }}
                        digitTxtStyle={{ color: '#1CC625' }}
                        timeToShow={['M', 'S']}
                    />}
                    {!this.state.gameEnd && <Card
                        word={this.state.wordsArray[this.state.index]}
                        Input={<TextInput
                            style={{ borderRadius: 4, height: 40, width: "70%", borderColor: 'gray', borderWidth: 1, padding: 5 }}
                            onChangeText={textWord => this.setState({ textWord })}
                            value={this.state.textWord}
                            autoFocus={true}
                            blurOnSubmit={false}
                            onSubmitEditing={this.keyUp}
                        />}
                    />}
                    {this.state.gameEnd &&
                        <Card style={{ display: 'flex', justifyContent: 'center' }}
                            word={"The Game End"}
                            Input={<Text> Your Current Score is  {this.state.score}</Text>}
                        />}
                </View>
                {this.state.gameEnd && <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                    <Button title='Play Again' onPress={() => this.playGain()} /></View>}
                <View></View>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        wordsArray: state.wordsArray,
        timers: state.shaffulTimer,
        user: state.user,
        level: state.level,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        store_users_data: (users) => dispatch(get_all_user(users))
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
        justifyContent: 'space-between'
    },
});

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Game);
