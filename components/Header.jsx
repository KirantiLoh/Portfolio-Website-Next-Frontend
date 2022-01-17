import React, { useRef, useState } from 'react'
import logo from '../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBook, faTasks, faConciergeBell, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    const navlinkRef = useRef()

    const [headerClass, setheaderClass] = useState("navbar")
    const [navlinkOpened, setnavlinkOpened] = useState(false)

    if (typeof window !== 'undefined') {
        window.onscroll = () => {
        if (window.scrollY >= 600) {
            setheaderClass('navbar-sticky')
        } else {
            setheaderClass('navbar')
        }
    }
    }
    

    let handleBurgerClick = () => {
        if (!navlinkOpened) {
            navlinkRef.current.style.right = '0'
            setnavlinkOpened(true)
        }
        else {
            navlinkRef.current.style.right = '-150%';
            setnavlinkOpened(false)
        }
    }

    return (
        <header className={headerClass}>
            <h1 className="logo">
                    <Link href='/#home' onClick={() => handleBurgerClick()}>
                    <a>
                    <Image src={logo} alt="Maurice Yang" width={75} height={75} />
                        Maurice <span>Yang</span> 
                    </a>
                    </Link>
                    
                </h1>
            <ul className="navlinks" ref={navlinkRef}>
                <h1 className="logo">
                    <Link href='/#home'>
                    <a onClick={() => handleBurgerClick()}>
                    <Image src={logo} alt="Maurice Yang" width={75} height={75} />
                        Maurice <span>Yang</span> 
                    </a>
                    </Link>
                    
                </h1>
                <li>
                    <Link href="/#about">
                        <a onClick={() => handleBurgerClick()}><FontAwesomeIcon icon={faUser}/> About Me</a>
                    </Link>
                    
                </li>
                <li>
                    <Link href="/#services">
                        <a onClick={() => handleBurgerClick()}><FontAwesomeIcon icon={faConciergeBell} /> Services</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#projects">
                        <a onClick={() => handleBurgerClick()}><FontAwesomeIcon icon={faTasks}/> Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/blogs'}>
                        <a onClick={() => handleBurgerClick()}><FontAwesomeIcon icon={faBook} /> Blogs</a>
                    </Link>
                </li>
                <Link href="/#contact-me">
                    <a onClick={() => handleBurgerClick()}  id="contact-header-btn"><FontAwesomeIcon icon={faEnvelope}/> Contact Me</a>
                </Link>
                    
                <li className="burger" onClick={() => handleBurgerClick()}>
                    <h1 className="close-nav">
                        <FontAwesomeIcon icon={faTimes}/>
                    </h1>
                </li>
                
            </ul>
            <div className="burger" onClick={() => handleBurgerClick()}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    )
}

export default Header
