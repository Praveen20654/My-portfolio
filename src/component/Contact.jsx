import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";


const Contact = () => {
  return (
    <>
      <div className="ccontainer-fluid contact" id="contact">
        <h1 className="text-center mt-4">Contact Me</h1>
        <div className="contact-icon">
          <div className="items">
            <FaLinkedin className='icon' />
          </div>
          <div className="items">
            <IoLogoWhatsapp className='icon' />
          </div>
          <div className="items">
            <CgMail className='icon' />
          </div>
          <div className="items">
            <FaGithubSquare className='icon' />
          </div>


        </div>
        <hr/>
      </div>
    </>
  )
}

export default Contact