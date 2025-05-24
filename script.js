function buildThumbnails() {
  const thumbBox = document.getElementById('thumbnails');
  imageList.forEach(img => {
    const thumb = new Image();
    thumb.src = img.url;
    thumb.title = img.name;
    thumb.loading = "lazy";
    thumb.style.objectFit = "cover";
    thumb.width = 160;
    thumb.height = 100;

    // 图片加载失败时使用默认图
    thumb.onerror = () => {
      thumb.src = "assets/placeholder.png";
    };

    // 点击放大，双击下载
    thumb.onclick = () => openPreview(img.url);
    thumb.ondblclick = () => window.open(img.url, "_blank");

    thumbBox.appendChild(thumb);
  });
}
