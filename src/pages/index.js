import React,{useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo ,homeObjThree} from '../components/InfoSection/Data';
import Services from '../components/services';
import Sidebar from '../components/Sidebar'

function Home() {
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
          
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home
