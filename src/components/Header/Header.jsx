import React from 'react';
import './Header.scss';
import ThemeSwitcher from '../ThemeSwicther/ThemeSwitcher.jsx';
import {ReactSVG} from "react-svg";
import {NavLink} from "react-router-dom";
import {useTheme} from "../../app/ThemeContext.js";

const Header = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <header className="Header">
            <div className="logo">
                <NavLink to={"/"} >{theme === "light"
                    ? <ReactSVG src="./assets/icon/colorLogo.svg" />
                    : <ReactSVG src="./assets/icon/blackLogo.svg"/>}
                </NavLink>
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
            <ThemeSwitcher toggleTheme={toggleTheme}/>
        </header>
    );
};

export default Header;