export default function initAccordion(){
    const faqAccordionList = document.querySelectorAll('[data-anim="accordion"] dt')

    if(faqAccordionList.length) {
        faqAccordionList[0].classList.add('active')
        faqAccordionList[0].nextElementSibling.classList.add('active')

        faqAccordionList.forEach((item) => item.addEventListener('click', activeAccordion));

        function activeAccordion() {
            this.classList.toggle('active')
            this.nextElementSibling.classList.toggle('active');
        }
    }
}
