import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";

import "./navbar.scss";


const Navbar = () => {
    const {user, logOut} = useContext(LoginContext);

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const handleLogOut = () => logOut()
    
    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-brand'><img src="../../assets/img/logo.png"/></Link>
            <button className='navbar-toggle' onClick={toggleClass}><span className='navbar-toggle-icon'></span></button>
            <div className={ isActive ? 'navbar-collapse show': 'navbar-collapse'} >
                <ul className='navbar-first'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <ul className='navbar-last ml-auto'>
                    { user !== null ? (
                            <>
                                <li>{user.username}</li>
                                <li><button className='btn btn-default' onClick={handleLogOut}>Logout</button></li>
                            </>
                        ) : (
                            <>
                                {/* <li><Link to="/sign-up" className='btn btn-default'>Sign Up</Link></li> */}
                                <li><Link to="/login" className='btn btn-blue'>Login</Link> </li>
                            </>
                        )
                    }
                    {/* <li><Link to="/sign-up" className='btn btn-default'>Sign Up</Link></li><li><Link to="/login" className='btn btn-blue'>Login</Link> </li> */}
                    <li>
                        <a className='language'>
                            <span> TR</span>
                            <img src="../../assets/img/language.png" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
