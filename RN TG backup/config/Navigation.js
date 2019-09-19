import * as Routes from '../components/index';

import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';


const AppStackNavigator = createStackNavigator({
    FirstScreen: {
      screen: Routes.Wellcome,
      navigationOptions: () => ({
        title: `Wellcome TO APP`,
        headerStyle: { backgroundColor: '#8E6E53', Color: '#FFF', },
        headerTintColor: '#FFF',
      }),
    },
});


export default createAppContainer(AppStackNavigator);