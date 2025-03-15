import Splide from '@splidejs/splide';

export const splidesModule = () => {
    const productsSlider = document.querySelector('.products-slider')

    if (productsSlider) {
        new Splide(productsSlider, {
            perPage : 3,
            perMove: 1,
            gap: '20px',
            breakpoints: {
                1020: {
                    perPage : 2,
                    arrows: false,
                },
                991: {
                    arrows: true
                },
                820: {
                    arrows: false,
                    pagination: true,
                    perPage : 1,
                    autoWidth: true,
                    padding: '12px'
                },
          }
        }).mount();
    }
}