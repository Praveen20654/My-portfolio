import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf"
import heros from "../img/hero (1).avif"
import Typed from "typed.js"

const Home = () => {

  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [

        "My Name is Praveen Kumar Srivastava",


      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (

    <>
      <div className="container-fluid home" id='home'>
        <div className="left m-5">
          <h1 ref={typedRef}></h1>
          <h1> A MERN Stack Web Developer</h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-warning mt-4 p-3" > Download Resume </a>
        </div>
        <div className="right me-5 mt-5">
          <div className="img me-5">
            <img src={heros} alt="hero" />
          </div>
        </div>
      </div>
    </>

  )
}

export default Home