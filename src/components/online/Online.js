import React from 'react';
import './online.css';

export const Online = ({user}) => {
  return (
    <li className='rightbarFriend'>
        <div className='rightbarProfileContainer'>
        <img className='rightbarProfileImg' src={user.profilePicture} alt=''></img>
        <span className='rightbarOnlineStatus'></span>
        </div>
        <span className='rightbarUsername'>{user.username}</span>
    </li>
)
}
