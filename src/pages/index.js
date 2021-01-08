import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import SocialFollow from "../components/SocialFollow";
import AppContact from '../components/contact';
import Services from '../components/Services';


const Home = () => {
const [isOpen, setisOpen] = useState(false)

const toggle = () => {
    setisOpen (!isOpen)
}


    return (
        <>
        <NavBar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <InfoSection {...homeObjThree} />
        <Footer></Footer>
        </>
    )
}

export default Home
