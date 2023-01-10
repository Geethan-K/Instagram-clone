import { View, Text,StyleSheet,ScrollView,Image } from 'react-native'
import React from 'react'
//import { users } from '../../Data/Users'

export const users = [
  {
      user:'Steve',
      image:require('../../assets/profile_1.webp')
  },
  {
      user:'Helen',
      image:require('../../assets/profile_2.jpg')
  },
  {
      user:'Dilan_Haleri',
      image:require('../../assets/profile_3.jpg')
  },
  {
    user:'Swetha',
    image:require('../../assets/profile_4.jpg')
},
{
    user:'Laila',
    image:require('../../assets/profile_5.jpg')
}
]

const Stories = () => {
  return (
    <View style={{marginBottom:15,marginTop:15}}>
      <ScrollView
        horizontal
        showHorizontakIndicator={false}
      >
        {users.map((story,index)=>{
          return(
            <View key={index} style={{alignItems:'center',justifyContent:'space-between'}}>
            <Image  source={story.image}  style={styles.story}/>
            <Text style={{color:'white'}}>
              {
                  story.user.length>11 ? story.user.slice(0,10).toLowerCase()+'...'
                  : story.user.toLowerCase()
              }
              </Text>
          </View>
          )    
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    story:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:3,
        borderWidth:3,
        borderColor:'orange'
    }
})

export default Stories