import React, {useState} from 'react'
import Expertise from '../components/Expertise'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Navbar/Sidebar'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const Home = () => {
    const [isOpen, setIsOpen]  = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <Skills/>
        <Expertise/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        </>
    );
};

export default Home
