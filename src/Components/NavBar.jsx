import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Styles/style.css';
import { faFacebook, faGoogle, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faWifi } from '@fortawesome/free-solid-svg-icons';
//class -> className
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm  navbar-light" style={{height:60}} >
            <ul className="navbar-nav" style={{marginLeft:"150px",backgroundColor:"orange",height:"60px"}} >
                <li className="nav-item">
                    {/* PROPERTY BINDING */}
                    <img alt="logo" src={logo} style={{ height: 80, width: 90,backgroundColor:"orange",marginTop:"-05px" }}></img>
                </li>
                </ul>
                <ul className="navbar-nav" style={{marginLeft:"130px"}} >
                <li className="nav-item"  >
                    <Link className="nav-link" to="" style={{color:"orange"}} >HOME</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom" style={{color:"lightgray"}}>ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="props" style={{color:"lightgray"}}>SERVICES</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="map" style={{color:"lightgray"}}>PROJECTS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="lifecycle" style={{color:"lightgray"}}>OUR BLOG</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="spreadsyntax" style={{color:"lightgray"}}>CONTACTS</Link>
                </li>
                </ul>
                <ul className="navbar-nav" style={{marginLeft:"150px"}}>
                <li className="nav-item">
                    <Link className="nav-link" to="toggle"><FontAwesomeIcon icon={faTwitter} color="lightgray" /></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="toggle"><FontAwesomeIcon icon={faYoutube} color="lightgray" /></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="toggle"><FontAwesomeIcon icon={faWifi} color="lightgray" /></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="toggle"><FontAwesomeIcon icon={faFacebook} color="lightgray" /></Link>
                </li>
                 
                <li className="nav-item">
                <Link className="nav-link" to="toggle"><FontAwesomeIcon icon={faGoogle} color="lightgray" /></Link>
                </li>
                
            </ul>
        </nav>
    )
}

