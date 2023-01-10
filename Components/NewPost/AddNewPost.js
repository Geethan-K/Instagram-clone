import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { Formik } from 'formik'
import FormikPostUploader from './FormikPostUploader'
navigation

const AddNewPost = ({navigation})=>{
  return(
  <View style={{backgroundColor:'black'}}>
    <Header navigation={navigation}/>
    <FormikPostUploader navigation={navigation} />
   </View>
  )  
}

const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Image source={require('../../assets/back-arrow.png')}  style={styles.imageContainer} />
        </TouchableOpacity>  
      <View style={{marginRight:'40%'}}>
      <Text style={{color:'white',fontWeight:500}}>POST</Text>
      </View>
    </View>



  )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'black'
    },
    imageContainer:{
        height:38,
        width:38
    }
})


export default AddNewPost


