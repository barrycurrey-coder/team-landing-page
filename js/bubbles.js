const bubblesContainer = document.querySelector('.bubbles');
const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');
const counter = document.getElementById('bubble-counter');
const counterValue = document.getElementById('bubble-count');
const popSound = new Audio('../audio/pop.mp3');


popSound.volume = 0.4;
let poppedCount = 0;


function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 60 + 20;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';

  bubble.style.left = Math.random() * 100 + '%';
  bubble.style.animationDuration = Math.random() * 10 + 5 + 's';

  bubble.addEventListener('click', () => {
    playPopSound();
  
    poppedCount++;
    counterValue.textContent = poppedCount;
  
    if (poppedCount === 1) {
      counter.classList.add('visible');
    }
  
    bubble.style.transform = 'scale(1.4)';
    bubble.style.opacity = '0';
  
    setTimeout(() => bubble.remove(), 200);
  });  
  

  bubblesContainer.appendChild(bubble);

  setTimeout(() => bubble.remove(), 15000);
}

function playPopSound() {
    const sound = popSound.cloneNode();
    sound.play();
  }  


btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.textContent = '⏸';
    btn.classList.add('playing');
  } else {
    music.pause();
    btn.textContent = '▶';
    btn.classList.remove('playing');
  }
});

  

setInterval(createBubble, 600);
