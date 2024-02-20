import React from 'react'
import './Navbarstyle.css' 
import { TfiPalette } from "react-icons/tfi";


const Navbarr = () => {
  return (
    <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h1 id='logoTime'>LOGO</h1>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="in">
              <a href="#" className="loginBtn">
              {/* <TfiPalette /> */}
              <div className="toogleBall"></div>
              </a>
            </div>
          </nav>
        </div>
      </header> 
  )
}


export default Navbarr

