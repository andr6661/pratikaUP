import React, { useState, useRef, useEffect } from 'react';
import "./Slider.scss";

const Slider = ({ children, slidesToShow = 1 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const sliderRef = useRef(null);
    const slides = React.Children.toArray(children);
    const totalSlides = slides.length;

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // multiplier for faster dragging
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev + slidesToShow >= totalSlides ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? totalSlides - slidesToShow : prev - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Рассчитываем видимые слайды
    const getVisibleSlides = () => {
        return slides.slice(currentSlide, currentSlide + slidesToShow);
    };

    return (
        <div className="slider">
            <div className="slider__container">
                <button
                    className="slider__button slider__button--prev"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    ‹
                </button>

                <div
                    className="slider__track"
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className="slider__slides">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="slider__slide"
                                style={{
                                    flex: `0 0 calc(100% / ${slidesToShow})`
                                }}
                            >
                                {slide}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="slider__button slider__button--next"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    ›
                </button>
            </div>

            {/* Индикаторы */}
            <div className="slider__indicators">
                {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map((_, index) => (
                    <button
                        key={index}
                        className={`slider__indicator ${index === Math.floor(currentSlide / slidesToShow) ? 'slider__indicator--active' : ''}`}
                        onClick={() => goToSlide(index * slidesToShow)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;