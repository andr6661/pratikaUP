import Button from '../Button/Button.jsx';
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
            <li className="About us">О нас</li>
            <li className="course">Курсы</li>
            <li className="gallery">Галерея</li>
            <li className="reviews">Отзывы</li>
            <li className="contacts">Контакты</li>
          </ul>
        </nav>
      </div>
      <ThemeSwitcher />
      <Button>
        gfdgdfgdf
      </Button>
    </header>
  );
};

export default Header;