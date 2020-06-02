export default function fetchBitcoinInfo() {
    const bitcointUrl = 'https://blockchain.info/ticker'
    const bitcoinSpan = document.querySelector('#bitcoin')

    const printBitcoinInfo = (bitcoinBrl) => {
        bitcoinSpan.innerText = `${bitcoinBrl['symbol']} ${bitcoinBrl['last']}`
    }

    const bitcoinInfo = () => {
        fetch(bitcointUrl)
            .then(response => response.json())
            .then(json => json["BRL"])
            .then(brl => printBitcoinInfo(brl))
    }

    bitcoinInfo();

    const reloadBitcoinInfo = setInterval(bitcoinInfo, 30000)

    setTimeout(() => {
        clearInterval(reloadBitcoinInfo)
    }, 60000)
}
