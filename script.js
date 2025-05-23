document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery');
    const loadingIndicator = document.getElementById('loading');
    const filterContainer = document.getElementById('filter-container');
    
    // 我们将所有壁纸数据存储在这里，避免重复加载
    let allWallpapers = [];

    // 函数：渲染壁纸画廊
    function renderWallpapers(filter = 'all') {
        // 1. 清空现有画廊
        galleryContainer.innerHTML = '';

        // 2. 根据 filter 筛选壁纸
        const filteredWallpapers = filter === 'all' 
            ? allWallpapers 
            : allWallpapers.filter(wallpaper => wallpaper.category === filter);

        // 如果筛选结果为空，显示提示信息
        if (filteredWallpapers.length === 0) {
            galleryContainer.innerHTML = '<p style="text-align: center; color: #666;">这个分类下没有壁纸。</p>';
            return;
        }

        // 3. 遍历筛选后的壁纸并创建卡片
        filteredWallpapers.forEach(wallpaper => {
            const card = document.createElement('div');
            card.className = 'wallpaper-card';

            const img = document.createElement('img');
            img.src = wallpaper.url;
            img.alt = wallpaper.name;
            img.className = 'wallpaper-image';
            img.onerror = () => {
                img.alt = '图片加载失败';
                img.src = 'https://via.placeholder.com/400x250/text=Image+Not+Found';
            };

            const infoDiv = document.createElement('div');
            infoDiv.className = 'wallpaper-info';

            const name = document.createElement('h3');
            name.className = 'wallpaper-name';
            name.textContent = wallpaper.name;

            const downloadBtn = document.createElement('a');
            downloadBtn.className = 'download-btn';
            downloadBtn.textContent = '下载';
            downloadBtn.href = wallpaper.url;
            downloadBtn.setAttribute('download', wallpaper.name + '.jpg');
            downloadBtn.setAttribute('target', '_blank');

            infoDiv.appendChild(name);
            infoDiv.appendChild(downloadBtn);
            card.appendChild(img);
            card.appendChild(infoDiv);
            galleryContainer.appendChild(card);
        });
    }

    // 函数：创建筛选按钮
    function createFilterButtons() {
        // 1. 从所有壁纸中提取唯一的分类
        const categories = ['all', ...new Set(allWallpapers.map(w => w.category))];

        // 2. 为每个分类创建按钮
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.textContent = category === 'all' ? '全部' : category;
            button.dataset.category = category; // 使用 data-* 属性存储分类名

            if (category === 'all') {
                button.classList.add('active'); // 默认激活 "全部"
            }

            // 3. 添加点击事件监听器
            button.addEventListener('click', () => {
                // 移除所有按钮的 'active' class
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                // 给当前点击的按钮添加 'active' class
                button.classList.add('active');
                // 根据点击的分类重新渲染画廊
                renderWallpapers(category);
            });

            filterContainer.appendChild(button);
        });
    }

    // 主函数：异步获取并初始化页面
    async function initializePage() {
        try {
            const response = await fetch('images.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            allWallpapers = await response.json();
            
            loadingIndicator.style.display = 'none';

            // 数据加载成功后，创建筛选按钮并渲染全部壁纸
            createFilterButtons();
            renderWallpapers('all');

        } catch (error) {
            console.error('无法加载壁纸数据:', error);
            loadingIndicator.innerHTML = '<p>抱歉，加载壁纸失败。请检查 `images.json` 文件是否存在且格式正确。</p>';
        }
    }

    // 开始执行
    initializePage();
});
