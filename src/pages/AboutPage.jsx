import React from 'react';
import Header from '../components/Header/Header.jsx';
import Button from "../components/Button/Button.jsx";
import Footer from "../components/Footer/Footer.jsx";

const AboutPage = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <div className="welcome">
                    <div className="leftBlock">
                        <div className="title">Учим детей рисовать <br/> свое будущее!</div>
                        <div className="subtitle">Искра — международная онлайн-школа <br/> рисования и развития
                            креативного <br/> мышления для детей от 4 лет
                        </div>
                        <Button>Выбрать курс</Button>
                    </div>
                    <div className="image"><img src="/img/bannerimg.png" alt=""/></div>
                </div>
                <div className="advantages">
                    <div className="whyMeTitle">Почему выбирают нас ?</div>

                </div>
            </main>
            <Footer></Footer>
        </div>

    );
};

export default AboutPage;