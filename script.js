// 壁纸列表（使用外链图源）
const wallpapers = [
  {
    name: "冷艳少女",
    url: "https://api.18xo.eu.org/file/1747823385782_43634.png"
  },
  {
    name: "二次元 游戏 原神",
    url: "https://api.18xo.eu.org/file/1748087202211_46691.png"
  },
  {
    name: "居家 清纯 女孩 美女",
    url: "https://api.18xo.eu.org/file/1748087201489_46578.png"
  },
  {
    name: "动漫阿尼亚 4k电脑 壁纸",
    url: "https://api.18xo.eu.org/file/1745299353122_动漫阿尼亚4k电脑壁纸_彼岸图网.jpg"
  },
  {
    name: "古风 蓝衣少女 旗袍 4K壁纸",
    url: "https://api.18xo.eu.org/file/1745299346929_古风蓝衣少女4K壁纸3840_2400_彼岸图网.jpg"
  },
  {
    name: "初音未来 MIKU 二次元",
    url: "https://api.18xo.eu.org/file/1748087214237_47124.png"
  },
  {
    name: "二次元 粉色 恶魔翅膀 美少女",
    url: "https://api.18xo.eu.org/file/1748087197998_46950.png"
  },
  {
    name: "二次元 长剑纹身女孩",
    url: "https://api.18xo.eu.org/file/1748087206026_46853.png"
  },
  {
    name: "二次元 粉色长发 美少女",
    url: "https://api.18xo.eu.org/file/1748087199998_46851.png"
  },
  {
    name: "二次元 朋克风 初音未来",
    url: "https://api.18xo.eu.org/file/1748087198417_47097.png"
  },
  {
    name: "二次元 居家 清纯 少女",
    url: "https://api.18xo.eu.org/file/1748087217901_47521.png"
  },
  {
    name: "二次元 动漫女孩 少女",
    url: "https://api.18xo.eu.org/file/1748087216146_47520.png"
  },
  {
    name: "二次元 动漫美少女 女孩 4K",
    url: "https://api.18xo.eu.org/file/1748087221167_47212.png"
  },
  {
    name: "二次元少女 雨伞女孩",
    url: "https://api.18xo.eu.org/file/1748087211976_47729.png"
  },
  {
    name: "二次元美少女 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748087225250_47781.png"
  },
  {
    name: "二次元 性感美女 红唇",
    url: "https://api.18xo.eu.org/file/1748087217869_47541.png"
  },
  {
    name: "二次元 性感美少女 居家",
    url: "https://api.18xo.eu.org/file/1748087221544_47530.png"
  },
  {
    name: "二次元 气质 美女",
    url: "https://api.18xo.eu.org/file/1748087219342_47526.png"
  },
  {
    name: "二次元 女鬼 美少女",
    url: "https://api.18xo.eu.org/file/1748087211638_47522.png"
  },
  {
    name: "二次元 星星眼 少女",
    url: "https://api.18xo.eu.org/file/1748087224315_48400.png"
  },
  {
    name: "二次元 朋克风 少女",
    url: "https://api.18xo.eu.org/file/1748087225507_48399.png"
  },
  {
    name: "二次元 被单 少女",
    url: "https://api.18xo.eu.org/file/1748087217578_48173.png"
  },
  {
    name: "二次元 银发少女 女孩",
    url: "https://api.18xo.eu.org/file/1748087218120_47789.png"
  },
  {
    name: "居家 女孩 黑丝",
    url: "https://api.18xo.eu.org/file/1748087231684_48894.png"
  },
  {
    name: "沙漠 女孩 玫瑰",
    url: "https://api.18xo.eu.org/file/1748087227923_48603.png"
  },
  {
    name: "报纸图 性感美女 4K",
    url: "https://api.18xo.eu.org/file/1748087233975_47783.png"
  },
  {
    name: "鞠婧祎 4K电脑壁纸",
    url: "https://api.18xo.eu.org/file/1748087226093_46585.png"
  },
  {
    name: "地铁 女孩 长发",
    url: "https://api.18xo.eu.org/file/1748087224930_46237.png"
  },
  {
    name: "二次元 少女 兽娘",
    url: "https://api.18xo.eu.org/file/1748087229477_48901.png"
  },
  {
    name: "二次元 兽耳美女",
    url: "https://api.18xo.eu.org/file/1748087222356_48891.png"
  },
  {
    name: "美女孩 短裙 白色",
    url: "https://api.18xo.eu.org/file/1748087230259_49186.png"
  },
  {
    name: "书桌 睡觉 女孩",
    url: "https://api.18xo.eu.org/file/1748087232141_49187.png"
  },
  {
    name: "二次元 长发 丰满",
    url: "https://api.18xo.eu.org/file/1748087233934_49170.png"
  },
  {
    name: "鞠婧祎 黑色 裙子 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748087230575_49169.png"
  },
  {
    name: "Cosplay 女孩 修女",
    url: "https://api.18xo.eu.org/file/1748087234876_48985.png"
  },
  {
    name: "美女 雨伞",
    url: "https://api.18xo.eu.org/file/1748087244522_49236.png"
  },
  {
    name: "文字 壁纸 4K",
    url: "https://api.18xo.eu.org/file/1748087240730_49243.png"
  },
  {
    name: "女孩 河边 月亮",
    url: "https://api.18xo.eu.org/file/1748087354738_46204.png"
  },
  {
    name: "花朵 太阳 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748087360724_46199.png"
  },
  {
    name: "Cosplay 女孩 蓝色",
    url: "https://api.18xo.eu.org/file/1748087351899_49237.png"
  },
  {
    name: "二次元 动漫犬夜叉",
    url: "https://api.18xo.eu.org/file/1748087358642_45967.png"
  },
  {
    name: "居家 4K壁纸 二次元 美少女",
    url: "https://api.18xo.eu.org/file/1748087269206_49180.png"
  },
  {
    name: "二次元 少女 帽子女孩",
    url: "https://api.18xo.eu.org/file/1748087274428_49128.png"
  },
  {
    name: "MIKU 二次元 初音未来",
    url: "https://api.18xo.eu.org/file/1748087277925_49185.png"
  },
  {
    name: "二次元 居家女孩 少女",
    url: "https://api.18xo.eu.org/file/1748087361946_49184.png"
  },
  {
    name: "Cosplay 蓝发少女",
    url: "https://api.18xo.eu.org/file/1748087360011_48773.jpg"
  },
  {
    name: "4K壁纸 窗户 女孩",
    url: "https://api.18xo.eu.org/file/1748087365121_48190.png"
  },
  {
    name: "跳舞 女孩",
    url: "https://api.18xo.eu.org/file/1748087261887_45882.png"
  },
  {
    name: "鞠婧祎 美女 4K电脑 壁纸",
    url: "https://api.18xo.eu.org/file/1748087366283_47347.png"
  },
  {
    name: "二次元 动漫你豆子",
    url: "https://api.18xo.eu.org/file/1748087258466_48185.png"
  },
  {
    name: "二次元 女孩 草帽",
    url: "https://api.18xo.eu.org/file/1748087265216_48183.png"
  },
  {
    name: "二次元 少女 动漫阿尼亚",
    url: "https://api.18xo.eu.org/file/1748087365180_47701.png"
  },
  {
    name: "二次元 女孩 性感美女",
    url: "https://api.18xo.eu.org/file/1748087257465_47394.png"
  },
  {
    name: "二次元 蓝发美少女",
    url: "https://api.18xo.eu.org/file/1748087364516_47381.png"
  },
  {
    name: "二次元 持剑 少女 纹身",
    url: "https://api.18xo.eu.org/file/1748087356541_47360.png"
  },
  {
    name: "二次元 持剑 帅气 少女",
    url: "https://api.18xo.eu.org/file/1748087256473_47352.png"
  },
  {
    name: "二次元 居家 美少女 玩偶",
    url: "https://api.18xo.eu.org/file/1748087249686_47350.png"
  },
  {
    name: "初音未来 长发 MiKu 二次元",
    url: "https://api.18xo.eu.org/file/1748087352956_49246.png"
  },
  {
    name: "二次元 女孩 4K壁纸 少女",
    url: "https://api.18xo.eu.org/file/1748087243054_47348.png"
  },
  {
    name: "居家 美女 沙发",
    url: "https://api.18xo.eu.org/file/1748087354475_49238.png"
  },
  {
    name: "优雅长裙 美女 杨幂 4K",
    url: "https://api.18xo.eu.org/file/1748051997990_优雅长裙美女杨幂4K手机壁纸图片_彼岸图网.jpg"
  },
  {
    name: "希里 侧脸 游戏美女",
    url: "https://api.18xo.eu.org/file/1748051999245_希里 侧脸 游戏美女 4K壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "黑色套装 美女 孔雪儿",
    url: "https://api.18xo.eu.org/file/1748052000699_黑色套装美女孔雪儿 4K壁纸 3840x2400_彼岸图网.jpg"
  },
  {
    name: "刘亦菲 紫色眼睛 美女",
    url: "https://api.18xo.eu.org/file/1748051989961_刘亦菲紫色眼睛美女4K手机壁纸图片_彼岸图网.jpg"
  },
  {
    name: "孔雪儿 4K手机 壁纸",
    url: "https://api.18xo.eu.org/file/1748051994104_孔雪儿4K手机壁纸_彼岸图网.jpg"
  },
  {
    name: "孔雪儿 4K美女 手机壁纸",
    url: "https://api.18xo.eu.org/file/1748051995507_孔雪儿4K美女手机壁纸图片_彼岸图网.jpg"
  },
  {
    name: "古风美女 刘些宁 花 4K手机",
    url: "https://api.18xo.eu.org/file/1748051986357_古风美女 刘些宁 花 4K手机壁纸_彼岸图网.jpg"
  },
  {
    name: "金克丝 蓝色双马尾辫 报纸墙",
    url: "https://api.18xo.eu.org/file/1748051991364_金克丝 蓝色双马尾辫 报纸墙 金克斯电脑壁纸4k超清_彼岸图网.jpg"
  },
  {
    name: "黑色外套 美女孟子义 4K手机壁纸",
    url: "https://api.18xo.eu.org/file/1748051991057_黑色外套美女孟子义4K手机壁纸全屏_彼岸图网.jpg"
  },
  {
    name: "敖闰 唯美高清 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748051983478_敖闰唯美高清4K壁纸3840x2160_彼岸图网.jpg"
  },
  {
    name: "房间 阳光 神里绫华",
    url: "https://api.18xo.eu.org/file/1748051984410_房间 阳光 神里绫华 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "帅气 金克丝",
    url: "https://api.18xo.eu.org/file/1748051980132_帅气金克丝 3440x1440超清带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "春天小黄花 清新美女 唯美闭眼 刘些宁",
    url: "https://api.18xo.eu.org/file/1748077458007_春天小黄花 清新美女 唯美闭眼 刘些宁4K壁纸3840x2400_彼岸图网.jpg"
  },
  {
    name: "居家 阳光 可爱小女孩 神里绫华",
    url: "https://api.18xo.eu.org/file/1748077448070_居家 阳光 可爱小女孩 神里绫华 4K电脑壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "动漫女孩 西服 领带 日向雏田",
    url: "https://api.18xo.eu.org/file/1748077446443_动漫女孩 西服 领带 日向雏田 4K电脑壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "樱花 古风美女 刘些宁 4K电脑壁纸",
    url: "https://api.18xo.eu.org/file/1748077449280_樱花 古风美女 刘些宁 4K电脑壁纸 3840x2400_彼岸图网.jpg"
  },
  {
    name: "芙宁娜 一起去海边 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748077448265_芙宁娜 一起去海边 4K壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "瑶-大耳狗之梦 王者荣耀 5K壁纸",
    url: "https://api.18xo.eu.org/file/1748077440732_瑶-大耳狗之梦 王者荣耀 5K壁纸_彼岸图网.jpg"
  },
  {
    name: "原神胡桃 小幽灵 蝴蝶 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748077439249_原神胡桃 小幽灵 蝴蝶 4K壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "海上 船 可爱女生长发",
    url: "https://api.18xo.eu.org/file/1748052035636_海上 船 可爱女生长发 4K壁纸全屏 3840x2400_彼岸图网.jpg"
  },
  {
    name: "赛博朋克风格 奇幻少女",
    url: "https://api.18xo.eu.org/file/1748052043512_赛博朋克风格奇幻少女 集原美电脑4k壁纸3840x2160_彼岸图网.jpg"
  },
  {
    name: "报纸墙 可爱漂亮养眼美女",
    url: "https://api.18xo.eu.org/file/1748052034629_报纸墙 可爱漂亮养眼美女 4k壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "漂亮少数民族美女",
    url: "https://api.18xo.eu.org/file/1748052162857_漂亮少数民族美女4k壁纸_彼岸图网.jpg"
  },
  {
    name: "姜泰莉",
    url: "https://api.18xo.eu.org/file/1748052035731_姜泰莉4k壁纸3840x2160_彼岸图网.jpg"
  },
  {
    name: "心态好了人生就顺了 哪吒 打工人",
    url: "https://api.18xo.eu.org/file/1748052164149_心态好了人生就顺了 哪吒 打工人 4K壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "鞠婧祎 粉色柔和背景 岩石",
    url: "https://api.18xo.eu.org/file/1748052160062_鞠婧祎 粉色柔和背景 岩石 3440x1440美女带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "miku 初音未来海报 报纸墙",
    url: "https://api.18xo.eu.org/file/1748052023934_miku 初音未来海报 报纸墙 3440x1440带鱼屏动漫高清壁纸_彼岸图网.jpg"
  },
  {
    name: "动漫女孩脸 大眼睛",
    url: "https://api.18xo.eu.org/file/1748052157387_动漫女孩脸 大眼睛 4K壁纸 3840x2400_彼岸图网.jpg"
  },
  {
    name: "《崩坏3》琪亚娜 报纸墙",
    url: "https://api.18xo.eu.org/file/1748052020045_《崩坏3》琪亚娜 报纸墙 4K壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "唯美古风女子 红衣 红花",
    url: "https://api.18xo.eu.org/file/1748052021120_唯美古风女子 红衣 红花 4K动漫壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "七日世界 Once Human",
    url: "https://api.18xo.eu.org/file/1748052025141_《七日世界 Once Human》游戏美女 4k手机壁纸竖屏_彼岸图网.jpg"
  },
  {
    name: "明日香 红色机械服 4k手机",
    url: "https://api.18xo.eu.org/file/1748052023642_明日香 红色机械服4k手机壁纸竖屏_彼岸图网.jpg"
  },
  {
    name: "武侠风 古装美女手持宝剑 雨中 4K手机",
    url: "https://api.18xo.eu.org/file/1748052020110_武侠风 古装美女手持宝剑 雨中 4K手机壁纸全屏_彼岸图网.jpg"
  },
  {
    name: "初音未来 穿出电脑屏幕 4K动漫手机",
    url: "https://api.18xo.eu.org/file/1748052018856_初音未来 穿出电脑屏幕 4K动漫手机壁纸竖屏_彼岸图网.jpg"
  },
  {
    name: "刘亦菲领奖现场",
    url: "https://api.18xo.eu.org/file/1748052018576_刘亦菲领奖现场高清图3440x1440带鱼屏美女壁纸_彼岸图网.jpg"
  },
  {
    name: "伊蕾娜 闲憩微息 4k手机",
    url: "https://api.18xo.eu.org/file/1748052020418_伊蕾娜 闲憩微息4k手机壁纸竖屏_彼岸图网.jpg"
  },
  {
    name: "不良人九幽玄天 萤勾 6K高清",
    url: "https://api.18xo.eu.org/file/1748052012905_不良人九幽玄天 萤勾 6K高清壁纸_彼岸图网.jpg"
  },
  {
    name: "可爱金克丝 长辫子 卧室 枕头 星星 4k手机",
    url: "https://api.18xo.eu.org/file/1748052014827_可爱金克丝 长辫子 卧室 枕头 星星 4k手机壁纸竖屏_彼岸图网.jpg"
  },
  {
    name: "金克丝 蓝色辫子 领带 4k手机",
    url: "https://api.18xo.eu.org/file/1748052008593_金克丝 蓝色辫子 领带 4k手机壁纸竖屏_彼岸图网.jpg"
  },
  {
    name: "金克丝 蓝色辫子 书本",
    url: "https://api.18xo.eu.org/file/1748052015549_金克丝 蓝色辫子 书本 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "古风美女 红衣红花 4K手机",
    url: "https://api.18xo.eu.org/file/1748052013769_古风美女红衣红花4K手机壁纸全屏_彼岸图网.jpg"
  },
  {
    name: "刻晴 简约 桌面",
    url: "https://api.18xo.eu.org/file/1748052014523_刻晴 简约 桌面 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "5个可爱哆啦a梦",
    url: "https://api.18xo.eu.org/file/1748052008822_5个可爱哆啦a梦3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "海绵宝宝和派大星 背影 门 大海",
    url: "https://api.18xo.eu.org/file/1748052010490_海绵宝宝和派大星 背影 门 大海 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "旅行可爱美女 虞书欣",
    url: "https://api.18xo.eu.org/file/1748052004144_旅行可爱美女虞书欣4k壁纸3840x2400_彼岸图网.jpg"
  },
  {
    name: "报纸墙少女 裙子 黑白风格",
    url: "https://api.18xo.eu.org/file/1748052005231_报纸墙少女 裙子 黑白风格 4k壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "旅行 可爱美女虞书欣 4k手机",
    url: "https://api.18xo.eu.org/file/1748052008614_旅行 可爱美女虞书欣 4k手机壁纸竖屏_彼岸图网.jpg"
  },
  {
    name: "虞书欣 4k高清 美女壁纸",
    url: "https://api.18xo.eu.org/file/1748052007727_虞书欣4k高清美女壁纸3840x2400_彼岸图网.jpg"
  },
  {
    name: "画江湖之不良人 电脑壁纸",
    url: "https://api.18xo.eu.org/file/1748052002992_画江湖之不良人电脑壁纸4K高清全屏3840x2160_彼岸图网.jpg"
  },
  {
    name: "不良人姬如雪同人图 4K高清手机",
    url: "https://api.18xo.eu.org/file/1748052005348_不良人姬如雪同人图 4K高清手机壁纸图片_彼岸图网.jpg"
  },
  {
    name: "太乙真人 凡事看得开生活才能嗨",
    url: "https://api.18xo.eu.org/file/1748051995993_太乙真人 凡事看得开生活才能嗨 4K壁纸 3840x2400_彼岸图网.jpg"
  },
  {
    name: "趴在桌子的女孩",
    url: "https://api.18xo.eu.org/file/1748052077346_下午 趴在桌子的女孩4k动漫壁纸_彼岸图网.jpg"
  },
  {
    name: "Once Human",
    url: "https://api.18xo.eu.org/file/1748052072230_《Once Human》游戏美女 4K壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "报纸墙 白色长卷发",
    url: "https://api.18xo.eu.org/file/1748052176711_报纸墙 白色长卷发动漫少女4K壁纸3840x2160_彼岸图网.jpg"
  },
  {
    name: "miku 初音未来",
    url: "https://api.18xo.eu.org/file/1748052178342_海报 报纸墙 miku 初音未来 4K壁纸 3840x2400_彼岸图网.jpg"
  },
  {
    name: "阿尼亚 可爱剪刀手",
    url: "https://api.18xo.eu.org/file/1748052173998_阿尼亚 可爱剪刀手 4K壁纸3840x2160_彼岸图网.jpg"
  },
  {
    name: "无限暖暖 Infinity Nikki",
    url: "https://api.18xo.eu.org/file/1748052064210_《无限暖暖 Infinity Nikki》小女孩背影 游戏风景 4K壁纸_彼岸图网.jpg"
  },
  {
    name: "Himeko",
    url: "https://api.18xo.eu.org/file/1748052172683_《崩坏：星穹铁道》Himeko 3440x1440带鱼屏游戏壁纸_彼岸图网.jpg"
  },
  {
    name: "貂蝉时尚芭莎 馥梦",
    url: "https://api.18xo.eu.org/file/1748052064111_貂蝉时尚芭莎 馥梦 繁花3440x1440带鱼屏游戏壁纸_彼岸图网.jpg"
  },
  {
    name: "初音未来 穿出电脑屏幕 手紧握手",
    url: "https://api.18xo.eu.org/file/1748052062691_初音未来 穿出电脑屏幕 手紧握手 4K电脑壁纸_彼岸图网.jpg"
  },
  {
    name: "白金克丝",
    url: "https://api.18xo.eu.org/file/1748052065222_白金克丝 4K电脑壁纸 3840x2400_彼岸图网.jpg"
  },
  {
    name: "金克丝 长辫子 卧室 枕头 星星",
    url: "https://api.18xo.eu.org/file/1748052170264_金克丝 长辫子 卧室 枕头 星星 4K壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "卧室 金克丝 唯美",
    url: "https://api.18xo.eu.org/file/1748052170707_卧室 金克丝 唯美 4K壁纸 3840x2400_彼岸图网.jpg"
  },
  {
    name: "伊蕾娜 闲憩微息",
    url: "https://api.18xo.eu.org/file/1748052051563_伊蕾娜 闲憩微息 4K壁纸 3840x2160_彼岸图网.jpg"
  },
  {
    name: "剑星 Eve Stellar Blade",
    url: "https://api.18xo.eu.org/file/1748052178067_《剑星 Eve Stellar Blade》4K游戏人物壁纸_彼岸图网.jpg"
  },
  {
    name: "鞠婧祎 白色裙子",
    url: "https://api.18xo.eu.org/file/1748052051825_鞠婧祎 白色裙子 高清美女 4K壁纸_彼岸图网.jpg"
  },
  {
    name: "紫色长卷发 古风古典美女",
    url: "https://api.18xo.eu.org/file/1748052048954_紫色长卷发古风古典美女3440x1440带鱼屏壁纸动漫_彼岸图网.jpg"
  },
  {
    name: "明日香 红色机械服 伸出五指",
    url: "https://api.18xo.eu.org/file/1748052054545_明日香 红色机械服 伸出五指 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "古装美女手持宝剑 武侠风 雨中",
    url: "https://api.18xo.eu.org/file/1748052166758_古装美女手持宝剑 武侠风 雨中 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "国风 国潮风 游戏美女",
    url: "https://api.18xo.eu.org/file/1748052161526_《永劫无间》国风 国潮风 游戏美女3440x1440带鱼屏超清壁纸_彼岸图网.jpg"
  },
  {
    name: "不良人九 幽玄天降臣",
    url: "https://api.18xo.eu.org/file/1748052165828_不良人九幽玄天降臣6K高清壁纸_彼岸图网.jpg"
  },
  {
    name: "美女李瑜",
    url: "https://api.18xo.eu.org/file/1748052040394_美女李瑜3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "二次元角色-动漫美少女",
    url: "https://api.18xo.eu.org/file/1748049503921_【哲风壁纸】二次元角色-动漫美少女.png"
  },
  {
    name: "少女-少女壁纸",
    url: "https://api.18xo.eu.org/file/1748049504855_【哲风壁纸】少女-少女壁纸.png"
  },
  {
    name: "二次元-动漫角色",
    url: "https://api.18xo.eu.org/file/1748049505648_【哲风壁纸】二次元-动漫角色.png"
  },
  {
    name: "二次元动漫-动漫角色",
    url: "https://api.18xo.eu.org/file/1748049502491_【哲风壁纸】二次元动漫-动漫角色.png"
  },
  {
    name: "二次元-动漫风格",
    url: "https://api.18xo.eu.org/file/1748049497652_【哲风壁纸】二次元-动漫风格.png"
  },
  {
    name: "二次元-少女插画",
    url: "https://api.18xo.eu.org/file/1748049498649_【哲风壁纸】二次元-少女插画.png"
  },
  {
    name: "动漫美女-性感时尚",
    url: "https://api.18xo.eu.org/file/1748049492966_【哲风壁纸】动漫美女-性感时尚.png"
  },
  {
    name: "妖艳-少女-未来感",
    url: "https://api.18xo.eu.org/file/1748049497127_【哲风壁纸】妖艳-少女-未来感.png"
  },
  {
    name: "AI-AI美女",
    url: "https://api.18xo.eu.org/file/1748049491071_【哲风壁纸】AI-AI美女.png"
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

// 主图点击下载
mainImage.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = mainImage.src;
  link.download = "wallpaper.jpg";
  link.click();
});

// 加载缩略图
function renderThumbnails() {
  thumbnailsContainer.innerHTML = "";
  wallpapers.forEach((wallpaper, index) => {
    const thumb = document.createElement("img");
    thumb.src = wallpaper.url;
    thumb.alt = wallpaper.name;
    thumb.title = wallpaper.name;

    // 单击切换主图
    thumb.addEventListener("click", () => {
      currentIndex = index;
      loadMainImage(wallpapers[index]);
    });

    // 双击下载图片
    thumb.addEventListener("dblclick", () => {
      const link = document.createElement("a");
      link.href = wallpaper.url;
      link.download = `${wallpaper.name}.jpg`;
      link.click();
    });

    thumbnailsContainer.appendChild(thumb);
  });
}

// 自动无序轮播
function startRandomSlideshow() {
  setInterval(() => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * wallpapers.length);
    } while (nextIndex === currentIndex);
    currentIndex = nextIndex;
    loadMainImage(wallpapers[currentIndex]);
  }, 5000);
}

// 初始化
renderThumbnails();
loadMainImage(wallpapers[currentIndex]);
startRandomSlideshow();
