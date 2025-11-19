import React from 'react';
import Header from '../components/Header/Header.jsx';
import Button from "../components/Button/Button.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Cart from "../components/Cart/Cart.jsx";
import Advantages from "../components/advantages/Advantages.jsx";


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
                    <div className="image"><img src="/assets/img/bannerimg.png" alt=""/></div>
                </div>
                <div className="advantages">
                    <div className="whyMeTitle">Почему выбирают нас ?</div>
                    <div className="stroke">
                        <div><Advantages image={"/assets/icon/diplom.svg"} title = {"Гарантированный результат"}/></div>
                        <div><Advantages image={"/assets/icon/setting.svg"} title = {"Практика вместо теории"}/></div>
                        <div><Advantages image={"/assets/icon/calendar.svg"} title = {"Гибкий график"}/></div>
                        <div><Advantages image={"/assets/icon/shield.svg"} title = {"Без рисков"}/></div>

                    </div>
                </div>
            </main>
            <Cart
                title={"Осенние рукоделки"}
                description={"Волшебная осень в рисунках и  поделках: 10 уютных идей в  одном курсе."}
                image="assets/img/cartOne.png"
                popularAlert={true}
                newAlert={true}
            >
                <Button>wwwwww</Button>
            </Cart>

        </div>

    );
};

export default AboutPage;