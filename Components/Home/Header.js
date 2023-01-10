import { Alert,View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {firebase} from '../../firebase'
import { users } from '../../Data/Users'
import { ScrollView } from 'react-native-web'

const signOut =async () =>{
  try{
    await firebase.auth().signOut();
  }catch(error){
    Alert.alert(error);
  }
}


const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={signOut}>
        <Image  style={styles.logo}   source={require('../../assets/logo.png')}/>
        </TouchableOpacity> 
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
            <Image source={require('../../assets/add.png')} style={styles.icons}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/favourite.png')} style={styles.icons}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
                <Text style={styles.unreadBadgeText}>66</Text>
            </View>
            <Image source={require('../../assets/messenger.png')} style={styles.icons}/>
          </TouchableOpacity>
        </View>
    </View>
    

  )
}

// const Header = () =>{
//   return(
//     users.map((user,index)=>{
//      <View style={styles.container}>
// <Image source={'../../assets/profile_3.jpg'} style={{width:'100%',height:'100%'}}  resizeMode={'cover'}/>
   
//      </View>
        
//     })
//   )
 
// }


const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
 logo:{
    height:50,
    width:200,
    resizeMode:'contain'
},
iconContainer:{
    flexDirection:'row',

},
icons:{
    width:30,
    height:30,
    marginLeft:10,
    resizeMode:'contain',
    color:'white'
},
unreadBadge:{
    backgroundColor:'red',
    position:'absolute',
    left:20,
    bottom:18,
    width:25,
    height:18,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    zIndex:20
},
unreadBadgeText:{
    color:'white',
    fontWeight:500
}
})

export default Header