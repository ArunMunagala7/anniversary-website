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
    loadGallery(); // load gallery after message is shown
  }
});

function moveButtonRandomly() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const buttonWidth = btn.offsetWidth;
  const buttonHeight = btn.offsetHeight;

  const safeMargin = 20;
  const maxX = windowWidth - buttonWidth - safeMargin;
  const maxY = windowHeight - buttonHeight - safeMargin;

  const randomX = Math.floor(Math.random() * (maxX - safeMargin) + safeMargin);
  const randomY = Math.floor(Math.random() * (maxY - safeMargin) + safeMargin);

  btn.style.position = 'fixed';
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
}

function loadGallery() {
    const words = [
      "Our", "love", "is", "patient", "warm", "silly", "honest", "magical", "growing", "steady",
      "surprising", "soulful", "safe", "playful", "chaotic", "homely", "powerful", "everything",
      "my", "heart", "never", "knew", "it", "needed", ".", "❤️", "✨"
    ];
  
    const galleryContainer = document.querySelector('.gallery-container');
  
    for (let i = 1; i <= 28; i++) {
      const item = document.createElement('div');
      item.classList.add('gallery-item');
  
      const img = document.createElement('img');
      img.src = `gallery/image${i}.jpeg`;
      img.alt = `Image ${i}`;
  
      const word = document.createElement('div');
      word.classList.add('image-word');
      word.textContent = words[i - 1];
  
      item.appendChild(img);
      item.appendChild(word);
      galleryContainer.appendChild(item);
    }
  }
  