const swiper = new Swiper('.swiper', {
    loop: true,
    // autoplay: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});

// 탑버튼
let topBnt = document.querySelector('button');

topBnt.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})

window.addEventListener('scroll', function(){
    let scroll = window.scrollY;
    console.log(scroll);
    if ( scroll > 50 ){
        topBnt.style.opacity = 1;
    } else {
        topBnt.style.opacity = 0;
    }
})