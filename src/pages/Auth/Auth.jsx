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

        <Signup />
    </div>
  )
}

function Signup() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">

                <h3>Sign up</h3>
                <div>
                    <input 
                       type="text" 
                       placeholder='First Name' 
                       className='infoInput' 
                       name='firstname'
                    />

                    <input 
                       type="text" 
                       placeholder='Last Name' 
                       className='infoInput' 
                       name='lastname'
                    />
                </div>

                <div>
                    <input 
                       type="text" 
                       placeholder='Usernames' 
                       className='infoInput' 
                       name='username'
                    />
                </div>

                <div>
                    <input 
                       type="password"  
                       placeholder='Password'  
                       className='infoInput' 
                       name='password'
                    />
                    <input 
                       type="password"  
                       placeholder='Confirm Password'  
                       className='infoInput' 
                       name='confirmpass'
                    />
                </div>
                <div>
                    <span>Already have an account. Login!</span>
                </div>
                <div>
                    <button className="button infoButton" type='submit'>Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Auth