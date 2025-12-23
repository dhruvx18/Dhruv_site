import React, { useState } from "react";
import './navbar.css'
import logo from "../../assets/fulllogo3.png";
import contactImg from "../../assets/contact.png";
import menuIcon from "../../assets/menu.png"; // Make sure to import a burger icon
import { Link } from 'react-scroll';

const Navbar = () => {
    // 1. State to handle mobile menu visibility
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>

            {/* DESKTOP MENU (Hidden on mobile via CSS) */}
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Experience</Link>
            </div>

            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contactPage').scrollIntoView({behavior:"smooth", block: "start"});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me 
            </button>

            {/* 2. BURGER ICON (Visible only on mobile via CSS) */}
            <img 
                src={menuIcon} 
                alt="Menu" 
                className="mobMenuIcon" 
                onClick={() => setShowMenu(!showMenu)} 
            />

            {/* 3. MOBILE MENU LINKS (Visible only when showMenu is true) */}
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Experience</Link>
                <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;