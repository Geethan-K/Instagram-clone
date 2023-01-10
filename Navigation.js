import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NewPostScreen from './Screens/NewPostScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen'
import SignupScreen from './Screens/SignupScreen';


const stack = createStackNavigator();
const screenOpts = {
    headerShown:false
}

export const SignedInStack = () => {
    return(
<NavigationContainer>
    <stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOpts}> 
        <stack.Screen name='HomeScreen' component={HomeScreen} />
        <stack.Screen name='NewPostScreen' component={NewPostScreen} />
    </stack.Navigator>
</NavigationContainer>
    )

}


export const SignedOutStack = () =>{
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOpts}>
                <stack.Screen  name="LoginScreen" component={LoginScreen}/>
                <stack.Screen  name="SignupScreen" component={SignupScreen} />
            </stack.Navigator>
        </NavigationContainer>
    )
}
