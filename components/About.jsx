import React from 'react'
import AboutImage from '../public/about-img.png'
import Django from '../public/skills/django.png'
import ReactLogo from '../public/skills/react.png'
import HTMLLogo from '../public/skills/html.png'
import CSSLogo from '../public/skills/css.png'
import JSLogo from '../public/skills/js-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faServer } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

const About = () => {
    return (
        <div id="about">
            <h1 className="title">About Me</h1>
            <div className="about-container">
                <Image src={AboutImage} alt="Maurice Yang" priority />
                <div className="descs">
                    <p className="desc">Hi I&apos;m Maurice Yang, and I love creating websites using React JS and Django. Creating websites is one of those things where it seems boring to do but enjoyable once the experience accumulated. I was introduced to programming at 2017, and I love it ever since. Being able to create programs is a satisfying experience and we can see how the program made impact, both to ourself or other people.</p>
                    <p className="desc">I&apos;ve learnt Django since last year and recently just started learning about React JS. I&apos;ve created a lot of small projects in order to improve my skills, both in Django and React JS. I&apos;m currently planning to learn Next JS due to server side rendering and SEO friendly</p>
                </div>
                
            </div>
            <h1 className="title">My Skills</h1>
            <div className="skill-container">
                <ul className="skills">
                <li className="skill">
                    <Image src={Django} alt="Django Logo" width={300} height={130}/>
                    <p className="desc">Django</p>
                </li>
                <li className="skill">
                    <Image src={ReactLogo} alt="React JS Logo" width={150} height={135}/>
                    <p className="desc">React JS</p>
                </li>
                <li className="skill">
                    <Image src={HTMLLogo} alt="HTML Logo"  width={150} height={130} />
                    <p className="desc">HTML</p>
                </li>
                <li className="skill">
                    <Image src={CSSLogo} alt="CSS Logo" width={110} height={125} />
                    <p className="desc">CSS</p>
                </li>
                <li className="skill">
                    <Image src={JSLogo} alt="JS logo"  width={150} height={150}/>
                    <p className="desc">Javascript</p>
                </li>
            </ul>
            </div>
            <div id="services">
                <h1 className="title">Services</h1>
            <ul className="services">
                <li className="service">
                    <h1 className='service-logo'><FontAwesomeIcon icon={faLayerGroup}/></h1>
                    <h1 className="service-title">Fullstack Web Development</h1>
                </li>
                <li className="service">
                    <h1 className="service-logo"><FontAwesomeIcon icon={faReact}/></h1>
                    <h1 className="service-title">Front End Devlopment</h1>
                </li>
                <li className="service">
                    <h1 className="service-logo"><FontAwesomeIcon icon={faServer}/></h1>
                    <h1 className="service-title">Back End Development</h1>
                </li>
            </ul>
            </div>
            
        </div>
    )
}

export default About
