import React from 'react';
import Header from '../components/Header/Header.jsx';
import Button from '../components/Button/Button.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Cart from '../components/Cart/Cart.jsx';
import Advantages from '../components/advantages/Advantages.jsx';
import Slider from '../components/Slider/Slider.jsx';
import {NavLink} from 'react-router-dom';
import Hero from '../components/Hero/Hero.jsx';

import diplomSvg from './../icon/diplom.svg';
import settingSvg from './../icon/setting.svg';
import calendarSvg from './../icon/calendar.svg';
import shieldSvg from './../icon/shield.svg';
import Styding from "../components/Styding/Styding.jsx";
import AdvantagesBlock from "../components/AdvantagesBlock/AdvantagesBlock.jsx";

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header/>
            <main className="about-main">
                <Hero />
                <AdvantagesBlock></AdvantagesBlock>
                <Styding></Styding>
                <section className="reviews">
                    <h2 className="whyMeTitle">Отзывы</h2>
                    <div className="container">
                        <Slider />
                    </div>
                </section>
                <NavLink to="/Course" className="start-button-wrapper">
                    <Button>Начни Творить</Button>
                </NavLink>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
