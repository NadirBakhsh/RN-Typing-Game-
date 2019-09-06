//import liraries
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Card from './GameCard'

// create a component
class User extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email : ""
        }
    }


getUserdata(){
    
}


    
    render() {
        return (
            <View style={styles.container}>

                {<Card
                    word={"Enter Your Email"}
                    Button={<Button title="Start Game" color="#8E6E53"
                        onPress={() => this.props.navigation.navigate('Level')}
                    />}
                    Input={<TextInput
                        style={{ borderRadius: 4, height: 40, width: "70%", borderColor: 'gray', borderWidth: 1, padding: 5 }}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        autoFocus={true}
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

//make this component available to the app
export default User;
