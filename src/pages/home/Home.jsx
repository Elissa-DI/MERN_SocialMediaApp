import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'

const Home = () => {
  return (
    <div className="Home">
        <div>

        <ProfileSide />
        </div>
        <div>

        <PostSide />
        </div>
        <div>

        <RightSide />
        </div>
    </div>
  )
}

export default Home