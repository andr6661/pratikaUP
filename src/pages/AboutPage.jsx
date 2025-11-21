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

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header/>
            <main className="about-main">
                <Hero />

                {/* Блок "Почему выбирают нас" */}
                <section className="advantages">
                    <h2 className="whyMeTitle">Почему выбирают нас?</h2>
                    <div className="stroke">
                        <Advantages image={diplomSvg} title="Гарантированный результат" />
                        <Advantages image={settingSvg} title="Практика вместо теории" />
                        <Advantages image={calendarSvg} title="Гибкий график" />
                        <Advantages image={shieldSvg} title="Без рисков" />
                    </div>
                </section>

                {/* Блок "Сейчас изучают" */}
                <section className="studying">
                    <h2 className="titleStudying">Сейчас изучают</h2>
                    <div className="carts">
                        <div className="firstStrokeCart">
                            <Cart
                                title="Осенние рукоделки"
                                description="Волшебная осень в рисунках и поделках: 10 уютных идей в одном курсе."
                                image="assets/img/cartOne.png"
                            >
                                <Button>Подробнее</Button>
                            </Cart>
                            <Cart
                                title="Живая книга о динозаврах"
                                description="Создайте поп‑ап книгу о динозаврах за десять захватывающих уроков. Бесплатно с PLUS. 3990 руб."
                                image="assets/img/cartTwo.png"
                            >
                                <Button>Подробнее</Button>
                            </Cart>
                            <Cart
                                title="Творческие задания для детей"
                                description="170+ заданий и 2 игры для развития воображения — идеально для любых детских пространств."
                                image="assets/img/cartThree.png"
                            >
                                <Button>Подробнее</Button>
                            </Cart>
                            <Cart
                                title="Осенние рукоделки"
                                description="Волшебная осень в рисунках и поделках: 10 уютных идей в одном курсе."
                                image="assets/img/cartFour.png"
                            >
                                <Button>Подробнее</Button>
                            </Cart>
                        </div>
                        <div className="secondStrokeCart">
                            <Cart
                                title="Книжные истории"
                                description="На уроках вы создадите собственные работы по мотивам любимых сюжетов, освоив необычные техники."
                                image="assets/img/Cart4.png"
                            >
                                <Button>Подробнее</Button>
                            </Cart>
                            <Cart
                                title="Цвет в искусстве"
                                description="От Харинга до Бэнкси: знакомим детей с искусством и создаём яркие работы в скетчбуке."
                                image="assets/img/Cart5.png"
                            >
                                <Button>Подробнее</Button>
                            </Cart>
                            <Cart
                                title="Творческие задания для детей"
                                description="Миры из фантазии: создаём свои вселенные с помощью акварели, маркеров и коллажей."
                                image="assets/img/Cart6.png"
                            >
                                <Button>Подробнее</Button>
                            </Cart>
                            <Cart
                                title="Как стать дизайнером интерьера"
                                description="- Узнаем про дизайн интерьера — это ремесло или искусство? - Рассмотрим все детали: от создания светильника из пластилина до п..."
                                image="assets/img/Cart7.png"
                            >
                                <Button>Подробнее</Button>
                            </Cart>
                        </div>
                    </div>
                    <NavLink to="/Course" className="watchButton">
                        <Button>Смотреть больше курсов</Button>
                    </NavLink>
                </section>

                {/* Блок "Отзывы" */}
                <section className="reviews">
                    <h2 className="whyMeTitle">Отзывы</h2>
                    <div className="container">
                        <Slider />
                    </div>
                </section>

                {/* Кнопка "Начни творить" */}
                <NavLink to="/Course" className="start-button-wrapper">
                    <Button>Начни Творить</Button>
                </NavLink>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
