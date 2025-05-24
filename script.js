// 壁纸数据（可扩展为 JSON 或 API 加载）
const wallpapers = [
  { name: "冷艳少女", url: "https://api.18xo.eu.org/file/1747823385782_43634.png" },
  { name: "海上 船 可爱女生长发", url: "https://api.18xo.eu.org/file/1748052035636_海上 船 可爱女生长发 4K壁纸全屏 3840x2400_彼岸图网.jpg" },
  { name: "赛博朋克风格 奇幻少女", url: "https://api.18xo.eu.org/file/1748052043512_赛博朋克风格奇幻少女 集原美电脑4k壁纸3840x2160_彼岸图网.jpg" },
  { name: "报纸墙 可爱漂亮养眼美女", url: "https://api.18xo.eu.org/file/1748052034629_报纸墙 可爱漂亮养眼美女 4k壁纸 3840x2160_彼岸图网.jpg" },
  { name: "漂亮少数民族美女", url: "https://api.18xo.eu.org/file/1748052162857_漂亮少数民族美女4k壁纸_彼岸图网.jpg" }
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
