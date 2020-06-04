export default function initFetchBitcoin() {
    async function fetchBitcoin() {
        const bitcointUrl = 'https://blockchain.info/ticker'
        const bitcoinResponse = await fetch(bitcointUrl)
        const bitcoinJson = await bitcoinResponse.json();

        const bitcoinSpan = document.querySelector('.bitcoin')
        const bitcoinInBRL = (100 / bitcoinJson.BRL.buy).toFixed(4)
        bitcoinSpan.innerText = `₿ ${bitcoinInBRL}`
    }
    fetchBitcoin();
}
