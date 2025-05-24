const images = [
  {
    name: "动漫美少女",
    url: "https://api.18xo.eu.org/file/1748049503921_【哲风壁纸】二次元角色-动漫美少女.png"
  },
  {
    name: "AI 少女",
    url: "https://api.18xo.eu.org/file/1748049504855_【哲风壁纸】少女-少女壁纸.png"
  },
  {
    name: "二次元 动漫少女",
    url: "https://api.18xo.eu.org/file/1748049505648_【哲风壁纸】二次元-动漫角色.png"
  },
  {
    name: "二次元 动漫角色",
    url: "https://api.18xo.eu.org/file/1748049502491_【哲风壁纸】二次元动漫-动漫角色.png"
  },
  {
    name: "二次元 少女",
    url: "https://api.18xo.eu.org/file/1748049497652_【哲风壁纸】二次元-动漫风格.png"
  },
  {
    name: "二次元 少女插画",
    url: "https://api.18xo.eu.org/file/1748049498649_【哲风壁纸】二次元-少女插画.png"
  },
  {
    name: "动漫美女 性感时尚",
    url: "https://api.18xo.eu.org/file/1748049492966_【哲风壁纸】动漫美女-性感时尚.png"
  },
  {
    name: "妖艳 少女 未来感",
    url: "https://api.18xo.eu.org/file/1748049497127_【哲风壁纸】妖艳-少女-未来感.png"
  },
  {
    name: "AI 美女",
    url: "https://api.18xo.eu.org/file/1748049491071_【哲风壁纸】AI-AI美女.png"
  },
  {
    name: "冷艳少女",
    url: "https://api.18xo.eu.org/file/1747823385782_43634.png"
  },
  {
    name: "成熟美女",
    url: "https://api.18xo.eu.org/file/1747823210434_43352.png"
  },
  {
    name: "八重神子",
    url: "https://api.18xo.eu.org/file/1748010033600_【哲风壁纸】八重神子-原神-海滩.png"
  },
  {
    name: "坐姿女孩",
    url: "https://api.18xo.eu.org/file/1748026924484_【哲风壁纸】坐姿女孩-女孩.png"
  },
  {
    name: "室内 少女",
    url: "https://api.18xo.eu.org/file/1748026924383_【哲风壁纸】休闲-室内-少女.png"
  },
  {
    name: "居家氛围 极品",
    url: "https://api.18xo.eu.org/file/1748026918485_【哲风壁纸】居家氛围-极品.png"
  },
  {
    name: "室内摄影 极品",
    url: "https://api.18xo.eu.org/file/1748026909774_【哲风壁纸】室内摄影-极品.png"
  },
  {
    name: "唯美 梦幻 绯色",
    url: "https://api.18xo.eu.org/file/1748026917119_【哲风壁纸】唯美-梦幻-绯色.png"
  },
  {
    name: "休憩时光 卧室 女孩",
    url: "https://api.18xo.eu.org/file/1748026911331_【哲风壁纸】休憩时光-卧室-女孩.png"
  },
  {
    name: "少女神子",
    url: "https://api.18xo.eu.org/file/1748010034219_【哲风壁纸】少女-氛围-神子.png"
  },
  {
    name: "比基尼美女",
    url: "https://api.18xo.eu.org/file/1748010037519_【哲风壁纸】性感美女-比基尼美女.png"
  },
  {
    name: "性感少女",
    url: "https://api.18xo.eu.org/file/1748010055601_【哲风壁纸】室内场景-性感造型.png"
  },
  {
    name: "休闲少女",
    url: "https://api.18xo.eu.org/file/1748010042044_【哲风壁纸】休闲姿态-室内场景.png"
  },
  {
    name: "听歌女孩",
    url: "https://api.18xo.eu.org/file/1748010054091_【哲风壁纸】听歌女孩-听歌的女孩.png"
  },
  {
    name: "二次元美女",
    url: "https://api.18xo.eu.org/file/1748010050594_【哲风壁纸】二次元美女-夜景人像.png"
  },
  {
    name: "夜景少女",
    url: "https://api.18xo.eu.org/file/1748010047267_【哲风壁纸】夜景背景-少女壁纸.png"
  },
  {
    name: "休闲美女",
    url: "https://api.18xo.eu.org/file/1748010050940_【哲风壁纸】休闲美女-圣诞树.png"
  },
  {
    name: "室内少女",
    url: "https://api.18xo.eu.org/file/1748010035613_【哲风壁纸】休闲-室内-少女.png"
  },{
    name: "动漫居家",
    url: "https://api.18xo.eu.org/file/1748010051760_【哲风壁纸】动漫-动漫壁纸-居家.png"
  },
  {
    name: "休憩少女",
    url: "https://api.18xo.eu.org/file/1748010056578_【哲风壁纸】休憩-动漫-动漫壁纸.png"
  },
  {
    name: "动漫少女",
    url: "https://api.18xo.eu.org/file/1748010065590_【哲风壁纸】AI-AI少女.png"
  },
  {
    name: "动漫夏日",
    url: "https://api.18xo.eu.org/file/1748010036566_【哲风壁纸】动漫-动漫壁纸-夏日.png"
  },
  {
    name: "人像美女",
    url: "https://api.18xo.eu.org/file/1747824025883_43354.png"
  },
  {
    name: "杨超越",
    url: "https://api.18xo.eu.org/file/1747823856790_33256.png"
  },
  {
    name: "鞠婧祎",
    url: "https://api.18xo.eu.org/file/1747824026336_42083.png"
  },
  {
    name: "冯宝宝",
    url: "https://api.18xo.eu.org/file/1747823942632_34935.png"
  },
{
    name: "动漫少女",
    url: "https://api.18xo.eu.org/file/1747823922814_33881.png"
  },
{
    name: "动漫少女",
    url: "https://api.18xo.eu.org/file/1747824028829_36379.png"
  },
{
    name: "古风美女",
    url: "https://api.18xo.eu.org/file/1747824133424_44462.png"
  },
{
    name: "Cosplay少女",
    url: "https://api.18xo.eu.org/file/1747823758453_44997.png"
  },
{
    name: "Cosplay少女",
    url: "https://api.18xo.eu.org/file/1747823672938_44899.png"
  },
{
    name: "Cosplay少女",
    url: "https://api.18xo.eu.org/file/1747823522034_43840.png"
  },
{
    name: "美少女",
    url: "https://api.18xo.eu.org/file/1747823717414_44776.png"
  },
{
    name: "古装美女",
    url: "https://api.18xo.eu.org/file/1747823553014_43839.png"
  },
{
    name: "居家美女",
    url: "https://api.18xo.eu.org/file/1747823807919_45159.png"
  },
{
    name: "美少女",
    url: "https://api.18xo.eu.org/file/1747823074073_42245.png"
  },
{
    name: "天台少女",
    url: "https://api.18xo.eu.org/file/1747823054267_42626.png"
  },
{
    name: "居家少女",
    url: "https://api.18xo.eu.org/file/1747823329166_43447.png"
  },
{
    name: "Cosplay 少女",
    url: "https://api.18xo.eu.org/file/1747808247900_47770.png"
  },
{
    name: "阳光 少女",
    url: "https://api.18xo.eu.org/file/1747808150795_47710.png"
  },
{
    name: "Cosplay 少女",
    url: "https://api.18xo.eu.org/file/1747808236682_48177.png"
  },
  {
    name: "镜子 美女",
    url: "https://api.18xo.eu.org/file/1747808223400_45646.png"
  },
  {
    name: "捆绑 少女",
    url: "https://api.18xo.eu.org/file/1747808110238_45746.png"
  },{
    name: "Cosplay 少女",
    url: "https://api.18xo.eu.org/file/1747808131652_45862.png"
  },
  {
    name: "甜美 少女",
    url: "https://api.18xo.eu.org/file/1747808148951_48482.png"
  },
  {
    name: "古风 少女",
    url: "https://api.18xo.eu.org/file/1747807976891_47792.png"
  },
  {
    name: "网球 少女",
    url: "https://api.18xo.eu.org/file/1747808009283_48772.png"
  },
  {
    name: "朋克 少女",
    url: "https://api.18xo.eu.org/file/1747807966399_47540.png"
  },
  {
    name: "Cosplay 少女",
    url: "https://api.18xo.eu.org/file/1747807809032_46845.png"
  },
  {
    name: "居家 少女",
    url: "https://api.18xo.eu.org/file/1747807867666_46213.png"
  },
  {
    name: "短发 美少女",
    url: "https://api.18xo.eu.org/file/1747807618152_46197.png"
  },
  {
    name: "Cosplay 少女",
    url: "https://api.18xo.eu.org/file/1747807676803_46844.png"
  },
  {
    name: "狼耳 少女",
    url: "https://api.18xo.eu.org/file/1747807481435_37311.png"
  },
  {
    name: "机车 少女",
    url: "https://api.18xo.eu.org/file/1747807488503_47771.png"
  },
  {
    name: "神里绫华",
    url: "https://api.18xo.eu.org/file/1747555361809_神里绫华_书_原神4k高清壁纸_彼岸图网.jpg"
  },
  {
    name: "优雅女性",
    url: "https://api.18xo.eu.org/file/1748026928979_【哲风壁纸】优雅女性-室内环境.png"
  },
  {
    name: "动漫风格女孩",
    url: "https://api.18xo.eu.org/file/1748026924046_【哲风壁纸】动漫风格女孩-卧室背景画面.png"
  },
  {
    name: "MM 少女",
    url: "https://api.18xo.eu.org/file/1748026910681_【哲风壁纸】MM-少女-少女壁纸.png"
  },
  {
    name: "佳人 古风 唯美",
    url: "https://api.18xo.eu.org/file/1748026907970_【哲风壁纸】佳人-古风-唯美形象.png"
  },
  {
    name: "动漫 美少女",
    url: "https://api.18xo.eu.org/file/1747807444328_37020.png"
  },
  {
    name: "室内 少女",
    url: "https://api.18xo.eu.org/file/1747807573138_45974.png"
  },
  {
    name: "气质 美女",
    url: "https://api.18xo.eu.org/file/1747555411808_蓝色眼睛气质美女4K动漫壁纸3840x2160_彼岸图网.jpg"
  },{
    name: "仙侠 凌仙",
    url: "https://api.18xo.eu.org/file/1747497529196_仙侠凌仙 紫色长卷发美女 古风古典 4K壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "房间 金克斯",
    url: "https://api.18xo.eu.org/file/1747554802383_房间 金克丝4K动漫壁纸_彼岸图网.jpg"
  },
  {
    name: "白色 长发 女孩",
    url: "https://api.18xo.eu.org/file/1745299472396_黑色t恤女孩_报纸墙_白色长发_3440_1440带鱼屏壁纸_彼岸图网.jpg"
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
