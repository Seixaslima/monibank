const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const mensagem = document.querySelector('[data-mensagem]');
const canvas = document.querySelector('[data-video-canvas]');
const botaoEnviarFoto = document.querySelector('[data-enviar]');

let imagemURL = '';

botaoIniciarCamera.addEventListener('click', async function () {
  const camera = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  });

  botaoIniciarCamera.style.display = 'none';
  campoCamera.style.display = 'block';

  video.srcObject = camera;
});

botaoTirarFoto.addEventListener('click', () => {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  imagemURL = canvas.toDataURL('imagem/jpeg');

  campoCamera.style.display = 'none';
  mensagem.style.display = 'block';
});

botaoEnviarFoto.addEventListener('click', () => {
  const dadosSalvos = localStorage.getItem('cadastro');
  const dadosConvertidos = JSON.parse(dadosSalvos);

  dadosConvertidos.imagem = imagemURL;

  localStorage.setItem('cadastro', JSON.stringify(dadosConvertidos));
  window.location.href = './abrir-conta-form-3.html';
});
