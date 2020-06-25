export default function sanitizeCPF() {
    const cleanCPF = (cpfStr) => {
        return cpfStr.replace(/\D/g, '')
    }

    const structCPF = (cpfStr) => {
        return cpfStr.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    }

    const sanitizeCPF = (cpfStr) => {
        const cleanedCPF = cleanCPF(cpfStr)
        return structCPF(cleanedCPF)
    }

    const dirtyCPFs = document.querySelectorAll('.cpf li')

    dirtyCPFs.forEach((dirtyCPF) => {
        const innerTextCPF = dirtyCPF.innerText
        const sanitizedCPF = sanitizeCPF(innerTextCPF)
        dirtyCPF.innerText = sanitizedCPF
    })
}
