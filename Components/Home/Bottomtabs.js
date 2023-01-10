import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { Divider } from 'react-native-elements'


export const bottomTabsIcon = [
    {
        name:'Home',
        active:require('../../assets/tick.png'),
        inactive:require('../../assets/home.png')
    },
    {
        name:'Search',
        active:require('../../assets/tick.png'),
        inactive:require('../../assets/search.png')
    },
    {
        name:'Reels',
        active:require('../../assets/tick.png'),
        inactive:require('../../assets/reels.png')
    },
    {
        name:'Shop',
        active:require('../../assets/tick.png'),
        inactive:require('../../assets/purchase.png')
    },
    {
        name:'Profile',
        active:require('../../assets/tick.png'),
        inactive:require('../../assets/profile.png')
    }
]

const Bottomtabs = ({icon}) => {
  const[activeTab,setActiveTab] = useState('Home')
  const Icon = ({icon}) =>{
    return(
        
<TouchableOpacity onPress={()=>setActiveTab(icon.name)}>
        <Image source={icon.name==activeTab ? icon.active : icon.inactive}  style={styles.icon} />
    </TouchableOpacity>
    )
    
  }
    return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical'>
            <View style={styles.container}>
              {icon.map((icon,index)=>{
                  return(
                     <Icon key={index} icon={icon} />
                         )
          
             })}
            </View>
        </Divider>
     </View> 
   
  )


}
const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'black',
        
    },
    container:{
        flexDirection:'row',justifyContent:'space-between',height:50,marginTop:10
    },
    icon:{
        height:30,
        width:30
    }
})

export default Bottomtabs