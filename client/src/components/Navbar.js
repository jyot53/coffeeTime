import React from 'react'
import {NavLink} from 'react-router-dom';
// import logo from '../images/xyz.png';
const Navbar = () => {
    return (
        <>
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              
              </ul>
            </div>
          </nav> */}
          {/* <!-- navbar starts --> */}
        <nav className="navbar navbar-expand-lg fixed-top nav-menu">
            <NavLink to="/" style={{marginLeft: '20px'}}><i className="fas fa-mug-hot fa-3x"></i></NavLink>
            <button className="navbar-toggler nav-button" type="button" data-toggle="collapse" data-target="#navbar">
                <div className="bg-light bar1"></div>
                <div className="bg-light bar2"></div>
                <div className="bg-light bar3"></div>
            </button>
            <div className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold" id="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link m-2 menu">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link m-2 menu">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link m-2 menu" to="/register">Signup</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link m-2 menu" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link m-2 menu">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/logout" className="nav-link m-2 menu">Logout</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        {/* <!-- navbar ends --> */}
        </>
    )
}

export default Navbar
