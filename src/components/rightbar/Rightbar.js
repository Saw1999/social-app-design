import React from 'react';
import "./rightbar.css";
import { Online } from '../online/Online';
import {Users} from '../../myData';

export const Rightbar = ({profile}) => {
  
  const HomeRightbar = () => {
    return (
      <div>
        <div className='birthdayContainer'>
            <img className='birthdayImg' src='assets/post/birthday.png' alt=''></img>
            <span className='birthdayText'><b>Bai Lu </b>and <b>2 other friends</b> have a birthday today!</span>
          </div>
          <img className='rightbarAd' src='assets/post/ad2.jpg' alt =''></img>
          
          <h4 className='rightbarTitle'>Online Friends</h4>
          <ul className='rightbarFriendList'>
            {Users.map(user => (
              <Online key={user.id} user={user} />))}
          </ul>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <div>
        <h4 className='rightbarTitle'>My Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City: </span>
            <span className='rightbarInfoValue'>Perth, WA</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From: </span>
            <span className='rightbarInfoValue'>Bago, Myanmar</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship: </span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>My Friends</h4>
        <ul className='rightbarFollowings'>
          <li className='rightbarFollowing'>
            <img className='rightbarFollowingImg' 
              src={`assets/person/xiaozhan.jpeg`} alt=''>
            </img>
            <span className='rightbarFollowingName'>Xiao Zhan</span>
          </li>

          <li className='rightbarFollowing'>
            <img className='rightbarFollowingImg' 
              src={`assets/person/wangyibo.jpeg`} alt=''>
            </img>
            <span className='rightbarFollowingName'>Wang Yibo</span>
          </li>

          <li className='rightbarFollowing'>
            <img className='rightbarFollowingImg' 
              src={`assets/person/zhaoliying2.jpeg`} alt=''>
            </img>
            <span className='rightbarFollowingName'>Zhao Liying</span>
          </li>

          <li className='rightbarFollowing'>
            <img className='rightbarFollowingImg' 
              src={`assets/person/shenyue.jpeg`} alt=''>
            </img>
            <span className='rightbarFollowingName'>Shen Yue</span>
          </li>

          <li className='rightbarFollowing'>
            <img className='rightbarFollowingImg' 
              src={`assets/person/hejiong.jpg`} alt=''>
            </img>
            <span className='rightbarFollowingName'>He Jiong</span>
          </li>

          <li className='rightbarFollowing'>
            <img className='rightbarFollowingImg' 
              src={`assets/person/luhan.jpeg`} alt=''>
            </img>
            <span className='rightbarFollowingName'>Luhan</span>
          </li>
        </ul>
      </div>
    )
  }
  return (
    <div className='rightBar'>
        <div className='rightbarWrapper'>
          {profile? <ProfileRightbar /> : <HomeRightbar />}
        </div>
    </div>
  )
}
