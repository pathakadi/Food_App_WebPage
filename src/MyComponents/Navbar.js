import React from 'react';
import logo from './Image/Logo.png';

const Navbar = () => {
    let myNav = {
        margin : "0px 50px" ,
        fontWeight : "bold"
    }
    let myNavbar = {
        margin : "0px 500px" ,
    }
    let myStyle = {
        height : "80px" ,
        width : "180px" ,
        marginLeft : "70px"
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" className="logo-image" style={myStyle}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={myNavbar}>
                        <li className="nav-item">
                            <a className="nav-link" style={myNav} href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={myNav} href="/product">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={myNav} href="/faq">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={myNav} href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
