import React from 'react'
import { Link } from 'react-router-dom'
import confLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'
import './styles/Home.css'

const Home = () => {
  return (
    <React.Fragment>
      <div className="homeBackground">
        <div className="container">
          <div className="row main-content">
            <div className="col-lg-4 description">
              <div className="container-description">
                <img src={confLogo} alt="Conference logo" />
                <h1>PRINT YOUR BADGES</h1>
                <p>The easiest way to manage your conference</p>
                <Link to="/badges" className="btn btn-primary">
                  Start now
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-right">
              <img src={astronauts} alt="Astronauts" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
