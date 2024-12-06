import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const NewsLogo = {
    1: require("../Assets/news-logo-2.png")
  }
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg text-white">
  <div className="container-fluid">
    <div className="image"></div>
    <Link className="navbar-brand text-white" to="/">News Hunt</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/newshunt/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/general">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white hideOnLap" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white hideOnLap" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white hideOnLap" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white hideOnLap" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white hideOnLap" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white hideOnLap" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white hideOnLap" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </li>
                
      </ul>
    </div>
  </div>
</nav>
<aside>
        <ul className="sidebar-container list-group list-group-flush" type="none">
         <h3>Categories</h3>
          <li className="sidebar-item">
            <Link className="nav-link active" to="/business">Business</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/general">General</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/health">Health</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/science">Science</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/sports">Sports</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Navbar