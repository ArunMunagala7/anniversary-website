let clickCount = 0;
const maxClicks = 4;
const btn = document.getElementById('surprise-btn');
const content = document.getElementById('content');

btn.addEventListener('click', () => {
  clickCount++;

  if(clickCount <= maxClicks) {
    moveButtonRandomly();
  } else {
    btn.style.display = 'none'; // hide button after clicks complete
    content.classList.remove('hidden'); // reveal letter and photos
  }
});

function moveButtonRandomly() {
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();

  const maxX = containerRect.width - btn.offsetWidth;
  const maxY = containerRect.height - btn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btn.style.position = 'absolute';
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
}
