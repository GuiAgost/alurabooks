const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    slidesPerView: 2.7,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    /* adiciona esse codigo abaixo */
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
