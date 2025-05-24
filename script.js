let wallpapers = [];
let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const imageName = document.getElementById("image-name");
const resolution = document.getElementById("resolution");
const downloadBtn = document.getElementById("download-btn");
const thumbnailsContainer = document.getElementById("thumbnails-container");

// 你的图床 JSON API 地址（请替换为你自己的）
const API_URL = "https://api.18xo.eu.org/random?type=img";

// 加载主图
function loadMainImage(index) {
  const wallpaper = wallpapers[index];
  currentIndex = index;
  mainImage.src = wallpaper.url;
  imageName.textContent = wallpaper.name;
  resolution.textContent = "分辨率检测中...";
  downloadBtn.href = wallpaper.url;

  mainImage.onload = () => {
    resolution.textContent = `${mainImage.naturalWidth} × ${mainImage.naturalHeight}`;
  };
}

// 自动轮播
function startAutoSlideshow(interval = 6000) {
  setInterval(() => {
    if (wallpapers.length === 0) return;
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * wallpapers.length);
    } while (nextIndex === currentIndex);
    loadMainImage(nextIndex);
  }, interval);
}

// 渲染缩略图
function renderThumbnails() {
  thumbnailsContainer.innerHTML = "";
  wallpapers.forEach((wallpaper, index) => {
    const thumb = document.createElement("img");
    thumb.src = wallpaper.url;
    thumb.alt = wallpaper.name;
    thumb.title = wallpaper.name;

    // 单击切换
    thumb.addEventListener("click", () => {
      loadMainImage(index);
    });

    // 双击下载
    thumb.addEventListener("dblclick", () => {
      const link = document.createElement("a");
      link.href = wallpaper.url;
      link.download = wallpaper.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    thumbnailsContainer.appendChild(thumb);
  });
}

// 主图点击下载
mainImage.addEventListener("click", () => {
  downloadBtn.click();
});

// 加载壁纸数据
async function fetchWallpapers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("加载失败");
    wallpapers = await response.json();
    if (wallpapers.length > 0) {
      renderThumbnails();
      loadMainImage(0);
      startAutoSlideshow();
    } else {
      imageName.textContent = "未找到壁纸数据";
    }
  } catch (error) {
    imageName.textContent = "加载壁纸失败";
    console.error(error);
  }
}

// 初始化
fetchWallpapers();
