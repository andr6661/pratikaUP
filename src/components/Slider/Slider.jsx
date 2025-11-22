import React, { useState, useEffect } from "react";
import "./Slider.scss";
import Review from "../Review/Review.jsx";

const Slider = () => {
    const images = [
        <Review img={"./assets/img/rew1.png"} name={'Шелмакова Варя'} old={'8 лет'} icon={"./assets/img/stars.png"} />,
        <Review img={"./assets/img/rew2.png"} name={'Галива Зарина'} old={'7 лет'} icon={"./assets/img/stars.png"} />,
        <Review img={"./assets/img/rew3.png"} name={'Пыльцина Злата'} old={'8 лет'} icon={"./assets/img/stars.png"} />,
        <Review img={"./assets/img/rew4.png"} name={'Гоккоева Милена'} old={'12 лет'} icon={"./assets/img/stars.png"} />,
        <Review img={"./assets/img/rew5.png"} name={'Булатова Майя'} old={'5 лет'} icon={"./assets/img/stars.png"} />,
        <Review img={"./assets/img/rew6.png"} name={'Чудинова Василиса'} old={'4 года'} icon={"./assets/img/stars.png"} />,
    ];

    // Функция для определения количества карточек в зависимости от ширины экрана
    const getItemsPerSlide = () => {
        const width = window.innerWidth;
        if (width <= 767) return 1; // 1 карточка на мобильных
        if (width <= 1279) return 2; // 2 карточки на планшетах
        return 3; // 3 карточки на десктопе
    };

    const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
    const totalSlides = Math.ceil(images.length / itemsPerSlide);
    const [index, setIndex] = useState(0);

    // Обработчик изменения размера окна
    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(getItemsPerSlide());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Автоперелистывание
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalSlides, itemsPerSlide]); // Добавляем itemsPerSlide в зависимости

    return (
        <div className="slider">
            <div
                className="slides"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                    const start = slideIndex * itemsPerSlide;
                    const slideImages = images.slice(start, start + itemsPerSlide);

                    return (
                        <div className="slide" key={slideIndex}>
                            {slideImages.map((reviewComponent, i) => (
                                <div key={i} className="slide-item">
                                    {reviewComponent}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>

            {/* Индикаторы */}
            <div className="indicators">
                {Array.from({ length: totalSlides }).map((_, i) => (
                    <div
                        key={i}
                        className={`line ${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;