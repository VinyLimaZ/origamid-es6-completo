export default function fetchCEPInfo() {
    const viaCEPUrl = 'https://viacep.com.br/ws/${CEP}/json'
    const cepInput = document.querySelector('#cep')
    const spanAddress = document.querySelector('#address')
    const submitForm = document.querySelector('[type="submit"]')

    const printSpanAddress = (text) => { spanAddress.innerText = text }

    const fetchCEPAPI = (event) => {
        event.preventDefault();

        const cepValue = cepInput.value

        if(cepValue) {
            const viaCEPFetchUrl = viaCEPUrl.replace('${CEP}', cepValue)

            fetch(viaCEPFetchUrl)
                .then(response => response.json())
                .then((json) => {
                    if(json["logradouro"]){
                        printSpanAddress(json["logradouro"])
                    } else {
                        console.log(json)
                        printSpanAddress('CEP invalido')
                    }
                })

        } else {
            printSpanAddress('Favor consultar o CEP informado!')
        }
    }

    submitForm.addEventListener('click', fetchCEPAPI)
}
