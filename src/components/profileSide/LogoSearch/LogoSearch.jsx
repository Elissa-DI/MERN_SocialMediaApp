import React from 'react'
import './LogoSearch.css'
import Logo from '../../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} alt="Logo" />
        <div className="Search">
            <input type="text" placeholder='#Explore' />
            <div className="searchIcon">
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch