const downBtn = document.querySelector('.down-button');
const btnPointer = document.querySelector('.fas fa-arrow-down')
const upBtn = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesAmount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesAmount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesAmount) {
            activeSlideIndex = 0;
        }
    } else if (direction = 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesAmount - 1;
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`
}