import React, { useState } from 'react';
import './Header.scss';
import ThemeSwitcher from '../ThemeSwicther/ThemeSwitcher.jsx';
import {ReactSVG} from "react-svg";
import {NavLink} from "react-router-dom";
import {useTheme} from "../../app/ThemeContext.js";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="Header">
            <div className="logo">
                <NavLink to={"/"} onClick={closeMobileMenu}>
                    {theme === "light"
                        ? <ReactSVG src="./assets/icon/colorLogo.svg" />
                        : <ReactSVG src="./assets/icon/blackLogo.svg"/>}
                </NavLink>
            </div>

            {/* Бургер-меню для мобильных */}
            <div className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`section ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <nav>
                    <ul>
                        <li className="crumb">
                            <NavLink to={"/AboutUs"} onClick={closeMobileMenu}>О нас</NavLink>
                        </li>
                        <li className="crumb">
                            <NavLink to={"/Course"} onClick={closeMobileMenu}>Курсы</NavLink>
                        </li>
                        <li className="crumb inactive">
                            Галерея
                        </li>
                        <li className="crumb inactive">
                            Отзывы
                        </li>
                        <li className="crumb">
                            <NavLink to={"/Contact"} onClick={closeMobileMenu}>Контакты</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <ThemeSwitcher toggleTheme={toggleTheme}/>
        </header>
    );
};

export default Header;