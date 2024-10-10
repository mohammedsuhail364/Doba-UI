import React from 'react'
import '../Css_files/Loginpage.css'
import { Link } from 'react-router-dom';
export const Loginpage = () => {
  return (
    <div >

    <div className='main'>
        <div className="maincontent">
            <h3>LOGIN</h3>
            <input type="email" placeholder='ENTER YOUR EMAIL' required/>
            <input type="password" placeholder='ENTER YOUR PASSWORD' required/>
            <button>LOGIN</button>
            <p>Don't have an account?</p>
            <div className="register">
            <Link to='/signup'> <button>REGISTER NOW</button> </Link>
            </div>
           
        </div>
    </div>
    </div>
  )
}
export default Loginpage;