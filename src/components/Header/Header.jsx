import React from 'react';
import './Header.scss';
import ThemeSwitcher from '../ThemeSwicther/ThemeSwitcher.jsx';
import { ReactSVG } from "react-svg";
import {NavLink} from "react-router-dom";
const Header = (props) => {
    const {image } = props;

    return (
        <header className="Header">
            <div className="logo">
                <NavLink to={"/"} ><ReactSVG src={image}/></NavLink>
            </div>
            <div className="section">
                <nav>
                    <ul>
                        <li className="crumb"><NavLink to={"/AboutUs"}>О нас</NavLink></li>
                        <li className="crumb"><NavLink to={"/Course"}>Курсы</NavLink></li>
                        <li className="crumb">Галерея</li>
                        <li className="crumb">Отзывы</li>
                        <li className="crumb"><NavLink to={"/Contact"}>Контакты</NavLink></li>
                    </ul>
                </nav>
            </div>
            <ThemeSwitcher/>
        </header>
    );
};

export default Header;