import React,{useState} from 'react';
import HeroSection from '../componenets/HeroSection';
import Navbar from '../componenets/Navbar'
import Sitebar from '../componenets/Sitebar'

const Home = () => {
    const [isOpen,setIsOpen]=useState(false);
    
    const toggle = () =>{
        setIsOpen(!isOpen);

    }

    return (
        <>
        <Sitebar isOpen={isOpen} 
        toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HeroSection />        
        </>
    )
}

export default Home
