import React from 'react';
import Advantages from "../advantages/Advantages.jsx";
import diplomSvg from "../../icon/diplom.svg";
import settingSvg from "../../icon/setting.svg";
import calendarSvg from "../../icon/calendar.svg";
import shieldSvg from "../../icon/shield.svg";

const AdvantagesBlock = () => {
    return (
        <div>
            <section className="advantages">
                <h2 className="whyMeTitle">Почему выбирают нас?</h2>
                <div className="stroke">
                    <Advantages image={diplomSvg} title="Гарантированный результат" />
                    <Advantages image={settingSvg} title="Практика вместо теории" />
                    <Advantages image={calendarSvg} title="Гибкий график" />
                    <Advantages image={shieldSvg} title="Без рисков" />
                </div>
            </section>
        </div>
    );
};

export default AdvantagesBlock;