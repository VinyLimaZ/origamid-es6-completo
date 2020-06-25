export default class validatorCPF {
    constructor(cpfElement) {
        this.cpfElement = cpfElement
    }

    clean(cpfStr) {
        return cpfStr.replace(/\D/g, '')
    }

    struct(cpfStr) {
        return cpfStr.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }

    addEvent() {
        this.cpfElement.addEventListener('change', () => {
            this.validateOnChange(this.cpfElement)
        })
    }

    validateOnChange(elem) {
        const cpfCleaned = this.clean(elem.value)

        if(cpfCleaned.length === 11) {
            const cpfFormated = this.struct(cpfCleaned)
            elem.classList.remove('error')
            elem.classList.add('valid')
            this.errorSpan().classList.remove('active')
            elem.value = cpfFormated
        } else {
            elem.classList.remove('valid')
            elem.classList.add('error')
            this.errorSpan().classList.add('active')
        }
    }

    addErrorSpan() {
        const errorElement = document.createElement('span')
        errorElement.classList.add('error-text')
        errorElement.innerText = 'CPF invalido!'
        this.cpfElement.parentElement.
            insertBefore(errorElement,
            this.cpfElement.nextElementSibling);
    }

    errorSpan() {
        return document.querySelector('.error-text')
    }

    init() {
        this.addEvent();
        this.addErrorSpan();
    }
}
