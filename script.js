document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery');
    const loadingIndicator = document.getElementById('loading');

    // 异步获取并加载图片数据
    async function loadWallpapers() {
        try {
            // 通过 fetch API 读取本地的 images.json 文件
            const response = await fetch('images.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const wallpapers = await response.json();

            // 隐藏加载动画
            loadingIndicator.style.display = 'none';

            // 遍历 JSON 数据，为每张壁纸创建卡片
            wallpapers.forEach(wallpaper => {
                // 1. 创建卡片容器
                const card = document.createElement('div');
                card.className = 'wallpaper-card';

                // 2. 创建图片
                const img = document.createElement('img');
                img.src = wallpaper.url;
                img.alt = wallpaper.name;
                img.className = 'wallpaper-image';
                // 图片加载失败时的处理
                img.onerror = () => {
                    img.alt = '图片加载失败';
                    img.src = 'https://via.placeholder.com/400x250/text=Image+Not+Found'; // 占位图
                };

                // 3. 创建信息区域
                const infoDiv = document.createElement('div');
                infoDiv.className = 'wallpaper-info';

                // 4. 创建壁纸名称
                const name = document.createElement('h3');
                name.className = 'wallpaper-name';
                name.textContent = wallpaper.name;

                // 5. 创建下载按钮
                const downloadBtn = document.createElement('a');
                downloadBtn.className = 'download-btn';
                downloadBtn.textContent = '下载';
                downloadBtn.href = wallpaper.url;
                downloadBtn.setAttribute('download', wallpaper.name + '.jpg'); // 设置下载文件名
                downloadBtn.setAttribute('target', '_blank'); // 新标签页打开以防浏览器直接导航

                // 6. 组装卡片
                infoDiv.appendChild(name);
                infoDiv.appendChild(downloadBtn);
                card.appendChild(img);
                card.appendChild(infoDiv);

                // 7. 将卡片添加到画廊容器
                galleryContainer.appendChild(card);
            });

        } catch (error) {
            console.error('无法加载壁纸数据:', error);
            loadingIndicator.innerHTML = '<p>抱歉，加载壁纸失败。请检查 `images.json` 文件是否存在且格式正确。</p>';
        }
    }

    // 调用函数，开始加载
    loadWallpapers();
});

