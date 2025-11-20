import React from 'react';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import logoSvg from "../icon/logo.svg";

const AboutUs = () => {
    return (
        <div>
            <Header image={logoSvg}/>
            <div className="history">
                <div className="block">
                    <div className="title">История</div>
                    <div className="upBlock">
                        <div className="deck">
                            <div className="text">
                                В 2006-м году, художник и иллюстратор, <br/>
                                Саша Крючкова (@sashakru), открыла <br/>
                                экспериментальный творческий класс для <br/>
                                детей от 2-х лет в Пензе, в ДХШ №3.
                            </div>
                            <div className="text">
                                После трех месяцев класс вырос с 5 до 40 <br/>
                                человек благодаря уникальной подаче <br/>
                                творческого материала, дав начало <br/>
                                собственной методологии.
                            </div>
                            <div className="text">
                                С 2011-го года Саша выпустила более 15 <br/>
                                книг с иллюстрациями в сотрудничестве с <br/>
                                крупнейшими издательствами России.
                            </div>
                        </div>
                        <div className="image">
                            <img src="/assets/img/historyOne.png" alt=""/>
                        </div>
                    </div>
                    <div className="bottomBlock">
                        <div className="image">
                            <img src="/assets/img/historyTwo.png" alt=""/>
                        </div>
                        <div className="deckrip">
                            “С самого детства меня <br/>
                            вдохновляла мысль, что <br/>
                            творчество наполняет <br/>
                            человека внутренне, <br/>
                            украшая при этом <br/>
                            окружающий мир”
                        </div>

                    </div>
                </div>
                <div className="mission">
                    <div className="title">Наша миссия</div>
                    <div className="decsription">
                        Создавать увлекательные развивающие продукты с помощью которых маленькое<br/>
                        семечко способностей вырастет в могучее дерево безграничного творческого<br/>
                        потенциала.
                    </div>
                </div>
                <div className="prin">
                    <div className="title">«Искра»  в цифрах</div>
                    <div className="miniCart">
                        <div className="cartt">
                            <div className="number">
                                150 000+
                            </div>
                            <div className="text">
                                учеников
                            </div>
                            <div className="deckCart">
                                Прошли обучение в Искра.Академия <br/>
                                на платной основе.
                            </div>
                        </div>
                        <div className="cartt">
                            <div className="number">
                                20
                            </div>
                            <div className="text">
                                городов
                            </div>
                            <div className="deckCart">
                                Имеют офлайн студии под брендом или <br/>
                                по лицензии Искра.Академия
                            </div>
                        </div>
                        <div className="cartt">
                            <div className="number">
                                100+
                            </div>
                            <div className="text">
                                преподавателей
                            </div>
                            <div className="deckCart">
                                Создали уникальную базу знаний и <br/>
                                творческих курсов Искра.Академия
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;