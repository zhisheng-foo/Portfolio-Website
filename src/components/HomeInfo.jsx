import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../../assets/icons';


const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center " >{text}</p>
        <Link to={link} className = "neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>

)

const renderContent = {
    1 : (
        <h1 className="info-box2 sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Zhi Sheng</span> 🥬
            <br/>
            Currently a student studying in NUS Information System 🎓
            <br/>
            <span className="font-semibold">Drag & Hold / Slide to start flying!</span>       
            
        </h1>
    ),
    2 : (
        <InfoBox
            text="Pretty much a peasant but i am still currently developing my own skills along the way"
            link="/about"
            btnText="Learn More About Me"
        
        />
    ),
    3 : (
        <InfoBox
            text="Projects? Yes Yes i know the projects"
            link="/project"
            btnText="Visit my porfolio"
        />
    ),
    4 : (
        <InfoBox
        text="Do you want labour? :o I am just a few keystrokes away hehe"
        link="/contact"
        btnText="Let's talk"
        />
    ),


}



const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;  
}

export default HomeInfo