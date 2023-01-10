
import React, { useState, useEffect } from 'react'
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context';
import Header from '../Components/Home/Header'
import Stories from '../Components/Home/Stories'
import Posts from '../Components/Home/Posts'
import { ScrollView,StyleSheet,View } from 'react-native'
import Bottomtabs,{bottomTabsIcon} from '../Components/Home/Bottomtabs'
import { POSTS } from '../Components/Home/Posts';
import { db } from '../firebase';


const HomeScreen = ({navigation}) => {

  const [allPosts,setallPosts] = useState([]);

  useEffect(() =>{
    db.collectionGroup('posts').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=>doc.data()))
     setallPosts(snapshot.docs.map(doc=>doc.data()))
    })
  },[])

  return ( 
    <SafeAreaProvider>
  <SafeAreaView style={style.container}>
     <Header  navigation={navigation}/>
      <Stories />
      <View style={{flex:1}}>
      <ScrollView>
        {
          allPosts.map((post,index)=>{
            return(
              <Posts key={index} post={post} />
            )    
        })
        }
      </ScrollView>
      <View style={{height:10,position:'absolute',bottom:0,left:0,right:0,backgroundColor:'black'}}>
      <Bottomtabs  icon={bottomTabsIcon}/>
      </View>
      </View>
      
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',

  }
})

export default HomeScreen
   
//<Bottomtabs icon={bottomTabsIcon}/>
  
