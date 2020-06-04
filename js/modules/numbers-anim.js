import initFetchAnimalsJson  from './fetch-animals-total.js'

export default function initNumberAnim() {
    async function numbersAnim() {
        let animalsJson = await initFetchAnimalsJson();

        animalsJson.forEach((animal) => {
            const total = +animal.total
            const increment = Math.floor(total / 100);
            let start = 0;
            const animalNumberSpan = document.querySelector(`[data-number="${animal.type}"]`)

            const timer = setInterval(() => {
                start += increment;
                animalNumberSpan.innerText = start;
                if(start > total) {
                    animalNumberSpan.innerText = total;
                    clearInterval(timer);
                }
            }, 25 * Math.random());
        });
    }

    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains('active')) {
            observer.disconnect();
            numbersAnim();
        }
    }

    const observerTarget = document.querySelector('.numbers');
    const observer = new MutationObserver(handleMutation);

    observer.observe(observerTarget, {attributes: true});
}