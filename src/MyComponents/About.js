import React from 'react'
import logo from './suraj.png';

export const About = () => {
  return (
    <div>
      <div className="container  text-center fw-bold my-5 bg-opacity-25 text-dark  bg-success  ">
        <h3> Hello Guys! This is Suraj Dalvi..❤️</h3>
        <h3> My First React Application</h3>
        <a href="https://surajdalvi.000webhostapp.com/" rel="noreferrer" target={'_blank'}>
          <img src={logo} className="rounded mx-auto d-block" alt="Developer" width="300" height="500" />
        </a>
        <button type="submit" className="btn mx-3 my-3 fw-semibold btn-sm  bg-danger bg-opacity-50 ">click above photo to know more about me !</button>
      </div>
    </div>
  )
}

