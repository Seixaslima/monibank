export default function ehMaiorDeIdade(campo) {
  const dataAniversario = new Date(campo.value);
  console.log(validaIdade(dataAniversario));
  return validaIdade(dataAniversario);
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
