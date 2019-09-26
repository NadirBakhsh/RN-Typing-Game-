import React, { Component } from 'react';
import { StyleSheet, Button, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import Card from './GameCard'
import { get_all_user } from '../store/action';


class FirstScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.fetchAllUser()
    }

    async fetchAllUser() {
        await fetch('https://nadirabc.herokuapp.com/user/getAll')
            .then(response => response.json())
            .then(data => {
                this.props.store_users_data(data)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ display: 'flex', flex: 3, flexDirection: "column", justifyContent: "space-evenly", alignItems: 'center' }}>
                    <Card
                        word={"Already Having Account"}
                        Paragraph={"If you have already acount just to Login and Enjoy Game"}
                        Button={<Button
                            title="Login"
                            color="#8E6E53"
                            onPress={() => this.props.navigation.navigate('Login')}
                        />}
                    />
                    <Card
                        word={"Playing Frist Time"}
                        Paragraph={'If you are playing this game first time need to register yourself as Player'}
                        Button={
                            <Button
                                color="#8E6E53"
                                title="Sign Up"
                                onPress={() => this.props.navigation.navigate('User')}
                            />}
                    />

                </View>

            </View>
        );
    }
}


function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        store_users_data: (users) => dispatch(get_all_user(users))
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);