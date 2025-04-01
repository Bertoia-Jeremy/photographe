import Swiper from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

function slider() {
    const sliders = document.querySelectorAll('.js-slider')

    sliders.forEach((sliderHolder) => {
        new Swiper(sliderHolder, {
            modules: [Navigation, Scrollbar],
            slidesPerView: 'auto',
            navigation: {
                nextEl: sliderHolder.querySelector('.swiper-button-next'),
                prevEl: sliderHolder.querySelector('.swiper-button-prev'),
            },
            scrollbar: {
                el: sliderHolder.querySelector('.swiper-scrollbar'),
            },
        })
    })
}

export default slider
