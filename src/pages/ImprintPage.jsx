import React from 'react'
import './styles/ImprintPage.css'
import { Footer, Header } from './allpages'

const ImprintPage = () => {

  return (
    <>
      <Header></Header>
      <div className='imprint-container'>
        <div className='imprint-content'>
          <h1>Imprint</h1>
          <hr className='imprint-break' />
          <div className="imprint-person">
            <h3>Ralph Andrei Christian Caceres</h3>
            <h3>Philippines</h3>
            <h3>Email: <a href=''>caceresr@students.nu-moa.edu.ph</a></h3>
          </div>
          <div className="imprint-person">
            <h3>Allysandrei G. Aparicio</h3>
            <h3>Philippines</h3>
            <h3>Email: <a href=''>aparicioag@students.nu-moa.edu.ph</a></h3>
          </div>
          <div className="imprint-person">
            <h3>Vyan Elisha A. Sabio</h3>
            <h3>Philippines</h3>
            <h3>Email: <a href=''>sabiova@students.nu-moa.edu.ph</a></h3>
          </div>
          <div className="imprint-person">
            <h3>Cesar Matthew L. Moran</h3>
            <h3>Philippines</h3>
            <h3>Email: <a href=''>morancl@students.nu-moa.edu.ph</a></h3>
          </div>
          <h3>Feel free to contact us via the e-mail adress provided above</h3>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ImprintPage
