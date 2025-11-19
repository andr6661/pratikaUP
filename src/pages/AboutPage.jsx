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
                        <div><Advantages image={"/assets/icon/diplom.svg"} title={"Гарантированный результат"}/></div>
                        <div><Advantages image={"/assets/icon/setting.svg"} title={"Практика вместо теории"}/></div>
                        <div><Advantages image={"/assets/icon/calendar.svg"} title={"Гибкий график"}/></div>
                        <div><Advantages image={"/assets/icon/shield.svg"} title={"Без рисков"}/></div>

                    </div>
                </div>
                <div className="studying">
                    <div className="titleStudying">Сейчас изучают</div>
                    <div className="carts">
                        <div className="firstStrokeCart">
                            <Cart
                                title={"Осенние рукоделки"}
                                description={"Волшебная осень в рисунках и  поделках: 10 уютных идей в  одном курсе."}
                                image="assets/img/cartOne.png"

                            >
                                <Button>
                                </Button>
                            </Cart>
                            <Cart
                                title={"Живая книга о динозаврах"}
                                description={"Создайте поп-ап книгу о динозаврах за десять захватывающих уроков. \n" +
                                    "Бесплатно с PLUS\n" +
                                    "3990 руб.."}
                                image="assets/img/cartTwo.png"

                            >
                                <Button>
                                </Button>
                            </Cart>
                            <Cart
                                title={"Творческие задания для детей"}
                                description={"170+ заданий и 2 игры для развития воображения — идеально для любых детских пространств."}
                                image="assets/img/cartThree.png"

                            >
                                <Button>
                                </Button>
                            </Cart>
                            <Cart
                                title={"Осенние рукоделки"}
                                description={"Волшебная осень в рисунках и  поделках: 10 уютных идей в  одном курсе."}
                                image="assets/img/cartFour.png"

                            >
                                <Button>
                                </Button>
                            </Cart>
                        </div>
                        <div className="firstStrokeCart">
                            <Cart
                                title={"Осенние рукоделки"}
                                description={"Волшебная осень в рисунках и  поделках: 10 уютных идей в  одном курсе."}
                                image="assets/img/cartOne.png"

                            >
                                <Button>
                                </Button>
                            </Cart>
                            <Cart
                                title={"Живая книга о динозаврах"}
                                description={"Создайте поп-ап книгу о динозаврах за десять захватывающих уроков. \n" +
                                    "Бесплатно с PLUS\n" +
                                    "3990 руб.."}
                                image="assets/img/cartTwo.png"

                            >
                                <Button>
                                </Button>
                            </Cart>
                            <Cart
                                title={"Творческие задания для детей"}
                                description={"170+ заданий и 2 игры для развития воображения — идеально для любых детских пространств."}
                                image="assets/img/cartThree.png"

                            >
                                <Button>
                                </Button>
                            </Cart>
                            <Cart
                                title={"Осенние рукоделки"}
                                description={"Волшебная осень в рисунках и  поделках: 10 уютных идей в  одном курсе."}
                                image="assets/img/cartFour.png"

                            >
                                <Button>
                                </Button>
                            </Cart>
                        </div>
                    </div>
                    <div className="watchButton"><Button>Смотреть больше курсов</Button></div>
                </div>
                <div className="reviews">

                </div>
            </main>

        </div>

    );
};

export default AboutPage;