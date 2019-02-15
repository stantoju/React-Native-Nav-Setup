import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";
import { createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer,
  createBottomTabNavigator,
createDrawerNavigator} from 'react-navigation'



import DashboardScreen from './screens/DashboardScreen'
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DocumentsScreen from "./screens/DocumentsScreen";
import NotificationScreen from "./screens/NotificationScreen";
import DetailsScreen from "./screens/DetailsScreen";



const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: "Profile",
        headerLeft: (<Text
            style={{paddingLeft: 10}}
            onPress={()=> navigation.openDrawer()}
            size={30}
            >Menu</Text>
        )
      }
    }
  },
  Details: {
    screen: DetailsScreen
  }
})



const DocumentStack = createStackNavigator({
  Document: {
    screen: DocumentsScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: "Document",
        headerLeft: (<Text
            style={{paddingLeft: 10}}
            onPress={()=> navigation.openDrawer()}
            size={30}
            >Menu</Text>
        )
      }
    }
  }
})


const NotificationStack = createStackNavigator({
  Notifications: {
    screen: NotificationScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: "Notifications",
        headerLeft: (<Text
            style={{paddingLeft: 10}}
            onPress={()=> navigation.openDrawer()}
            size={30}
            >Menu</Text>
        )
      }
    }
  }
})

const DashboardTabNavigator = createBottomTabNavigator({
  Profile: ProfileStack,
  Documents: DocumentStack,
  Notifications: NotificationStack
},{
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      header: null,
      headerTitle: routeName
    }
  }
})


const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator
},
{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft: (<Text
          style={{paddingLeft: 10}}
          onPress={()=> navigation.openDrawer()}
          size={30}
          >Menu</Text>
      )
    }
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
},{
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: 'gray'
    }
  }
})


const AppSwitchNavigator =  createSwitchNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Dashboard: AppDrawerNavigator
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default class App extends React.Component {
  render() {
    return(
      <AppContainer />
    )
  }
}
