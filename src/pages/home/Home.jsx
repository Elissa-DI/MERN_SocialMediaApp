import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <div className="postSide">Post</div>
        <div className="rightSide">RightSide</div>
    </div>
  )
}

export default Home