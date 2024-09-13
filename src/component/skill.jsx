import React from 'react'
import Data from "./Data"
import Card from './Card'


const Skill = () => {
    return (
        <>
            <div className="container-fluid skills" id="skill">
                <h1 className="text-center mt-4 pt-4" >SKILLS</h1>
                <div className="items d-flex flex-wrap justify-content-center mt-5" >
                {Data.map(item => (
            <Card  
                image={item.imageSrc}
                name={item.title} 
                key={item.id} // Ensure each item has a unique key
            />
            ))}
                </div>
            </div>
        </>
    )
}




export default Skill