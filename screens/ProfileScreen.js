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

class ProfileScreen extends Component {

    constructor(props){
        super(props);
        this.state =  { username: '', password: '' }
    }

    render() {
        return (
            <View behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text>Profile</Text>
                    <Button title="Go to Details" onPress={()=> this.props.navigation.navigate('Details')} />
                </View>
            </View>
        );
    }

}
export default ProfileScreen;

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