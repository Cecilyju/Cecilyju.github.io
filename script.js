// 壁纸数据（可扩展为 JSON 或 API 加载）
const wallpapers = [
  { name: "冷艳少女", url: "https://api.18xo.eu.org/file/1747823385782_43634.png" },
  { name: "海上 船 可爱女生长发", url: "https://api.18xo.eu.org/file/1748052035636_海上 船 可爱女生长发 4K壁纸全屏 3840x2400_彼岸图网.jpg" },
  { name: "海边晨曦", url: "wallpapers/beach.jpg" },
  { name: "城市夜景", url: "wallpapers/city.jpg" },
  { name: "银河星空", url: "wallpapers/milkyway.jpg" }
];

const mainImage = document.getElementById("main-image");
const imageName = document.getElementById("image-name");
const resolution = document.getElementById("resolution");
const downloadBtn = document.getElementById("download-btn");
const thumbnailsContainer = document.getElementById("thumbnails-container");

// 加载主图
function loadMainImage(wallpaper) {
  mainImage.src = wallpaper.url;
  imageName.textContent = wallpaper.name;
  resolution.textContent = "分辨率检测中...";
  downloadBtn.href = wallpaper.url;

  mainImage.onload = () => {
    resolution.textContent = `${mainImage.naturalWidth} × ${mainImage.naturalHeight}`;
  };
}

// 加载缩略图
function renderThumbnails() {
  thumbnailsContainer.innerHTML = "";
  wallpapers.forEach((wallpaper, index) => {
    const thumb = document.createElement("img");
    thumb.src = wallpaper.url;
    thumb.alt = wallpaper.name;
    thumb.title = wallpaper.name;

    thumb.addEventListener("click", () => {
      loadMainImage(wallpapers[index]);
    });

    thumbnailsContainer.appendChild(thumb);
  });
}

// 初始化
renderThumbnails();
loadMainImage(wallpapers[0]);
