export default function fetchCEPInfo() {
    const viaCEPUrl = 'https://viacep.com.br/ws/${CEP}/json'
    const cepInput = document.querySelector('#cep')
    const spanAddress = document.querySelector('#address')
    const submitForm = document.querySelector('[type="submit"]')

    const printSpanAddress = (text) => { spanAddress.innerText = text }

    const fetchCEPAPI = async (event) => {
        event.preventDefault();

        const cepValue = cepInput.value

        if(cepValue) {
            const viaCEPFetchUrl = viaCEPUrl.replace('${CEP}', cepValue)

            const response = await fetch(viaCEPFetchUrl)
            const jsonResponse = await response.json()

            if(jsonResponse["logradouro"]){
                printSpanAddress(jsonResponse["logradouro"])
            } else {
                printSpanAddress('CEP invalido')
            }
        } else {
            printSpanAddress('Favor consultar o CEP informado!')
        }
    }

    submitForm.addEventListener('click', fetchCEPAPI)
}
