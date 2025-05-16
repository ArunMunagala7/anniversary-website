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

  const buttonWidth = btn.offsetWidth;
  const buttonHeight = btn.offsetHeight;

  // Set safe margins to avoid edges on mobile screens
  const safeMargin = 20; 

  const maxX = windowWidth - buttonWidth - safeMargin;
  const maxY = windowHeight - buttonHeight - safeMargin;

  // Ensure button never moves off-screen
  const randomX = Math.floor(Math.random() * (maxX - safeMargin) + safeMargin);
  const randomY = Math.floor(Math.random() * (maxY - safeMargin) + safeMargin);

  btn.style.position = 'fixed';
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
}
