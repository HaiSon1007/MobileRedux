import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { IMAGEPATH } from '../constants/imagepath'
import {
    loginMedproByApple,
    loginMedproByFacebook,
    loginMedproByGoogle,
    loginMedproByZalo,
    requestUserLogin,
    resetErrorLogin,
} from '../../state/ducks/user/actions';

class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <TextInput style={{ borderWidth: 1, borderRadius: 1 }} placeholder={"username"} />
                    <TextInput style={{ borderWidth: 1, borderRadius: 1 }} placeholder={"password"} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green', justifyContent: "center", alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ backgroundColor: "red", justifyContent: 'center', alignItems: 'center', width: 50, height: 50 }}
                        onPress={() => { this.props.requestUserLogin("Phan Hải Sơn", "100799") }}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "blue", justifyContent: 'center', alignItems: 'center', width: 50, height: 50 }}>
                        <Text>logout</Text>
                    </TouchableOpacity>
                </View >
                <View style={{ flex: 5 }}>
                    <Image style={{ width: 50, height: 50 }} source={IMAGEPATH.Image_DD} />
                </View>
            </View >
        );
    }
}

export default Login;