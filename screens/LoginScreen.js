import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";

class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state =  { username: '', password: '' }
    }

    componentDidMount(){
        this._loadInitialState().done();
    }

    _loadInitialState = async() => {
        
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>User Login</Text>
                        <TextInput 
                        style={styles.textinput} placeholder='Username'
                        onChangeText={(username) => this.setState({username})}
                        underlineColorAndroid='transparent'>
                        </TextInput>

                        <TextInput 
                        style={styles.textinput} placeholder='Password'
                        onChangeText={(password) => this.setState({password})}
                        underlineColorAndroid='transparent'>
                        </TextInput>

                        <TouchableOpacity style={styles.btn}
                        onPress={this.login}>
                        <Text>Login</Text>
                         </TouchableOpacity>

                         <Text style={styles.footer} onPress={()=>this.props.navigation.navigate("Register")}>Create an Account</Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
    login = () => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                username: this.state.username,
                password: this.state.password
            }
        }).then((response) => response.json())
        .then((res => {
            if(res.success === true){
                AsyncStorage.setItem('user', res.user);
                this.props.navigation.navigate('Home');
            } else {
                alert(res.message)
            }
        })).done()
    }
}
export default LoginScreen;

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
        paddingRight:40,
    },
    header: {
        fontSize: 24,
        marginBottom: 40,
        color: '#FFF',
        fontWeight:'bold'
    },
    textinput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor:'#fff',
        paddingRight:40,
    },
    btn: {
        alignSelf: 'stretch',
        padding: 16,
        color: '#FFF',
        alignItems: 'center',
        backgroundColor:'#F25F5C'
    },
    footer: {
        color: '#FFF',
        alignItems: 'center',
        marginTop: 100,
    },
});