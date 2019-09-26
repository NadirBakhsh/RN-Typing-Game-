//import liraries
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Card from './GameCard'

import { update_user } from '../store/action';
import { connect } from 'react-redux';

// create a component
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            result: "",
        }
    }



    fetchData() {
        fetch("https://nadirabc.herokuapp.com/user/getUserByEmail", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({ email: this.state.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.result[0])
                this.setState({ result: data.result[0] })
            }).then(() => {
                if (this.state.result.email === this.state.email) {
                    const user = {
                        _id: this.state.result._id,
                        playerName: this.state.result.name,
                        email: this.state.result.email,
                        esay: this.state.result.esay,
                        medium: this.state.result.medium,
                        hard: this.state.result.hard,
                    }
                    this.props.store_user(user);
                    this.props.navigation.navigate('Level')
                } else {
                    alert("Email is worng")
                }
            }).catch(() => {
                alert("Email Not Match")
            })
    }



    async loginHendelar() {
        this.fetchData()
    }

    render() {
        return (
            <View style={styles.container}>
                {<Card
                    word={"Enter Your Email"}
                    Input={<TextInput
                        style={{ borderRadius: 4, height: 40, width: "70%", borderColor: 'gray', borderWidth: 1, padding: 5 }}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        autoFocus={true}
                        onSubmitEditing={()=>this.loginHendelar()}
                    />}
                />}

            </View>
        );
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

function mapDispatchToProps(dispatch) {
    return {
        store_user: (user) => dispatch(update_user(user))
    }
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(User);