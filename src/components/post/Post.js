import React, {useState} from 'react';
import "./post.css";
import {MoreVert} from '@mui/icons-material';
import {Users} from '../../myData';

export const Post = ({post}) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked? like - 1 : like + 1)
    setIsLiked(!isLiked)
  };

  return (
    <div className="post">
        <div className="postWrapper">
            <div className='postTop'>
              <div className='postTopLeft'>
                <img className='postUserProfile' 
                src={Users.filter((user) => user.id === post?.userId)[0].profilePicture} alt=''></img>            
                <span className='postUsername'>{Users.filter((user) => user.id === post?.userId)[0].username}</span>
                <span className='postDate'>{post.date}</span>
              </div>
              <div className='postTopRight'>
                <MoreVert />
              </div>
            </div>

            <div className='postMiddle'>
              <span className='postText'>{post?.desc}</span>
              <img className='postImg' src={post.photo} alt=''></img>
            </div>

            <div className='postBottom'>
              <div className='postBottomLeft'>
                <img className='reactIcon' src='assets/post/like2.png' alt='' onClick={likeHandler}></img>
                <img className='reactIcon' src='assets/post/heart.png' alt='' onClick={likeHandler}></img>

                <span className='postReactCounter'>{like} people like it.</span>
              </div>
              <div className='postBottomRight'>
                <span className='postCommentText'>{post.comment} comments</span>
              </div>
            </div>
        </div>
    </div>
  )
}
