// Show/Hide Back To Top Button
const showHideButton = () => {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 500) {
        backToTop.style.visibility = "visible";
        backToTop.style.opacity = 1;
    } else {
        backToTop.style.opacity = 0;
        backToTop.style.visibility = "hidden";
    }
};
window.addEventListener('scroll', showHideButton);

// Back To Top Button
var backToTop = document.querySelector('.go-to-top');
const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
backToTop.addEventListener('click', scrollToTop);
