import * as Routes from '../components/index';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';


const AppStackNavigator = createStackNavigator({
  FirstScreen: {
    screen: Routes.FirstScreen,
    navigationOptions: () => ({
      title: `Wellcome To Typing Game`,
      headerStyle: { backgroundColor: '#8E6E53', Color: '#FFF', },
      headerTintColor: '#FFF',
    }),
  },


  'User': {
    screen: Routes.User,
    navigationOptions: () => ({
      title: `Player Info`,
      headerStyle: { backgroundColor: '#8E6E53', Color: '#FFF', },
      headerTintColor: '#FFF',
    }),
  },

  'Login': {
    screen: Routes.Login,
    navigationOptions: () => ({
      title: `Login With Email`,
      headerStyle: { backgroundColor: '#8E6E53', Color: '#FFF', },
      headerTintColor: '#FFF',
    }),
  },

})


const tabNav = createMaterialTopTabNavigator({
  'Esay':{
    screen: Routes.ScoreE
  },
  'Medium':{
    screen: Routes.ScoreM
  },
  'Hard':{
    screen: Routes.ScoreH
  },
  'Game':{
    screen: Routes.PlayAgain
  },

},{
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#F2F2F2',
    style: {
      backgroundColor: '#8E6E53',
      marginTop: 24,
    },
  },
  navigationOptions: {
    header: {
      
    }, 
  },
});


const appSwitchNavigator = createSwitchNavigator({
  'Screens': {
    screen: AppStackNavigator,
  }, 

  'Level': {
    screen: Routes.Level,
    navigationOptions: () => ({
      title: `Selcet Game Level `,
      headerStyle: { backgroundColor: '#8E6E53', Color: '#FFF', },
      headerTintColor: '#FFF',
    }),
  },

  'Game': {
    screen: Routes.Game,
    navigationOptions: () => ({
      title: `Game Started`,
      headerStyle: { backgroundColor: '#8E6E53', Color: '#FFF', },
      headerTintColor: '#FFF',
    }),
  },

  'Scores' :{
    screen: tabNav,
  } 

})



export default createAppContainer(appSwitchNavigator);