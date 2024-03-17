import React from 'react';
import './share.css';
import {PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";


export const Share = () => {

  return (
    <div className='share'> 
        <div className='shareWrapper'>
            <div className='shareTop'>

                <img className='shareProfile' 
                src='assets/person/mypic.jpg'
                alt="My Profile"></img>

                <input type='text' placeholder='What is in your mind???' className='shareInput'/>      
            </div>

            <hr className='shareHr'/>
            <form className='shareBottom' >
                <div className='shareOptions'>

                    <label htmlFor='file' className='shareOption'>
                        <PermMedia htmlColor='tomato' className='shareOptionIcon' />
                        <span className="shareOptionText">Video / Photo</span>
                        <input type='file' id='file' name='userFile'/>
                    </label>

                    <label htmlFor='tag' className='shareOption'>
                        <Label htmlColor='mediumvioletred' className='shareOptionIcon' />
                        <span className="shareOptionText">Tag</span>
                        <input type='text' id='tag' name='userTag'/>
                    </label>

                    <label htmlFor='location' className='shareOption'>
                        <Room htmlColor='midnightblue' className='shareOptionIcon' />
                        <span className="shareOptionText">Location</span>
                        <input type='text' id='location' name='userLocation' />
                    </label>

                    <label htmlFor='' className='shareOption'>
                        <EmojiEmotions htmlColor='orange' className='shareOptionIcon' />
                        <span className="shareOptionText">Feelings</span>
                        <input type='text' id='feeling' name='userFeeling'/>
                    </label>
                </div>
                <button type='submit' className='shareBtn'>Share</button>
            </form>
        </div>
    </div>
  )
}
