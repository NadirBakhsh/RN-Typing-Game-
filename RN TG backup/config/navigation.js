import * as Routes from '../components/index';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';






const AppStackNavigator = createStackNavigator({
  // FirstScreen: {
  //   screen: Routes.FirstScreen,
  //   navigationOptions: () => ({
  //     title: `Wellcome To Typing Game`,
  //     headerStyle: { backgroundColor: '#8E6E53', Color: '#FFF', },
  //     headerTintColor: '#FFF',
  //   }),
  // },


  // 'User': {
  //   screen: Routes.User,
  //   navigationOptions: () => ({
  //     title: `Player Info`,
  //     headerStyle: { backgroundColor: '#8E6E53', Color: '#FFF', },
  //     headerTintColor: '#FFF',
  //   }),
  // },

  'Login': {
    screen: Routes.Login,
    navigationOptions: () => ({
      title: `Login With Email`,
      headerStyle: { backgroundColor: '#8E6E53', Color: '#FFF', },
      headerTintColor: '#FFF',
    }),
  },

})


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

})



export default createAppContainer(appSwitchNavigator);