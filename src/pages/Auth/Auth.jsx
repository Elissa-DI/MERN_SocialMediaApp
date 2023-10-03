import React from 'react'
import './Auth.css'

import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>MediaUp</h1>
                <h6>Explore the ideas throught the world</h6>
                {/* <h6>Embark on a journey of discovery and exploration, as you delve into the captivating ideas that traverse the globe</h6> */}
            </div>
        </div>         
    </div>
  )
}

export default Auth