import React from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <hr />
        <div className='footer_container'>
            <div className='footer_content'>
                <div className='footer_left'>
                    <span>2024 - Index for Spotify</span>
                    <Link className='link' to={'/imprint'}>Imprint</Link>
                </div>
                <div className='footer_right'>
                    <span>We are not related to Spotify AB or any of it's partners in anyway</span>
                    <Link className='link' to={'/purpose'}>Purpose</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
