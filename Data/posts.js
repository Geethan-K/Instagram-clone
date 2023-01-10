import { users } from "../Components/Home/Stories";

export const POSTS = 
[
    {
        imgurl:'../../assets/profile-img.png',
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
        imgurl:'../../assets/insta_post_2.jpg',
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