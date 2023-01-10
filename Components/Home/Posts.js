import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'
import {Divider} from 'react-native-elements'
import { users } from "./Stories";

export const POSTS = 
[
    {
        imgurl:require('../../assets/insta_post_2.jpg'),
        user:users[0].user,
        likes:7260,
        caption:"😱 The Hardest Walk Is Walking #Alone ☝👤. But Its Also The #Strongest. 💪🤙",
        profile_pic:users[0].image,
        comments:[
            {
                user:'Gokul',
                comment:'Wow!!..thats awsome stuff'
            },
            {
                user:'sridhar',
                comment:'great begining'
            }
        ]
    },
    {
        imgurl:require('../../assets/insta_post_1.webp'),
        user:users[1].user,
        likes:7260,
        caption:"😱 The Hardest Walk Is Walking #Alone ☝👤. But Its Also The #Strongest. 💪🤙",
        profile_pic:users[1].image,
        comments:[
            {
                user:'Gokul',
                comment:'Wow!!..thats awsome stuff'
            },
            {
                user:'sridhar',
                comment:'great begining'
            }
        ]
    }
]

const footerIcons =[
    {
        name:'Like',
        imgurl:require('../../assets/favourite.png')
    },
    {
        name:'comment',
        imgurl:require('../../assets/chat.png')
    },
    {
        name:'share',
        imgurl:require('../../assets/send.png')
    },
    {
        name:'save',
        imgurl:require('../../assets/bookmark.png')
    }
    
    
]

const Posts = ({post}) => {
  return (
    <View style={{marginBottom:30}}>
      <Divider width={1} orientation='vertical'>
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{marginHorizontal:15,marginTop:10}}>
            <PostFooter />
            <Likes post={post} />
            <CommentsSection post={post} />
            <Comment post={post} />
        </View>
      </Divider>
    </View>
  )
}


const PostImage = ({post}) =>{
    return(
        <View style={{width:'100%',height:450,}}>
        <Image  source={post.imageUrl}  style={{height:'100%',width:'100%'}} />
          </View>
    )
   
  
}

const PostHeader = ({post}) =>{
  
    return(
       
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:'5'}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Image source={post.profile_picture} style={styles.story}/>
            <Text style={{color:'white',fontWeight:700}}> {post.user} </Text>
        </View>

        <Text style={{fontWeight:'600',color:'white'}}>...</Text>
    </View>
    )
   
}




const PostFooter=()=>{
    return(
        <View style={{flexDirection:'row'}}>
        <View  style={styles.leftFooterIcons} >
          <Icons imgstyle={styles.footerIcon} imgurl={footerIcons[0].imgurl} />
          <Icons imgstyle={styles.footerIcon} imgurl={footerIcons[1].imgurl} />
          <Icons imgstyle={styles.footerIcon} imgurl={footerIcons[2].imgurl} />
        </View>
        <View style={{flex:1, alignItems:'flex-end'}}>
          <Icons imgstyle={styles.footerIcon} imgurl={footerIcons[3].imgurl} />
        </View>
    </View>
    )
   
}  

const Icons = ({imgstyle,imgurl})=>{
    return(
        <TouchableOpacity>
        <Image style={imgstyle}  source={{uri:imgurl}}/>
    </TouchableOpacity>
    )
  
}

const Likes = ({post}) =>{
    return(
        <View>
        <View style={{flexDirection:'row' , marginTop:4}}>
        <Text style={{color:'white',fontWeight:600}}>{post.likes} Likes</Text>
       
       </View>
       <View>
         <Text style={{color:'white',fontWeight:600}}>{post.caption}</Text>
       </View>
        </View>
        
    )
   
}

const Caption = ({post}) =>{
    return(
<View style={{marginTop:4}}>
        <Text style={{color:'white',fontWeight:600}}>{post.user}</Text>
        <Text style={{color:'white'}}>{post.caption}</Text>
    </View>
    )
    
}


const CommentsSection =({post})=>{
    return(
        <View style={{marginTop:5}}>
        {!!post.comments.length &&  <Text style={{color:'gray'}}>
            View {post.comments.length > 1 ? 'all':''}{' '}{post.comments.length}{' '}{post.comments.length > 1 ? 'comments':'comment'}
        </Text>}
    </View>
    )
   
    }

const Comment = ({post}) =>{
   return(
    <View>
         {
        post.comments.map((comment,index)=>{
            return(
                <View key={index} style={{flexDirection:'row',marginTop:5}}>
                <Text style={{color:'white'}}>
                    <Text style={{fontWeight:600}}>{comment.user}</Text>
                    <Text>{comment.comment}</Text>
                </Text>
            </View>
            )
          
        })
    }
    </View>
   )
     
}

const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:3,
        borderWidth:1.5,
        borderColor:'orange'
    },
    footerIcon:{
        width:33,
        height:33
    },
    leftFooterIcons:{
        width:'35%',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})


export default Posts


/**
 * 
 *  
 */