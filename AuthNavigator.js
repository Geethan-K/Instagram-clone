import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import {firebase} from './firebase'
import {SignedInStack,SignedOutStack} from './Navigation'

const AuthNavigator = () => {
    const [currentUser,setCurrentUser] = useState(null);

    const userHandler = (user) =>{
        user ? setCurrentUser(user) :setCurrentUser(null)
    }

    useEffect (()=>firebase.auth().onAuthStateChanged(user=>{userHandler(user),[]}))

  return (
    <>
        {currentUser ? <SignedInStack /> : <SignedOutStack />}
    </>
  )
}

export default AuthNavigator