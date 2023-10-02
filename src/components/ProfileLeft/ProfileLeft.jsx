import React from 'react'
import './ProfileLeft.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
        <LogoSearch />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft