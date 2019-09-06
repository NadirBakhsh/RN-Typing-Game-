//import liraries
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { update_user } from '../store/action';
import { connect } from 'react-redux';
import Card from './GameCard'
// create a component
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: "",
            email: ""
        }
    }



    signUpRes() {
        if (this.state.playerName && this.state.email) {
            fetch("https://nadirabc.herokuapp.com/user/addUser", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.playerName,
                    email: this.state.email,
                })
            }
            ).then(res => res.json())
                .then(res => {
                    if (res) {
                        this.state.playerName = "";
                        this.state.email = "";
                    } else {
                        alert('Wrong Pass word')
                    }
                }).then(() => {
                    this.props.navigation.navigate('Level')
                })
                .then(data => console.log(data))
        } else {
            alert("Field is emty")
        }

    }




    signUp() {
        this.signUpRes()
        const user = { playerName: this.state.playerName,   email: this.state.email }
        this.props.store_user(user);
    }

    render() {
        return (
            <View style={styles.container}>

                {<Card
                    word={"Sign Up"}
                    Button={<Button title="Start Game" color="#8E6E53"
                        onPress={() => this.signUp()}
                    />}
                    Input={
                        <View style={{ width: "100%", display: "flex", alignItems: 'center', justifyContent: 'center' }}>

                            <TextInput
                                style={{ borderRadius: 4, height: 40, width: "70%", borderColor: 'gray', borderWidth: 1, padding: 5 }}
                                onChangeText={playerName => this.setState({ playerName })}
                                value={this.state.playerName}
                                autoFocus={true}
                                placeholder="Player Name"
                            />
                            <Text></Text>

                            <TextInput
                                style={{ borderRadius: 4, height: 40, width: "70%", borderColor: 'gray', borderWidth: 1, padding: 5 }}
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                placeholder="Enter Email"
                            />

                        </View>}
                />}

            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {

        store_user: (user) => dispatch(update_user(user))
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
    },
});

//make this component available to the app
export default connect(null, mapDispatchToProps)(User);
