import { mensagens } from './mensagem-error.js';
import ehUmCPF from './valida-cpf.js';
import ehMaiorDeIdade from './valida-idade.js';

const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-formulario]');
const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'customError'
];

formulario.addEventListener('submit', e => {
  e.preventDefault();

  const listaRespostas = {
    nome: e.target.elements['nome'].value,
    email: e.target.elements['email'].value,
    rg: e.target.elements['rg'].value,
    cpf: e.target.elements['cpf'].value,
    aniversario: e.target.elements['aniversario'].value
  };

  localStorage.setItem('cadastro', JSON.stringify(listaRespostas));

  window.location.href = './abrir-conta-form-2.html';
});

camposDoFormulario.forEach(campo => {
  campo.addEventListener('blur', () => verificaCampo(campo));
  campo.addEventListener('invalid', event => event.preventDefault());
});

function verificaCampo(campo) {
  let mensagem = '';
  campo.setCustomValidity('');
  if (campo.name == 'cpf' && campo.value.length >= 11) {
    ehUmCPF(campo);
  }

  if (campo.name == 'aniversario' && campo.value != '') {
    ehMaiorDeIdade(campo);
  }
  tiposDeErro.forEach(erro => {
    if (campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro];
    }
  });

  const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
  const validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.innerHTML = mensagem;
  } else {
    mensagemErro.innerHTML = '';
  }
}
