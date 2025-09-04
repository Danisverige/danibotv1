// scripts.js

const { getReply } = require('./chatbot'); // Import the logic from chatbot.js

const chat = document.getElementById('chat');
const input = document.getElementById('q');
const sendBtn = document.getElementById('send');

function addMsg(text, who){
  const wrap = document.createElement('div');
  wrap.className = 'msg ' + (who === 'user' ? 'user' : 'bot');
  const bubble = document.createElement('div');
  bubble.className = 'bubble ' + (who === 'user' ? 'user' : 'bot');
  bubble.textContent = text;
  wrap.appendChild(bubble);
  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;
}

function handleSend(){
  const text = input.value.trim();
  if(!text) return;
  addMsg(text, 'user');
  const resp = getReply(text);
  setTimeout(() => addMsg(resp, 'bot'), 200);
  input.value = '';
}

sendBtn.addEventListener('click', handleSend);
input.addEventListener('keydown', e => { if(e.key === 'Enter') handleSend(); });
