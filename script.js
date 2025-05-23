const images = [
  {
    name: "43634",
    url: "https://api.18xo.eu.org/file/1747823385782_43634.png"
  },
  {
    name: "43352",
    url: "https://api.18xo.eu.org/file/1747823210434_43352.png"
  },
  {
    name: "浪漫花海",
    url: "https://your-image-source.com/wallpaper3.jpg"
  },
  {
    name: "霓虹城市",
    url: "https://your-image-source.com/wallpaper4.jpg"
  },
  {
    name: "清晨草原",
    url: "https://your-image-source.com/wallpaper5.jpg"
  },
  {
    name: "极光天际",
    url: "https://your-image-source.com/wallpaper6.jpg"
  }
];

let currentIndex = 0;
let intervalId = null;

const mainImage = document.getElementById("main-image");
const imageName = document.getElementById("image-name");
const resolution = document.getElementById("resolution");
const downloadBtn = document.getElementById("download-btn");
const thumbnailsContainer = document.getElementById("thumbnails-container");

function initializeImages() {
  images.forEach((img) => {
    img.thumbnail = img.url;
  });

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

initializeImages();
