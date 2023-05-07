import React from 'react'
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar2';
import Nav from './Herocontainer'
import Hero from './Herocontainer'
import Mainbody from './Herocontainer'
import Section2 from '../Text';
import MainSectionThree from './Makeapp';
import VideoSection from './Videosection';
import DoctorsSection from './Text2';
import DoctorCard from './Doctorcards';
import ViewAllDoctorsButton from './Button';
import BetterPeople from './Betterpeople';
import "./style.css"
import HealthNews from './Heathnews';
import ViewAllPostsButton from './Button2';
import Footer from './Footer';
import Reviews from './Reviews';
import Footer2 from './Footer2';
function Home() {

    const reviews = [
        {
            author: 'John Smith',
            rating: 4,
            comment: 'Neque cupiditate assumenda in maiores repudi mollitia architecto.',
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
        },
        {
            author: 'Lisa Cudrow',
            rating: 5,
            comment: 'Absolutely amazing experience. Highly recommend!',
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
        },
        {
            author: 'Maria Smantha',
            rating: 3,
            comment: 'Decent service, nothing to write home about.',
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
        }
    ];

    return (
        <>    <Navbar2 />
              <Hero />
              <Mainbody />
              <Section2 />
              <MainSectionThree />
              <VideoSection />
              <DoctorsSection />
              <DoctorCard />
              <DoctorCard />
              <ViewAllDoctorsButton />
              <BetterPeople />
              <HealthNews />
              <ViewAllPostsButton />
              <Footer />
              <Reviews />
              <Footer2 />
              
         
         
</>
    );
                        }
export default Home ;