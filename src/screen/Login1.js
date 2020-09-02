import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';


export default function Login() {
  const [username, setusername] = useState();

  const logoAnim = new Animated.Value(0);
  const btnAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(logoAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.in(Easing.bounce),
    }).start();

    Animated.timing(btnAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  });

  const size = logoAnim.interpolate({
    inputRange: [0.2, 1],
    outputRange: [0, 200],
  });

  const logoAnimStyles = [
    styles.image,
    {
      width: size,
      height: size,
    },
  ];

  const opacity = btnAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const loginWithGuest = async () => {
    getDate();
    LoginHandle.signUpWithGuest(username).then(res => {
      if(res.status == 200){
        //await AsyncStorage.setItem('token')
      }else{
        //Failed
      }
    })
  };

  const getDate = () => {
    var minute = new Date().getMinutes();
    var hour = new Date().getHours();
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var numberRandom = Math.floor(Math.random() * 1000) + 1;
    setusername('guest' + minute + hour + day + month + year + numberRandom);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Image
          style={logoAnimStyles}
          source={require('../compoment/image/header.png')}
        />
      </View>
      <View style={styles.loginContainer}>
        <Animated.View style={{opacity: opacity}}>
          <Pressable style={styles.btnLogin} onPress={() => loginWithGuest()}>
            <Icons style={styles.icon} name="user" size={26} color={'white'} />
            <Text style={styles.btnText}>Login with Guest</Text>
          </Pressable>
        </Animated.View>

        <View style={{height: 10}} />
        <Animated.View style={{opacity: opacity}}>
          <Pressable style={styles.btnLogin}>
            <Icons
              style={styles.icon}
              name="facebook"
              size={26}
              color={'white'}
            />
            <Text style={styles.btnText}>Login with Facebook</Text>
          </Pressable>
        </Animated.View>
        <View style={{height: 20}} />
      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: width,
    height: height / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
  loginContainer: {
    width: width,
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    flex: 3,
    color: 'white',
    fontSize: 22,
  },
  icon: {
    flex: 1,
    paddingLeft: 10,
  },
  btnLogin: {
    flexDirection: 'row',
    height: 40,
    width: '80%',
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: 'transparent',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
