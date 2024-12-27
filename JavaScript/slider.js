

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    breakpoints:{ 
        0:{
            slidesPerView:1
        }, 
        400:{
            slidesPerView:1
        },
        600:{
            slidesPerView:2
        },
        900:{
            slidesPerView:3
        },
        1200:{
            slidesPerView:4
        },
      
    }
});
