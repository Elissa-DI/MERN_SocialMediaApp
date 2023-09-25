import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImgs">
            <img src={Cover} alt="cover-image" />
            <img src={Profile} alt="rofile-image" />

        </div>
        <div className="ProfileName">
            <span>Jane Doe</span>
            <span>Senior UI/UX Designer</span>
        </div>
        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>6, 890</span>
                    <span>Following</span> 
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>2, 000</span>
                    <span>Followers</span> 
                </div>
            </div>
            <hr />
        </div>
        <span>
            My Profile
        </span>
    </div>
  )
}

export default ProfileCard