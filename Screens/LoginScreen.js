import { View, Text,StyleSheet,Image,Alert } from 'react-native'
import React from 'react'
import LoginForm from '../Components/Loginscreens/LoginForm'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}> 
        <View style={styles.logoContainer}>
        <Image
              style={{width: '100%', height: 100}}
              source={require('../assets/insta-logo.png')}
        />
        </View>
        <View style={{marginTop:80}}>
        <LoginForm  navigation={navigation}/>
        </View>
        
    </View>
  )
}




const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default LoginScreen