const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 60 + 20;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';

  bubble.style.left = Math.random() * 100 + '%';
  bubble.style.animationDuration = Math.random() * 10 + 5 + 's';

  bubble.addEventListener('click', () => {
    bubble.style.transform = 'scale(1.4)';
    bubble.style.opacity = '0';
    setTimeout(() => bubble.remove(), 200);
  });

  bubblesContainer.appendChild(bubble);

  setTimeout(() => bubble.remove(), 15000);
}

setInterval(createBubble, 600);
