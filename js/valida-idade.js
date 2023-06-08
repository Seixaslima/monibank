export default function ehMaiorDeIdade(campo) {
  const dataAniversario = new Date(campo.value);
  if (!validaIdade(dataAniversario)) {
    campo.setCustomValidity('O usuario é menor de idade');
  }
}

function validaIdade(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 19,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataAtual > dataMais18;
}
