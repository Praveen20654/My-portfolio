import React from 'react'
import hero from "../img/hero (1).avif"

const About = () => {
  return (
    <>

      <div className="container-fluid about mt-5 " id='about'>

        <div className="left">
          <div className="img">
            <img src={hero} alt="hero" />
          </div>
        </div>

        <div className="right">
          <h1>About Me</h1>
          <p className='text-start w-100'>
            "Hey, My name is Praveen Kumar Srivastava.I believe practice makes perfect. A M.tech holder in Mechanical Engineering. I got to know about
            Ducat It training School and its Web Development program from a friend. I believed this to be a career that I would excel in and registered for this course.
            Now, I am working on various projects and have improved my skills in MERN Stack, HTML, CSS, JavaScript, Node.js, MongoDB, Mongoose, etc
            .I'm a passionate coder and an enthusiastic Web Developer capable of
            applying programming skills to solve complex problems. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities,
            skills and knowledge in an organization"</p>
        </div>
      </div>
    </>
  )
}

export default About