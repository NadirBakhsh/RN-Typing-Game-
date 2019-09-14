import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { connect } from "react-redux";
import Header from './GameHeader'
import Card from './GameCard'

class Level extends Component {

  esay() {
    this.props.esay()
    this.props.navigation.navigate('Game')
  }

  medium() {
    this.props.medium()
    this.props.navigation.navigate('Game')
  }

  hard() {
    this.props.hard()
    this.props.navigation.navigate('Game')
  }


  render() {
    return (
      <View style={styles.container}>
        <Header title="select Level" />
        <View style={{ display: 'flex', flex: 3, flexDirection: "column", justifyContent: "space-around", alignItems: 'center' }}>
          <Card
            word={"Esay Level"}
            Paragraph={'In this lavel You have 15 sec per/word '}
            Button={<Button title="Start" color="#8E6E53"
              onPress={() => this.esay()}
            />}
          />


          <Card
            word={"Medium Level"}
            Paragraph={'In this lavel You have 10 sec per/word '}
            Button={
              <Button title="Start" color="#8E6E53"
                onPress={() => this.medium()}
              />}
          />

          <Card
            word={"Hard Level"}
            Paragraph={'In this lavel You have 5 sec per/word '}
            Button={<Button title="Start" color="#8E6E53"
              onPress={() => this.hard()}
            />}

          />
        </View>
        <Button title="Score Board"
                color="#8E6E53"
                onPress={() => this.props.navigation.navigate('Scores')}
              />
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    counter: state.counter,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    esay: () => dispatch({ type: "ESAY" }),
    medium: () => dispatch({ type: "MEDIUM" }),
    hard: () => dispatch({ type: "HARD" }),
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    alignContent: "space-around",
    backgroundColor: '#F2F2F2',
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Level);