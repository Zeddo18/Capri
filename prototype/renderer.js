const character = document.querySelector('.character');
const chat = document.querySelector('.chat');
const input = document.querySelector('#message');
const messages = document.querySelector('.messages');
const status = document.querySelector('.status');

document.querySelector('.character-button').addEventListener('click', () => {
  chat.classList.toggle('open');
  if (chat.classList.contains('open')) input.focus();
});
document.querySelector('.close').addEventListener('click', () => chat.classList.remove('open'));
document.querySelector('.teleport').addEventListener('click', () => window.companion.teleport());
document.querySelector('.hide').addEventListener('click', () => window.companion.hide());

window.companion.onGlitch(() => {
  character.classList.add('glitching');
  setTimeout(() => character.classList.remove('glitching'), 460);
});

document.querySelector('#composer').addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const bubble = document.createElement('div');
  bubble.className = 'message user-message';
  bubble.textContent = text;
  messages.append(bubble);
  input.value = '';
  status.textContent = 'MESSAGE SAVED LOCALLY · AI NOT CONNECTED';
  messages.scrollTop = messages.scrollHeight;
  setTimeout(() => status.textContent = 'STANDING BY', 2800);
});

let dragging = false;
let startX = 0;
let startY = 0;
character.addEventListener('pointerdown', (event) => {
  if (event.target.closest('button')) return;
  dragging = true;
  startX = event.clientX;
  startY = event.clientY;
  character.setPointerCapture(event.pointerId);
});
character.addEventListener('pointermove', (event) => {
  if (!dragging) return;
  const dx = event.clientX - startX;
  const dy = event.clientY - startY;
  character.style.setProperty('--drag-x', `${dx * .15}px`);
  character.style.setProperty('--drag-y', `${dy * .15}px`);
});
character.addEventListener('pointerup', () => {
  dragging = false;
  character.style.setProperty('--drag-x', '0px');
  character.style.setProperty('--drag-y', '0px');
});
