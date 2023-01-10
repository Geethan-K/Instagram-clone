import { View, Text,TextInput,StyleSheet, Pressable,Image,TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import {firebase,db} from '../../firebase'
import { Formik } from 'formik'
import * as yup from 'yup'
import Validator, { validate } from 'email-validator'


const SignupForm = ({navigation}) => {
    const SignupFormSchema = yup.object().shape({
        email:yup.string().email().required('email is required'),
        username:yup.string().required().min(3,'A username is required'),
        password:yup.string().required().min(8,"your password should have atleast 8 characters")
    })


    const onSingup = async (email,username,password)=>{
        try{
            const authUser =  await firebase.auth().createUserWithEmailAndPassword(email,password);
            console.log('User created successfully !!!');
            db.collection('users').doc(authUser.user.email).set({
                userID:authUser.user.uid,
                userName:username,
                email:email,
                password:password
            })
        }catch(error){
            Alert.alert(error)
        }
    }

  return (
    <View styles={styles.wrapper}>
        <Formik
            initialValues={{email:'',password:'',username:''}}
            validationSchema={SignupFormSchema}
            validateOnMount={true}
            onSubmit={(values)=>{onSingup(values.email,values.username,values.password)}}
        >
            {
                ({handleChange,handleBlur,handleSubmit,values,isValid})=>{
                 return(
                    <>
                    <View style={[styles.inputField,{
                       
                        borderColor:values.email.length < 1 || Validator.validate(values.email) ? 'black' : 'red'
                    }]}>
                        <TextInput 
                        placeholder='email'
                        placeholderTextColor='gray'
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    </View>
                    <View style={[styles.inputField,{
                        borderColor:
                        1 > values.username.length || values.username.length <=8 ? 'black':'red'
                    }]}>
                        <TextInput 
                        placeholder='Username'
                        placeholderTextColor='gray'
                        autoFocus={true}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
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
                        <Text style={{color:'white'}}>Sign Up</Text>            
                    </Pressable>
                    <View style={styles.signupContainer}>
                        <Text>Already have an account ?</Text>
                        <TouchableOpacity onPress={()=>navigation.push('LoginScreen')}>
                            <Text style={{color:'blue'}}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    </>

                 )
                }
            }
        </Formik>
    </View>
  )
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
    button: isValid=>(
        {
            backgroundColor:isValid ? 'blue' : '#9ACAF7',
            alignItems:'center',
            justifyContent:'center',
            minHeight:42,
            borderRadius:5
        }
    )  ,
    signupContainer:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:50
    }
})

export default SignupForm