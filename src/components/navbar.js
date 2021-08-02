import React from'react'
function Navbar() {
    return(
        <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
            <li className="sidebar-brand"><a href="#page-top">Creamzo</a></li>
            <li className="sidebar-nav-item"><a href="#page-top">Home</a></li>
            <li className="sidebar-nav-item"><a href="#about">About</a></li>
            <li className="sidebar-nav-item"><a href="#services">Services</a></li>
            <li className="sidebar-nav-item"><a href="#Team">Team</a></li>
            <li className="sidebar-nav-item"><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    )
}
export default Navbar