export default function initScrollToRight(){
    const allSectionToScroll = document.querySelectorAll('[data-anim="scroll-right"]');
    const halfWindow = window.innerHeight * 0.3;

    function scrollToRight() {
        allSectionToScroll.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - halfWindow ;
            const isSectionVisible = (sectionTop - halfWindow) < 0
            if(isSectionVisible) {
                section.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', scrollToRight);
}
