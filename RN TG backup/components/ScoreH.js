//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , ScrollView } from 'react-native';
import UserCard from './GameCard'
import { connect } from 'react-redux'

// create a component

const ScoreTemp = (props) =>{
    return(
    <View style={{width:'65%'}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:-25,borderBottomWidth:1,padding:2}}>
        <Text>Ranking</Text>
        <Text>Score</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:5,}}>
        <Text>{props.rank}</Text>
        <Text>{props.score}</Text>
        </View>
    </View>
    )
}

class ScoreE extends Component {
constructor(props) {
    super(props)
    this.state = {
        users : this.props.users.sort(),
    }
}

componentDidMount(){
    console.log(this.state.users,"uuuuuuuuuuuuuuuuu")
}

    render() {
        const {users} = this.state;
        return (
            <ScrollView style={{width:'100%',backgroundColor:'#F2F2F2'}}>
                <View style={styles.container}>
               {users.map((items,index)=>{
                   if(items.hard !== 0){                   
                   return (
                        <View key={items._id} style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:10,}} >
                        <UserCard
                        word={items.name}
                        component={<ScoreTemp rank={index + 1} score={items.hard} />}
                        />
                        </View>
                       )}
                   //console.log(items.name)
               })}
      

                </View>
          </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor: '#F2F2F2',
        fontSize: 30,
        width:'100%'
    },
});

function mapStateToProps(state) {
    return {
        users: state.allUsers  
    }
}


//make this component available to the app
export default connect(mapStateToProps,null)(ScoreE);