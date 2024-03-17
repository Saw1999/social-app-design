import React from 'react';
import "./profile.css";
import { TopBar } from '../../components/topbar/TopBar';
import { Leftbar } from '../../components/leftbar/Leftbar';
import { Rightbar } from '../../components/rightbar/Rightbar';
import { Feed } from '../../components/feed/Feed';


export const Profile = () => {
    
  return (
    <div>
        <TopBar />
        <div className='profileContainer'>
            <Leftbar />
            <div className='profileRight'>
                <div className='profileRightTop'>
                    <div className='profileImgs'>
                        <img className='profileCoverPhoto' src={`assets/post/pagoda.jpg`} alt='My Cover'></img>
                        <img className='profilePhoto' src={`assets/person/mypic.jpg`} alt='My Profile'></img>
                    </div>
                    <div className='profileDesc'>
                        <h4 className='profileDescName'>Saw</h4>
                        <span className='profileDescDetails'>An energetic leo born girl...</span>
                    </div>
                </div>
                <div className='profileRightBottom'>
                    <Feed profile/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </div>
  )
}
