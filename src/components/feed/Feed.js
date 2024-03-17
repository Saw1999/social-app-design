import React from 'react';
import "./feed.css";
import { Share } from '../share/Share';
import { Posts } from '../../myData';
import { Post } from '../post/Post';


export const Feed = ({profile}) => {

  const HomeFeed = () => {
    return (
      <div>
        {Posts.map(post => (
          <Post key={post.id} post={post} />))}     
      </div>
    );
  };
  
  const ProfileFeed = () => {
    return (
      <div>
      </div>
    );
  };

  return (
    <div className='feed'>
        <div className='feedWrapper'>
          <Share />
          {profile? <ProfileFeed /> : <HomeFeed />}
        </div>
    </div>
  )
}
