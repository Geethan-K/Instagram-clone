import { View, Text,Button,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { TextInput } from 'react-native-web'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'

import {firebase,db} from '../../firebase'
const PLACEHOLDER_IMG = require('../../assets/icon.png')

const uploadPostSchema = yup.object().shape({
    imgurl:yup.string().url().required('A url is required'),
    caption:yup.string().max(1000,'reached maximum limit')
})


const FormikPostUploader = ({navigation}) => {

    const[thumbnailUrl,setThumbnailUrl] = useState(PLACEHOLDER_IMG);
    const[currentLoggedInUser,setCurrentLoggedInUser] = useState(null)

    const getUserName = ()=>{
        const user = firebase.auth().currentUser;
        console.log(' user id '+user.uid)
        const unsubscribe = db.collection('users').where('userID','==',user.uid).limit(1).onSnapshot(
            snapshot=>{
                snapshot.docs.map(doc=>{
                    console.log('doc'+ JSON.stringify(doc.data()))
                    console.log(' user name 29:'+doc.data().userName)
                    setCurrentLoggedInUser({
                        username:doc.data().userName,
                        profilePicture:doc.data().profile_picture
                    })
                })
            }
        )
        console.log('logged in user info '+currentLoggedInUser)
        return unsubscribe
    }

    useEffect(()=>{
        getUserName()
    },[])

    const uploadToFirebase = (imageUrl,caption)=>{
     
        const unsubscribe = db.collection('users')
        .doc(firebase.auth().currentUser.email)
        .collection('posts')
        .add({
            imageUrl:imageUrl,
            user:currentLoggedInUser.username,
            profile_picture:currentLoggedInUser.profilePicture,
            owner_id:firebase.auth().currentUser.uid,
            caption:caption,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            likes:0,
            likes_by_users:[],
            comments:[]
        }).then(()=>navigation.goBack())
        return unsubscribe
    }

  return (
   <Formik
     initialValues={{caption:'',imgurl:''}}
     onSubmit={(values)=>{uploadToFirebase(values.imgurl,values.caption)}}
     validationSchema={uploadPostSchema}
     validateOnMount={true}
   >
    {
 ({handleBlur,handleChange,handleSubmit,values,errors,isValid})=>(
    <View>
        <View style={{margin:20,flexDirection:'row',justifyContent:'space-between'}}>
            <Image  source={{uri:validUrl.isUri(thumbnailUrl)?thumbnailUrl:PLACEHOLDER_IMG}}  style={{width:100,height:100}}/>
            <View style={{flex:1,marginLeft:15}}>
            <TextInput 
             placeholder='write a caption '
             textInputColor='gray' 
              multiline={true} 
              style={{ color:'white',fontSize:20 }}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              value={values.caption}
              />
            </View>
        </View>
        <Divider width={1} orientation='vertical' />
        <TextInput 
                placeholder='Enter image url' 
                textInputColor='gray' 
                style={{ color:'white',fontSize:20 }}
                onChangeText={handleChange('imgurl')}
                onBlur={handleBlur('imgurl')}
                value={values.imgurl}
                onChange={(e)=>{
                   
                    setThumbnailUrl(e.nativeEvent.text)}}
            />
            {
                errors.imgurl && (
                    <Text style={{fontSize:10,color:'red'}} >
                        {errors.imgurl}
                    </Text>
                )
            }

            <Button onPress={handleSubmit} title='Send' disabled={!isValid}/>
    </View>
)
    }
   </Formik>
  )
}

export default FormikPostUploader