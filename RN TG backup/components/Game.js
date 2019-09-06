//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'

import Header from './GameHeader'
import Card from './GameCard'


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
        const unShuffleArray = this.props.wordsArray;
        this.shuffle(unShuffleArray)
        setInterval(this.changeWord, this.state.countDownTime)

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
                score: this.state.score + 10,
                index: this.state.index + 1,
            })
            this.state.textWord = "";
            clearInterval();
        }
        this.setState({ index: this.state.index + 1 })
        this.state.textWord = "";
        if (this.state.index === this.state.wordsArray.length - 1) {
            this.setState({ gameEnd: true })
        }
    }

    playGain() {
        this.setState({ score: 0, })
        this.props.navigation.navigate('Level')
    }



    render() {

        return (
            <View style={styles.container}>
                <Header title={"User Name" + " : " + this.props.user} />

                <View style={{ display: 'flex', alignItems: 'center' }}>
                    {!this.state.gameEnd && <Card
                        word={this.state.wordsArray[this.state.index]}
                        Button={<Button title='Enter' onPress={() => this.score()} />}
                        Input={<TextInput
                            style={{ borderRadius: 4, height: 40, width: "70%", borderColor: 'gray', borderWidth: 1, padding: 5 }}
                            onChangeText={textWord => this.setState({ textWord })}
                            value={this.state.textWord}
                            autoFocus={true}
                        />}
                    />}

                    {this.state.gameEnd &&
                        <Card style={{ display: 'flex', justifyContent: 'center' }}
                            word={"The Game End"}
                            Input={<Text> Your Current Score is  {this.state.score}</Text>}
                            Button={<Button title='Play Again' onPress={() => this.playGain()} />}
                        />}
                </View>

                <View></View>
                <View></View>




            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        wordsArray: state.wordsArray,
        timers: state.shaffulTimer,
        user: state.user.playerName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increase: () => dispatch({ type: "INCREASE" }),
        decrease: () => dispatch({ type: "DECREASE" }),
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
export default connect(mapStateToProps, mapDispatchToProps)(Game);;
