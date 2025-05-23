const imageCount = 6;
const images = [];
let currentIndex = 0;
let intervalId = null;

const mainImage = document.getElementById("main-image");
const imageName = document.getElementById("image-name");
const resolution = document.getElementById("resolution");
const downloadBtn = document.getElementById("download-btn");
const thumbnailsContainer = document.getElementById("thumbnails-container");

async function fetchImageUrl() {
  const res = await fetch("https://api.18xo.eu.org/random?type=img");
  return res.url;
}

async function loadImages() {
  for (let i = 0; i < imageCount; i++) {
    const url = await fetchImageUrl();
    images.push({
      name: `壁纸 ${i + 1}`,
      url,
      thumbnail: url
    });
  }

  renderThumbnails();
  updateImage(0);
  startAutoPlay();
}

function updateImage(index) {
  const imgData = images[index];
  mainImage.src = imgData.url;
  imageName.textContent = imgData.name;
  downloadBtn.href = imgData.url;

  const tempImg = new Image();
  tempImg.onload = () => {
    resolution.textContent = `${tempImg.width}×${tempImg.height}`;
  };
  tempImg.src = imgData.url;
}

function renderThumbnails() {
  thumbnailsContainer.innerHTML = "";
  images.forEach((img, index) => {
    const thumb = document.createElement("img");
    thumb.src = img.thumbnail;
    thumb.alt = img.name;
    thumb.onclick = () => {
      currentIndex = index;
      updateImage(index);
      restartAutoPlay();
    };
    thumbnailsContainer.appendChild(thumb);
  });
}

function startAutoPlay() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
  }, 5000);
}

function restartAutoPlay() {
  clearInterval(intervalId);
  startAutoPlay();
}

loadImages();
