import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "../Button/Button.jsx";

const Hero = () => {
    return (
        <div>
            <div className="welcome">
                <div className="leftBlock">
                    <div className="title">Учим детей рисовать <br/> свое будущее!</div>
                    <div className="subtitle">Искра — международная онлайн-школа <br/> рисования и развития
                        креативного <br/> мышления для детей от 4 лет
                    </div>
                    <NavLink to={"/Course"}><Button>Выбрать курс</Button></NavLink>
                </div>
                <div className="image"><img src="/assets/img/bannerimg.png" alt=""/></div>
            </div>
        </div>
    );
};

export default Hero;