import React from 'react'
import './styles/PrivacyPage.css'
import { Footer, Header } from './allpages'

const PrivacyPage = () => {

  return (
    <>
      <Header></Header>
      <div className='privacy-container'>
        <div className='privacy-content'>
          <h1>Purpose</h1>
          <hr className='privacy-break' />
          <div className="privacy-person">
            <h3>Project for <span>Bachelor of Science in Information Technology with specialization in Mobile and Web Applications {'('}BSIT-MWA{')'}</span></h3>
            <h3>in the Subject: <span>Systems Integration and Architecture {'('}CTSYSINL{')'}</span></h3>
            <h3>by the group <span>Matts & Cheese</span> from <span>INF222</span> that consists of 4 members:</h3>
            <ul>
              <li>Ralph Andrei Christian Caceres</li>
              <li>Allysandrei G. Aparicio</li>
              <li>Vyan Elisha A. Sabio</li>
              <li>Cesar Matthew L. Moran</li>
            </ul>
            <h3>Presented to <span>Ms. Cristine Erica E. Untalan</span> on <span>October 30, 2024</span> at <span>National University - MOA</span></h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default PrivacyPage
