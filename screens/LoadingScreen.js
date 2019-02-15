import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

class LoaderScreen extends Component {

  constructor(){
    super()
    this.loadApp()
  }

  loadApp = async() => {
    const userToken = await AsyncStorage.getItem('userToken')
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  };
    render(){
        return(
            <View>
                <ActivityIndicator />
            </View>
        )
    }
}

export default LoaderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignSelf: 'flex-start', paddingHorizontal: 20,
    fontWeight: "700",

  },
  codeView: {
    width: "90%",
    borderRadius: 5,
    margin: 20,
    padding: 20,
    backgroundColor: '#eaeaea'
  },
  code: {
    fontWeight: "400",
    fontSize: 15
  }
});