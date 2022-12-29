

$(function () {
    var navPos = $("nav").offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > navPos) {
            $("nav").css("position", "fixed");
        } else {
            $("nav").css("position", "static");
        }
    });
});

function scrollTop() {
    const target = document.getElementById('scroll-top-button');
    target.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

scrollTop();


function Animation() {
    let pageTop = document.getElementById('scroll-top-button');
    let dest = window.pageYOffset;
    if (dest > 100) {
        pageTop.classList.add('show');
    } else {
        pageTop.classList.remove('show');
    }
}    
window.addEventListener('scroll', Animation);
 
