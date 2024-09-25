import log from './log';

const h1 = document.createElement('h1');
h1.innerHTML = 'Learning webpack';

const btn = document.createElement('button');
btn.innerHTML = 'Log';
btn.onclick = log;

document.body.appendChild(h1);
document.body.appendChild(btn);
