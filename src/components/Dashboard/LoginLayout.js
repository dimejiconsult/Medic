import React from 'react'
import {Link} from 'react-router-dom'
import LoginFooter from './LoginFooter'
import './styles.css'

export default function LoginLayout({children}) {
  return (
    <>
			<div className='layout'>
        <div className='layout_header'>
          <img src='' />
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
        {children}
        <LoginFooter />
			</div>
    </>
  )
}
