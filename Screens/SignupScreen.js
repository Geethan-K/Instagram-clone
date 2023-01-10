import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
//import LoginForm from '../Components/Loginscreens/LoginForm'
import SignupForm from '../Components/Loginscreens/SignupForm'
const INSTAGRAM_LOGO = '../assets/insta-logo.png'

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}> 
        <View style={styles.logoContainer}>
        <Image
              style={{width: '100%', height: 100}}
              source={require('../assets/insta-logo.png')}
        />
        </View>
        <View style={{marginTop:50}}>
          <SignupForm  navigation={navigation}/>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:50
    }
})

export default SignupScreen