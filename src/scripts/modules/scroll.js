import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const scrillFunc = () => {
    const elem = document.querySelector('#seamless-scroll')

    if (elem) {
        // Регистрируем плагин ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Настройка анимации
        gsap.to(".seamless__box", {
            y: () => {
                // Вычисляем общую высоту скролла
                const boxHeight = document.querySelector(".seamless__box").offsetHeight;
                const wrapperHeight = document.querySelector(".seamless__wrapper").offsetHeight;
                const elemHeight = document.querySelector(".seamless__item__wrapper").offsetHeight
                return -(boxHeight - wrapperHeight + elemHeight); // Сдвигаем контент вверх на разницу высот
            },
            ease: "none", // Линейная анимация
            scrollTrigger: {
                trigger: "#seamless-scroll", // Триггер — секция
                start: "top top", // Начинать анимацию, когда верх секции достигнет верха окна
                end: "bottom top", // Заканчивать анимацию, когда низ секции достигнет верха окна
                scrub: true, // Плавная синхронизация с прокруткой
                pin: true, // Фиксируем секцию на время анимации
                // markers: true, // Отладка (можно убрать в production)
            },
        });
    }
}