import { View, Text,TextInput,StyleSheet, Pressable,Image,TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { Formik } from 'formik'
import * as yup from 'yup'
import Validator, { validate } from 'email-validator'


const LoginFormSchema = yup.object().shape({
    email:yup.string().email().required('email is required'),
    password:yup.string().required().min('8',"your password should have atleast 8 characters")
})

const LoginForm = ({navigation}) => {
  // const Validator = require('email-validator')

  return (
    <View styles={styles.wrapper}>
        <Formik
            initialValues={{email:'',password:''}}
            validationSchema={LoginFormSchema}
            validateOnMount={true}
            onSubmit={(values)=>{onLogin(values.email,values.password)}}
        >
            {
                ({handleChange,handleBlur,handleSubmit,values,isValid})=>(
                        <>        
                        <View style={[styles.inputField,{
                            borderColor:values.email.length < 1 || Validator.validate(values.email) ? 'black' : 'red'
                        }]}>
                            <TextInput 
                                placeholder='phone number , username or email'
                                placeholderTextColor='gray'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                        />
                        </View>
                        <View style={[styles.inputField,{
                            borderColor: 1 > values.password.length || values.password.length >=8 ? 'black' : 'red'
                        }]}>
                            <TextInput 
                              placeholder='password'
                              placeholderTextColor='gray'
                              textContentType='password'
                              secureTextEntry={true}
                              onChangeText={handleChange('password')}
                              onBlur={handleBlur('password')}
                             value={values.password} 
                        />  
                        </View>
                        <View style={{alignItems:'flex-end',marginBottom:30}}>
                            <Text>Forgot Password?</Text>
                        </View>
                        <Pressable 
                          titleSize={20} 
                          style={styles.button(isValid)} 
                          onPress={handleSubmit}
                          disabled={!isValid}
                          >
                            <Text style={{color:'white'}}>Log in</Text>            
                        </Pressable>
                        <View style={styles.signupContainer}>
                            <Text>Don't have an account ?</Text>
                            <TouchableOpacity  onPress={()=>navigation.push('SignupScreen')}>
                                <Text style={{color:'blue'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        </>
  )
            }
        </Formik>
    </View>
  )
}



const onLogin = async (email,password) =>{
    console.log('came inside')
    try{
      await  firebase.auth().signInWithEmailAndPassword(email,password)
      // firebase.auth().signInWithEmailAndPassword(email,password)
        console.log('firebase login successfull')
    }catch(error){
        alert(error)
        Alert.alert(error.message)
    }
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop:80
    },
    inputField:{
        borderRadius:4,
        padding:12,
        backgroundColor:'#FAFAFA',
        borderWidth:1,
        marginBottom:10
    },
    button: isValid=> {
        return(
            {
                backgroundColor:isValid ? 'blue' : '#9ACAF7',
                alignItems:'center',
                justifyContent:'center',
                minHeight:42,
                borderRadius:5
            }
        )
        
  }  ,
    signupContainer:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:50
    }
})

export default LoginForm