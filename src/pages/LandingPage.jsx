import React from 'react'
import { Footer, Header, LoginPage } from './allpages'

const LandingPage = () => {

  return (
    <>
      <Header></Header>
      <div style={{ justifySelf: "center" }}>
        <LoginPage></LoginPage>
      </div>
      <Footer></Footer>
    </>
  )
}

export default LandingPage
