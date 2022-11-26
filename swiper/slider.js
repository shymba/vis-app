const slider = document.querySelector('.mySwiper');

let swiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});