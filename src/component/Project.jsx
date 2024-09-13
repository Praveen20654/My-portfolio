import React from 'react'
import css from "../assect/skill/css.png"
import react from "../assect/skill/react.png"


const Project = () => {
  return (
    <>
      <div className=" container-fluid projects " id="project">
           <div className="headingprojects">
            <h1>My Projects</h1>
            <div className="projects1">
                <div className="box1">
                    <div className="headingportfolio">
                        <h4>Portfolio</h4>
                    </div>
                    <img src={css} alt=""  className="portfolioimg"/>
                </div>
                <div className="box1">
                    <div className="headingspotify">
                        <h4>Spotify clone</h4>
                    </div>
                    <img src={react} alt="" className="spotifyimg"/>
                </div>
                <div className="box1">
                    <div className="headingecommerce">
                        <h4>E-Commerce Website</h4>
                    </div>
                    <img src={react} alt="" className="ecommerceimg"/>
                </div>
            </div>
           </div>
        </div>

    </>
  )
}

export default Project