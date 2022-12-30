
// ヘッダー固定

function headerfix() {
    var navPos = $("nav").offset().top;
    var headerPos = $(".header-logo-area").offset().top;
    var pageWidth = $(".header").width();
    
    console.log(pageWidth);
    
    if (pageWidth > 650) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > navPos) {
                $("nav").css("position", "fixed");
            } else {
                $("nav").css("position", "static");
            }
        });
    } else if (pageWidth <= 650) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > headerPos) {
                $(".header-logo-area").css("position", "fixed");
            } else {
                $(".header-logo-area").css("position", "static");
            }
        });
    }   
}

$(function () {
    headerfix();
});


// トップに戻るボタン
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
 
