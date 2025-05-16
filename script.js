let clickCount = 0;
const maxClicks = 4;
const btn = document.getElementById('surprise-btn');
const content = document.getElementById('content');

btn.addEventListener('click', () => {
  clickCount++;

  if (clickCount <= maxClicks) {
    moveButtonRandomly();
  } else {
    btn.style.display = 'none';
    content.classList.remove('hidden');
  }
});

function moveButtonRandomly() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Generate a random position within the viewport
  const randomX = Math.floor(Math.random() * (windowWidth - btn.offsetWidth));
  const randomY = Math.floor(Math.random() * (windowHeight - btn.offsetHeight));

  // Move the button across the screen freely
  btn.style.position = 'fixed';
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
}
