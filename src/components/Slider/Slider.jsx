import React, { useRef, useEffect } from "react";
import "./Slider.scss";
import Review from "../Review/Review.jsx";

const Slider = () => {
    const data = [
        { id: 1, img: "./assets/img/rew1.png", name: "Шелмакова Варя", old: "8 лет" },
        { id: 2, img: "./assets/img/rew2.png", name: "Галива Зарина", old: "7 лет" },
        { id: 3, img: "./assets/img/rew3.png", name: "Пыльцина Злата", old: "8 лет" },
        { id: 4, img: "./assets/img/rew4.png", name: "Гоккоева Милена", old: "12 лет" },
        { id: 5, img: "./assets/img/rew5.png", name: "Булатова Майя", old: "5 лет" },
        { id: 6, img: "./assets/img/rew6.png", name: "Чудинова Василиса", old: "4 года" },
    ];

    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // ---- wheel -> horizontal scroll (полезно на десктопе) ----
        const onWheel = (e) => {
            // Если пользователь держит Shift — поведение браузера уже горизонтальное, не мешаем
            if (e.shiftKey) return;
            // Только если есть вертикальный вход — конвертируем в горизонт
            if (Math.abs(e.deltaY) > 0) {
                e.preventDefault();
                track.scrollLeft += e.deltaY;
            }
        };

        // ---- drag-to-scroll (mouse) ----
        let isDown = false;
        let startX;
        let scrollLeft;

        const onMouseDown = (e) => {
            isDown = true;
            track.classList.add("is-dragging");
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        };
        const onMouseLeave = () => {
            isDown = false;
            track.classList.remove("is-dragging");
        };
        const onMouseUp = () => {
            isDown = false;
            track.classList.remove("is-dragging");
        };
        const onMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1; // множитель скорости
            track.scrollLeft = scrollLeft - walk;
        };

        // ---- touch: ничего дополнительного не нужно (natively scrolls) ----

        track.addEventListener("wheel", onWheel, { passive: false });
        track.addEventListener("mousedown", onMouseDown);
        track.addEventListener("mouseleave", onMouseLeave);
        track.addEventListener("mouseup", onMouseUp);
        track.addEventListener("mousemove", onMouseMove);

        return () => {
            track.removeEventListener("wheel", onWheel);
            track.removeEventListener("mousedown", onMouseDown);
            track.removeEventListener("mouseleave", onMouseLeave);
            track.removeEventListener("mouseup", onMouseUp);
            track.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div className="slider">
            <div className="slider-track" ref={trackRef}>
                {data.map((item) => (
                    <div className="slide" key={item.id}>
                        <Review
                            img={item.img}
                            name={item.name}
                            old={item.old}
                            icon="./assets/img/stars.png"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;