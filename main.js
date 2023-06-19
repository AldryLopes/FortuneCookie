//variaveis
const luckPhrases = [
  'A vida trará coisas boas se tiver paciência.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'O amor está sempre mais próximo do que você imagina.',
  'Deixe de lado as preocupações e seja feliz.',
  'Não compense na ira o que lhe falta na razão.',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.'
];

let randomMessage = luckPhrases[Math.round(Math.random() * luckPhrases.length)];

const cookie = document.querySelector('#img');

const home = document.querySelector('.home');

const luck = document.querySelector('.luck');

const newCookie = document.querySelector('#openCookie');

const messages = document.querySelector('.message p');

const toggleScreen = () => {
  home.classList.toggle('hide')
  luck.classList.toggle('hide')
}

const breakCookie = () => {
  toggleScreen()
  messages.innerText = `${randomMessage}`
}

const breakNewCookie = () => {
  toggleScreen()
  location.reload()
  randomMessage = luckPhrases[Math.round(Math.random() * luckPhrases.length)];
}

const pressEnter = (e) => {
  if ( e.key == 'Enter' && home.classList.contains('hide') ) {
    breakNewCookie()
  }
}

cookie.addEventListener('click', breakCookie);
newCookie.addEventListener('click', breakNewCookie);
document.addEventListener('keydown', pressEnter);