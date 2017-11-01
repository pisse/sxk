import Swiper from 'swiper';

export default () => {
    let prev = document.querySelector('#J_product_prev');
    let next = document.querySelector('#J_product_next');
    let steps = document.querySelectorAll('.step');
    let details = new Swiper(`#J_product_details`, {
        autoplay: 0,
        simulateTouch: 0
    });
    let phone = new Swiper(`#J_product_phone`, {
        autoplay: 3000,
        onFirstInit(swiper){
            setTimeout(() => {
                disabled.apply(swiper);
            });
        },
        onSlideChangeStart(swiper){
            setTimeout(() => {
                disabled.apply(swiper);
            });
            details.swipeTo(swiper.activeIndex);
        }
    });
    prev && (prev.onclick = () => {
        phone.swipePrev();
    });
    next && (next.onclick = () => {
        phone.swipeNext();
    });
    function disabled(){
        let index = this.activeIndex;
        let size = this.slides.length - 1;
        if(index === 0){
            prev.className += ' disabled';
        }else{
            prev.className = 'prev';
        }
        if(index === size){
            next.className += ' disabled';
        }else{
            next.className = 'next';
        }
        for(let i = 0;i < steps.length;i++){
            let step = steps[i];
            if(index >= i){
                step.className += ' active';
            }else{
                // step.className = 'step';
            }
            if(index != i){
                step.className = 'step';
            }
        }
    }
}