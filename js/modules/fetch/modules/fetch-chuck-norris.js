export default function fetchChuckNorrisQuote() {
    const spanChuckNorrisQuote = document.querySelector('#chuck')
    const buttonCNQRandom = document.querySelector('#chuck-random')
    const chuckNorrisQuoteAPI = 'https://api.chucknorris.io/jokes/random'

    const printChuckNorrisQuote = (json) => {
        spanChuckNorrisQuote.innerText = json["value"]
    }

    const surpriseMe = () => {
        fetch(chuckNorrisQuoteAPI)
            .then(response => response.json())
            .then(json => printChuckNorrisQuote(json))
    }

    buttonCNQRandom.addEventListener('click', surpriseMe)
}
