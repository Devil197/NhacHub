import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Animated, Dimensions} from 'react-native'
import { TypingAnimation } from 'react-native-typing-animation';
import { login } from '../css/login';
import LottieView from 'lottie-react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Login({ navigation }) {

    const width = Dimensions.get("screen").width;
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    // const [loading, setLoading] = useState(true);
    // if (loading) {
    //     return <LottieView style={{ backgroundColor: '#ffffff' }} source={require('../compoment/image/loading.json')} autoPlay loop />;
    // }
    
    useEffect(() => {
      
    });
    
    a = () => {
        
        navigation.push('BottomNavigation');

    }
    _foucus = (value) => {
        if (value == "email") {
            setEmail(true);
            setPassword(false);
            console.log("bbbb" + email);
            console.log("oooo" + password);
        } else {
            setEmail(false);
            setPassword(true);
        }
        console.log("cccc" + email);
    }
    _typing = () => {
        return (
            <TypingAnimation
                dotColor="#93278f"
                style={{ marginRight: 25 }}
            />
        )
    }

    return (

        <View style={login.container}>
            <View style={login.header}>
                <ImageBackground style={login.imageBackGround} source={require('../compoment/image/header.png')}>
                    <Text style={login.text1}>Welcome Back</Text>
                    <Text style={login.text2}>Sign in to continue</Text>
                </ImageBackground>
            </View>
            <View style={login.footer}>
                <Text style={login.title}>E-mail</Text>
                <View style={login.action}>
                    <TextInput
                        style={login.textInput}
                        placeholder="Your E-mail..."
                        onFocus={() => _foucus("email")}
                    />
                    {email ? _typing() : null}
                </View>

                <Text style={login.title, { marginTop: 20 }}>Password</Text>
                <View style={login.action}>
                    <TextInput
                        style={login.textInput}
                        placeholder="Your Password..."
                        onFocus={() => _foucus("password")}
                    />
                    {password ? _typing() : null}
                </View>
                <TouchableOpacity onPress={() => a()}>
                    <View style={login.button_container}>
                        <Animated.View style={[login.animation]}>
                            <Text style={login.textLogin}>Login</Text>
                        </Animated.View>
                    </View>
                </TouchableOpacity>
                <View style={login.signUp}>
                    <Text style={{ color: 'black' }}>New user?</Text>
                    <Text style={{ color: 'blue' }}> Sign up?</Text>
                </View>
                <View style={login.view_icon}>
                    <TouchableOpacity>
                        <FontAwesome5 style={login.fb} name={'facebook-square'} size={60} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FontAwesome5 style={login.gg} name={'google-plus-square'} size={60} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <TouchableOpacity onPress={() => navigation.push('BottomNavigation')}>
                <Text>Main</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Login1')}>
                <Text>login 1</Text>
            </TouchableOpacity> */}
        </View>

    )
}
