import React from 'react';
import "./leftbar.css";
import {RssFeed, Chat, HelpOutline, WorkOutline, Bookmark, Group, PlayCircleFilled, Event, School } from "@mui/icons-material";
import {Users} from '../../myData';
import { CloseFriend } from '../closeFriend/CloseFriend';

export const Leftbar = () => {
  return (
    <div className='leftBar'>
        <div className='leftbarWrapper'>
          <ul className='leftbarList'>
            <li className='leftbarListItem'>
              <RssFeed className='leftbarIcon'/>
              <span className="leftbarListItemText">Feed</span>
            </li>

            <li className='leftbarListItem'>
              <Chat className='leftbarIcon'/>
              <span className="leftbarListItemText">Chats</span>
            </li>

            <li className='leftbarListItem'>
              <PlayCircleFilled className='leftbarIcon'/>
              <span className="leftbarListItemText">Videos</span>
            </li>

            <li className='leftbarListItem'>
              <Group className='leftbarIcon'/>
              <span className="leftbarListItemText">Groups</span>
            </li>

            <li className='leftbarListItem'>
              <Bookmark className='leftbarIcon'/>
              <span className="leftbarListItemText">Bookmarks</span>
            </li>

            <li className='leftbarListItem'>
              <HelpOutline className='leftbarIcon'/>
              <span className="leftbarListItemText">Questions</span>
            </li>

            <li className='leftbarListItem'>
              <WorkOutline className='leftbarIcon'/>
              <span className="leftbarListItemText">Jobs</span>
            </li>

            <li className='leftbarListItem'>
              <Event className='leftbarIcon'/>
              <span className="leftbarListItemText">Events</span>
            </li>

            <li className='leftbarListItem'>
              <School className='leftbarIcon'/>
              <span className="leftbarListItemText">Courses</span>
            </li>
          </ul>

          <button className='leftbarBtn'>Show more</button>
          <hr className='leftbarHr'/>

          <ul className='leftbarFriendList'>
            {Users.map(user => (
              <CloseFriend key={user.id} user={user}/>
            ))}
          </ul>
        </div>
    </div>
  )
}
