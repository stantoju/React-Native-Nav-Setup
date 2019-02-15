import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text>Home Screen</Text>
                    <Button title="Login" onPress={()=> this.props.navigation.navigate('Login')} />
                    <Button title="Dashboard" onPress={()=> this.props.navigation.navigate('Dashboard')} />
                </View>
            </View>
        );
    }

}
export default HomeScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13A3A3',
        paddingLeft:40,
        paddingRight:40
    }
});