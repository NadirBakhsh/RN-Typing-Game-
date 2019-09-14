//import liraries
import React, { Component } from 'react';
import {View, Text, StyleSheet,Button,} from 'react-native';

// create a component
class Playagain extends Component {

    
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: '80%', height: 60, borderRadius: 10 }}>
                    <Button title="Play Again"
                        color="#8E6E53"
                        onPress={() => this.props.navigation.navigate('Level')}
                    />
                    <Text></Text>
                    <Button title="Logout"
                        color="#8E6E53"
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                  
    
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor: '#F2F2F2',
    },
});

//make this component available to the app
export default Playagain;
