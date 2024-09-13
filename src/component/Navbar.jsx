import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
              <div className="container-fluid nav_bar fixed-top">
                <div className="left nav_item">Praveen</div>
                <div className="right">
                    <a href="#home" className="nav_item">Home</a>
                    <a href="#about" className="nav_item">About</a>
                    <a href="#skill" className="nav_item">Skill</a>
                    <a href="#project" className="nav_item">Project</a>
                    <a href="#contact" className="nav_item">Contact me</a>
                </div>
            </div>

        </>
    )
}

export default Navbar