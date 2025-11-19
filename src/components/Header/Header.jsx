import React from 'react';
import './Header.scss';
import ThemeSwitcher from '../ThemeSwicther/ThemeSwitcher.jsx';

const Header = () => {


    return (
        <header className="Header">
            <div className="logo">
                искра
            </div>
            <div className="section">
                <nav>
                    <ul>
                        <li className="crumb"><a href="about">О нас</a></li>
                        <li className="crumb"><a href="course">Курсы</a></li>
                        <li className="crumb"><a href="gallery">Галерея</a></li>
                        <li className="crumb"><a href="reviews">Отзывы</a></li>
                        <li className="crumb"><a href="сontacts">Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <ThemeSwitcher/>
        </header>
    );
};

export default Header;