import React from 'react';
import './closefriend.css';

export const CloseFriend = ({user}) => {
  
  return (
    <li className='leftbarFriend'>
        <img className="leftbarFriendImg" src={user.profilePicture} alt="User's Profile"></img>
        <span className="leftbarFriendName">{user.username}</span>
    </li>
  )
}
