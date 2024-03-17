import React from 'react';
import "./topbar.css";
import {Search, Person, Chat, Notifications } from "@mui/icons-material";
import {Link} from 'react-router-dom';


export const TopBar = () => {
    
  return (
    <div className="topbarContainer">
        <div className='topbarLeft'>
            <Link to="/" style={{textDecoration:"none", color: "black"}}>
                <span className='logo'>SocialWorld</span>
            </Link>
        </div>

        <div className='topbarCenter'>
            <div className='searchBox'>
                <Search className='searchIcon'/>
                <input type='text' className='searchInput' placeholder='Search here' />
            </div>
        </div>

        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>Home</span>
                <span className='topbarLink'>Timeline</span>
            </div>

            <div className='topbarIcons'>
                <div className='topbarIcon'>
                    <Person />
                    <span className='topbarIconBadge'>1</span>
                </div>
                <div className='topbarIcon'>
                    <Chat />
                    <span className='topbarIconBadge'>2</span>
                </div>
                <div className='topbarIcon'>
                    <Notifications />
                    <span className='topbarIconBadge'>3</span>
                </div>
            </div>

            <Link to="/profile">
                <img className="topbarImage" 
                src='assets/person/mypic.jpg' alt="My Profile" ></img>
            </Link>

        </div>
    </div>
  )
}
