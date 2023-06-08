export default function ehUmCPF(campo) {
  const cpf = campo.value.replace(/\.|-/g, '');
  if (
    validaNumerosRepetido(cpf) ||
    verificaPrimeiroDigito(cpf) ||
    verificaSegundoDigito(cpf)
  ) {
    campo.setCustomValidity('CPF Invalido');
  }
}

function validaNumerosRepetido(cpf) {
  const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ];

  return numerosRepetidos.includes(cpf);
}

function verificaPrimeiroDigito(cpf) {
  let soma = 0;
  let multiplicador = 10;
  for (let contador = 0; contador < 9; contador++) {
    soma += cpf[contador] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if ((soma == 10) | (soma == 11)) soma = 0;
  return soma != cpf[9];
}

function verificaSegundoDigito(cpf) {
  let soma = 0;
  let multiplicador = 11;
  for (let contador = 0; contador < 10; contador++) {
    soma += cpf[contador] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if ((soma == 10) | (soma == 11)) soma = 0;
  return soma != cpf[10];
}
