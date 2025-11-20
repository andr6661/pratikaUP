import React from 'react';
import Header from "../components/Header/Header.jsx";
import logoSvg from "../icon/logo.svg";
import Footer from "../components/Footer/Footer.jsx";
import Cart from "../components/Cart/Cart.jsx";
import Button from "../components/Button/Button.jsx";

const Course = () => {
    return (
        <div>
            <Header image={logoSvg} />
            <div className="studying">
                <div className="titleStudying">Все курсы</div>
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
                            title={"Книжные истории"}
                            description={"На уроках вы создадите собственные работы по мотивам любимых сюжетов, освоив необычные техники."}
                            image="assets/img/Cart4.png"

                        >
                            <Button>
                            </Button>
                        </Cart>
                        <Cart
                            title={"Цвет в искусстве"}
                            description={"От Харинга до Бэнкси: знакомим детей с искусством и создаём яркие работы в скетчбуке."}
                            image="assets/img/Cart5.png"

                        >
                            <Button>
                            </Button>
                        </Cart>
                        <Cart
                            title={"Творческие задания для детей"}
                            description={"Миры из фантазии: создаем свои вселенные с помощью акварели, маркеров и коллажей."}
                            image="assets/img/Cart6.png"

                        >
                            <Button>
                            </Button>
                        </Cart>
                        <Cart
                            title={"Как стать дизайнером интерьера"}
                            description={"- Узнаем про дизайн интерьера — это ремесло или искусство?  - Рассмотрим все детали: от создания светильника из пластилина до п..."}
                            image="assets/img/Cart7.png"
                        >
                            <Button>
                            </Button>
                        </Cart>
                    </div>
                </div>
                <div className="watchButton"><Button>Смотреть больше курсов</Button></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Course;