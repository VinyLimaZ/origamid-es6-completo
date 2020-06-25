import validatorCPF from './modules/validator-cpf.js'

const cpfInputElem = document.querySelector('#cpf')
const validatorCPFInstance = new validatorCPF(cpfInputElem);
validatorCPFInstance.init();
