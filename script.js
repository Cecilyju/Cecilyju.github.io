// 壁纸列表（使用外链图源）
const wallpapers = [
  {
    name: "个性写真 时尚少女",
    url: "https://api.18xo.eu.org/file/1748112941513_【哲风壁纸】个性写真-时尚少女.png"
  },
  {
    name: "红色裙子美女 孟子义 闭眼唯美",
    url: "https://api.18xo.eu.org/file/1748139356647_红色裙子美女孟子义闭眼唯美 4K壁纸 3840x2400_彼岸图网.jpg"
  },
{
    name: "大梦归离 陈都灵 剧照",
    url: "https://api.18xo.eu.org/file/1748139352082_大梦归离陈都灵剧照4K壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "银发兽耳 动漫美女 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139344767_银发兽耳动漫美女 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "劫无间 顾清寒 剑 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139348539_永劫无间 顾清寒 剑 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "荷叶 荷花 古风唯美漂亮女子 4K美女壁纸",
    url: "https://api.18xo.eu.org/file/1748139341140_荷叶 荷花 古风唯美漂亮女子 4K美女壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "报纸墙 动漫人物少女 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139344828_报纸墙 动漫人物少女 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "白发少女4K动漫 壁纸",
    url: "https://api.18xo.eu.org/file/1748139339676_白发少女4K动漫壁纸3840x2400_彼岸图网.jpg"
  },
{
    name: "哪吒2 魔童闹海 敖闰4k高清 壁纸图片",
    url: "https://api.18xo.eu.org/file/1748139335969_哪吒2魔童闹海敖闰4k高清壁纸图片3840x2400_彼岸图网.jpg"
  },
{
    name: "黑色长发女子 暗色系 4k动漫壁纸",
    url: "https://api.18xo.eu.org/file/1748139442424_黑色长发女子 暗色系 4k动漫壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "漂亮古风美女 头饰 回头 凝望 4k壁纸",
    url: "https://api.18xo.eu.org/file/1748139439586_漂亮古风美女 头饰 回头 凝望 4k壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "黑白风 动漫人物 女4k壁纸",
    url: "https://api.18xo.eu.org/file/1748139323731_黑白风动漫人物女4k壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "芙宁娜 报纸墙 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139325027_芙宁娜 报纸墙 4K壁纸 3840*2160_彼岸图网.jpg"
  },
{
    name: "原神胡桃 照片墙 相片墙 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139320940_原神胡桃 照片墙 相片墙 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "报纸墙 长卷发 大波浪美女 4K动漫壁纸",
    url: "https://api.18xo.eu.org/file/1748139328077_报纸墙 长卷发 大波浪美女 4K动漫壁纸_彼岸图网.jpg"
  },
{
    name: "报纸墙 黑发美女 牛仔衣 4k动漫壁纸",
    url: "https://api.18xo.eu.org/file/1748139320098_报纸墙 黑发美女 牛仔衣 4k动漫壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "金克丝 蓝色头发 黑色外套 报纸墙4K动漫壁纸",
    url: "https://api.18xo.eu.org/file/1748139321967_金克丝 蓝色头发 黑色外套 报纸墙4K动漫壁纸_彼岸图网.jpg"
  },
{
    name: "雪之下雪乃 报纸墙 4k壁纸",
    url: "https://api.18xo.eu.org/file/1748139312485_雪之下雪乃 报纸墙 4k壁纸 3840*2160_彼岸图网.jpg"
  },
{
    name: "报纸墙美女 回眸一笑 回头 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139447636_报纸墙美女 回眸一笑 回头 4K壁纸3840x2400_彼岸图网.jpg"
  },
{
    name: "报纸墙 可爱女孩4k手机壁纸 竖屏",
    url: "https://api.18xo.eu.org/file/1748139315743_报纸墙可爱女孩4k手机壁纸竖屏_彼岸图网.jpg"
  },
{
    name: "漂亮唯美 古风美女 刘些宁 电脑壁纸4k超清",
    url: "https://api.18xo.eu.org/file/1748139308233_漂亮唯美古风美女刘些宁 电脑壁纸4k超清 3840x2400_彼岸图网.jpg"
  },
{
    name: "可爱胡桃4K电脑 壁纸",
    url: "https://api.18xo.eu.org/file/1748139441442_可爱胡桃4K电脑壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "五条悟 图片帅气4K电脑壁纸",
    url: "https://api.18xo.eu.org/file/1748139300433_五条悟图片帅气4K电脑壁纸3840x2400_彼岸图网.jpg"
  },
{
    name: "报纸墙 粉色 长发女孩",
    url: "https://api.18xo.eu.org/file/1748139301075_报纸墙 粉色长发女孩3200x2000高清壁纸全屏_彼岸图网.jpg"
  },
{
    name: "猫耳朵 动漫女孩 一手托腮",
    url: "https://api.18xo.eu.org/file/1748139295255_猫耳朵动漫女孩 一手托腮 3200x2000电脑壁纸全屏_彼岸图网.jpg"
  },
{
    name: "孟子义 蓝色 长裙",
    url: "https://api.18xo.eu.org/file/1748139297692_孟子义蓝色长裙3200x2000美女壁纸全屏高清_彼岸图网.jpg"
  },
{
    name: "房间 动漫女生 雪之下雪乃 4K高清手机壁纸 全屏",
    url: "https://api.18xo.eu.org/file/1748139293310_房间动漫女生雪之下雪乃4K高清手机壁纸全屏_彼岸图网.jpg"
  },
{
    name: "miku初音未来 白色花瓣 蝴蝶 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139289552_miku初音未来 白色花瓣 蝴蝶 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "报纸墙 金克丝 蓝色双马尾辫 4K手机壁纸图片",
    url: "https://api.18xo.eu.org/file/1748139292145_报纸墙 金克丝 蓝色双马尾辫 4K手机壁纸图片_彼岸图网.jpg"
  },
{
    name: "张婧仪 侧脸高清美女 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139449315_张婧仪 侧脸高清美女 4K壁纸 张婧仪_彼岸图网.jpg"
  },
{
    name: "报纸墙 甘雨 原神 4k手机壁纸竖屏",
    url: "https://api.18xo.eu.org/file/1748139282059_报纸墙 甘雨 原神 4k手机壁纸竖屏_彼岸图网.jpg"
  },
{
    name: "报纸墙 可爱小女孩 粉色长发",
    url: "https://api.18xo.eu.org/file/1748139443793_报纸墙 可爱小女孩 粉色长发 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "可爱胡桃 晚上 原神",
    url: "https://api.18xo.eu.org/file/1748139281421_可爱胡桃 晚上 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "古风美女 刘些宁 侧脸 唯美",
    url: "https://api.18xo.eu.org/file/1748139282545_古风美女 刘些宁 侧脸 唯美3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "樱花 唯美古风美女 刘些宁",
    url: "https://api.18xo.eu.org/file/1748139275328_樱花 唯美古风美女 刘些宁3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "报纸墙 粉色长发女孩 ",
    url: "https://api.18xo.eu.org/file/1748139267594_报纸墙 粉色长发女孩 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "白衣古风女子4K手机高清壁纸",
    url: "https://api.18xo.eu.org/file/1748139273088_白衣古风女子4K手机高清壁纸_彼岸图网.jpg"
  },
{
    name: "纸墙 甘雨 原神 4k壁纸",
    url: "https://api.18xo.eu.org/file/1748139273400_报纸墙 甘雨 原神 4k壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "初音未来 湖畔星辰",
    url: "https://api.18xo.eu.org/file/1748139266693_初音未来 湖畔星辰 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "长发回头美女孟子义 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139269697_长发回头美女孟子义 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "芙莉莲 星光 二次元 动漫",
    url: "https://api.18xo.eu.org/file/1748139262315_芙莉莲 星光 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "金克丝 蓝色双马尾辫 报纸墙",
    url: "https://api.18xo.eu.org/file/1748139266111_金克丝 蓝色双马尾辫 报纸墙 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "房间 女孩  面条 电脑 暗色系 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139256880_房间 女孩  面条 电脑 暗色系 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "敖闰侧身美图4K手机壁纸图片",
    url: "https://api.18xo.eu.org/file/1748139253783_敖闰侧身美图4K手机壁纸图片2400x3840_彼岸图网.jpg"
  },
{
    name: "唯美短发女孩 绿色植物 屋内 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139255817_唯美短发女孩 绿色植物 屋内 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "礼服之约4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139251422_礼服之约4K壁纸3848x2160_彼岸图网.jpg"
  },
{
    name: "孩 双手合十 许愿 4k壁纸",
    url: "https://api.18xo.eu.org/file/1748139250437_女孩 双手合十 许愿 4k壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "田曦薇 美女回头 高清 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139254622_田曦薇 美女回头 高清 4K壁纸 3840x2400_彼岸图网.jpg"
  },
{
    name: "报纸墙 可爱动漫人物少女",
    url: "https://api.18xo.eu.org/file/1748139250993_报纸墙 可爱动漫人物少女 3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "敖闰姑姑4K高清手机壁纸图片",
    url: "https://api.18xo.eu.org/file/1748139260523_敖闰姑姑4K高清手机壁纸图片_彼岸图网.jpg"
  },
{
    name: "鞠婧祎白发狐狸造型4k壁纸",
    url: "https://api.18xo.eu.org/file/1748139244850_鞠婧祎白发狐狸造型4k壁纸3840x2400_彼岸图网.jpg"
  },
{
    name: "爱小女孩 帽子 玩具熊 4k壁纸",
    url: "https://api.18xo.eu.org/file/1748139248558_可爱小女孩 帽子 玩具熊 4k壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "唯美长发动漫美女暗色系4k全屏手机壁纸图片",
    url: "https://api.18xo.eu.org/file/1748139240210_唯美长发动漫美女暗色系4k全屏手机壁纸图片_彼岸图网.jpg"
  },
{
    name: "报纸墙女孩 蓝发美女4K动漫壁纸",
    url: "https://api.18xo.eu.org/file/1748139242787_报纸墙女孩 蓝发美女4K动漫壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "报纸墙少女 裙子 4k手机壁纸竖屏动漫美女图",
    url: "https://api.18xo.eu.org/file/1748139243641_报纸墙少女 裙子 4k手机壁纸竖屏动漫美女图_彼岸图网.jpg"
  },
{
    name: "孟子义暗黑系美女4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139229208_孟子义暗黑系美女4K壁纸_彼岸图网.jpg"
  },
{
    name: "剑来 宁姚 报纸墙4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139226208_剑来 宁姚 报纸墙4K壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "报纸墙 动漫美女 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139223186_报纸墙 动漫美女 4K壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "长发漂亮女孩 青春气息 皮蛋瘦肉邹 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139230947_长发漂亮女孩 青春气息 皮蛋瘦肉邹 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "唯美陆雪琪4K手机壁纸",
    url: "https://api.18xo.eu.org/file/1748139221857_唯美陆雪琪4K手机壁纸_彼岸图网.jpg"
  },
{
    name: "蓝色长发金克丝",
    url: "https://api.18xo.eu.org/file/1748139220278_蓝色长发金克丝2880x1800电脑壁纸_彼岸图网.jpg"
  },
{
    name: "两眼凝望的金克丝",
    url: "https://api.18xo.eu.org/file/1748139218625_两眼凝望的金克丝2880x1800壁纸_彼岸图网.jpg"
  },
{
    name: "侧脸气质美女",
    url: "https://api.18xo.eu.org/file/1748139218899_侧脸气质美女2880x1800桌面壁纸_彼岸图网.jpg"
  },
{
    name: "雨中的金克丝",
    url: "https://api.18xo.eu.org/file/1748139213734_雨中的金克丝2880x1800分辨率壁纸_彼岸图网.jpg"
  },
{
    name: "闭眼金克丝",
    url: "https://api.18xo.eu.org/file/1748139214958_闭眼金克丝2880x1800电脑壁纸_彼岸图网.jpg"
  },
{
    name: "电话靓丽美女鞠婧祎4k手机壁纸",
    url: "https://api.18xo.eu.org/file/1748139225532_电话靓丽美女鞠婧祎4k手机壁纸_彼岸图网.jpg"
  },
{
    name: "高领黑毛衣美女4k手机壁纸竖屏",
    url: "https://api.18xo.eu.org/file/1748139203371_高领黑毛衣美女4k手机壁纸竖屏_彼岸图网.jpg"
  },
{
    name: "原神胡桃可爱手势",
    url: "https://api.18xo.eu.org/file/1748139206573_原神胡桃可爱手势2880x1800电脑壁纸_彼岸图网.jpg"
  },
{
    name: "唯美蒙眼女神4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139200765_唯美蒙眼女神4K壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "火灵儿",
    url: "https://api.18xo.eu.org/file/1748139200093_火灵儿3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "影魅影绮裳 王者荣耀",
    url: "https://api.18xo.eu.org/file/1748139199499_影魅影绮裳 王者荣耀2880x1800游戏壁纸_彼岸图网.jpg"
  },
{
    name: "可爱粉色连帽衫动漫女孩4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139201365_可爱粉色连帽衫动漫女孩4K壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "暗色系美女鞠婧祎",
    url: "https://api.18xo.eu.org/file/1748139194343_暗色系美女鞠婧祎3200x2000壁纸_彼岸图网.jpg"
  },
{
    name: "赛博少女 皮蛋瘦肉邹4K高清壁纸",
    url: "https://api.18xo.eu.org/file/1748139208005_赛博少女 皮蛋瘦肉邹4K高清壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "星空少女白云窗口4K动漫壁纸",
    url: "https://api.18xo.eu.org/file/1748139191070_星空少女白云窗口4K动漫壁纸3840x2160_彼岸图网.jpg"
  },
{
    name: "兽耳 猫耳美女 短发 猫尾巴 4k动漫壁纸",
    url: "https://api.18xo.eu.org/file/1748139186900_兽耳 猫耳美女 短发 猫尾巴 4k动漫壁纸 3840*2160_彼岸图网.jpg"
  },
{
    name: "肌肤胜雪美女 皮蛋瘦肉邹 4k壁纸",
    url: "https://api.18xo.eu.org/file/1748139188593_肌肤胜雪美女 皮蛋瘦肉邹 4k壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "初音未来涂鸦墙4k手机壁纸竖屏",
    url: "https://api.18xo.eu.org/file/1748139177279_初音未来涂鸦墙4k手机壁纸竖屏2400x3840_彼岸图网.jpg"
  },
{
    name: "初音未来涂鸦墙4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139186762_初音未来涂鸦墙4K壁纸_彼岸图网.jpg"
  },
{
    name: "中野三玖涂鸦墙",
    url: "https://api.18xo.eu.org/file/1748139189701_中野三玖涂鸦墙3200x2000电脑壁纸_彼岸图网.jpg"
  },
{
    name: "红色衣服古风女孩长发",
    url: "https://api.18xo.eu.org/file/1748139174770_红色衣服古风女孩长发3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
{
    name: "来魔力 赛博风格美女",
    url: "https://api.18xo.eu.org/file/1748139170569_未来魔力 赛博风格美女3200x2000高清壁纸_彼岸图网.jpg"
  },
{
    name: "白毛 围巾 冬日动漫女孩",
    url: "https://api.18xo.eu.org/file/1748139167969_白毛 围巾 冬日动漫女孩3200x2000电脑壁纸_彼岸图网.jpg"
  },
{
    name: "街景少女 皮蛋瘦肉邹 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139163525_街景少女 皮蛋瘦肉邹 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "眼罩 蒙眼 白色裙子女孩",
    url: "https://api.18xo.eu.org/file/1748139171459_眼罩 蒙眼 白色裙子女孩3200x2000动漫壁纸_彼岸图网.jpg"
  },
{
    name: "朋克狐耳女孩",
    url: "https://api.18xo.eu.org/file/1748139173024_朋克狐耳女孩3200x2000动漫壁纸_彼岸图网.jpg"
  },
{
    name: "金克丝 大猫",
    url: "https://api.18xo.eu.org/file/1748139169655_金克丝 大猫 3200x2000动漫壁纸_彼岸图网.jpg"
  },
{
    name: "唯美蓝色头发动漫美女闭眼",
    url: "https://api.18xo.eu.org/file/1748139163303_唯美蓝色头发动漫美女闭眼3200x2000高清壁纸_彼岸图网.jpg"
  },
{
    name: "下雨天小女孩和猫",
    url: "https://api.18xo.eu.org/file/1748139151883_下雨天小女孩和猫3200x2000分辨率壁纸_彼岸图网.jpg"
  },
{
    name: "报纸墙剑来 宁姚",
    url: "https://api.18xo.eu.org/file/1748139154491_报纸墙剑来 宁姚3200x2000壁纸_彼岸图网.jpg"
  },
{
    name: "金克丝 微笑 可爱 甜美 闭眼 午后 4k壁纸",
    url: "https://api.18xo.eu.org/file/1748139155606_金克丝 微笑 可爱 甜美 闭眼 午后 4k壁纸 3840*2160_彼岸图网.jpg"
  },
{
    name: "可爱女孩居家宽屏4K动漫手机壁纸",
    url: "https://api.18xo.eu.org/file/1748139152725_可爱女孩居家宽屏4K动漫手机壁纸3200x3840_彼岸图网.jpg"
  },
{
    name: "女孩书唯美",
    url: "https://api.18xo.eu.org/file/1748139157118_女孩书唯美2880x1800高清电脑壁纸_彼岸图网.jpg"
  },
{
    name: "甜美金克丝 双麻花辫 4k动漫壁纸",
    url: "https://api.18xo.eu.org/file/1748139156819_甜美金克丝 双麻花辫 4k动漫壁纸3840*2160_彼岸图网.jpg"
  },
{
    name: "美女 粉色毛衣 4k壁纸",
    url: "https://api.18xo.eu.org/file/1748139132966_美女 粉色毛衣 4k壁纸 3840*2160_彼岸图网.jpg"
  },
{
    name: "甘雨 休闲 房间 电脑 音箱 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139136872_甘雨 休闲 房间 电脑 音箱 4K壁纸 3840x2160_彼岸图网.jpg"
  },
{
    name: "侧脸高清美女鞠婧祎",
    url: "https://api.18xo.eu.org/file/1748139129794_侧脸高清美女鞠婧祎3840x1080双屏桌面壁纸_彼岸图网.jpg"
  },
{
    name: "鞠婧祎黑色外套气质美女 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748139132236_鞠婧祎黑色外套气质美女 4K壁纸_彼岸图网.jpg"
  },
{
    name: "黑神话悟空蜘蛛精四妹",
    url: "https://api.18xo.eu.org/file/1748139131284_黑神话悟空蜘蛛精四妹3440x1440带鱼屏游戏壁纸_彼岸图网.jpg"
  },
{
    name: "森系美女陈都灵",
    url: "https://api.18xo.eu.org/file/1748139137722_森系美女陈都灵3440x1440带鱼屏壁纸_彼岸图网.jpg"
  },
  {
    name: "剑 剑士美女",
    url: "https://api.18xo.eu.org/file/1748112934227_【哲风壁纸】剑-剑士美女.png"
  },
  {
    name: "光影背景 少女",
    url: "https://api.18xo.eu.org/file/1748112943577_【哲风壁纸】光影背景-少女.png"
  },
  {
    name: "二次元 猫娘 二次元萌系",
    url: "https://api.18xo.eu.org/file/1748112931502_【哲风壁纸】二次元-二次元萌系.png"
  },
  {
    name: "英雄联盟 金克斯",
    url: "https://api.18xo.eu.org/file/1748112942697_【哲风壁纸】英雄联盟-金克斯.png"
  },
  {
    name: "云端 可爱 天使少女",
    url: "https://api.18xo.eu.org/file/1748112941014_【哲风壁纸】云端-可爱-天使少女.png"
  },
  {
    name: "二次元美女 女孩 唯美角色",
    url: "https://api.18xo.eu.org/file/1748112937442_【哲风壁纸】二次元美女-唯美角色 (1).png"
  },
  {
    name: "夜景背景 女孩 少女壁纸",
    url: "https://api.18xo.eu.org/file/1748112936235_【哲风壁纸】夜景背景-少女壁纸.png"
  },
  {
    name: "AI女孩 AI少女",
    url: "https://api.18xo.eu.org/file/1748112981836_【哲风壁纸】AI-AI少女.png"
  },
  {
    name: "二次元 动漫 少女 女孩 壁纸4K",
    url: "https://api.18xo.eu.org/file/1748112982016_【哲风壁纸】二次元-动漫.png"
  },
  {
    name: "二次元 动漫 女孩 少女",
    url: "https://api.18xo.eu.org/file/1748112974276_【哲风壁纸】二次元-动漫 (1).png"
  },
  {
    name: "二次元 兽娘 兽耳娘",
    url: "https://api.18xo.eu.org/file/1748112982344_【哲风壁纸】二次元-兽娘-兽耳娘.png"
  },
  {
    name: "中式背景 动漫 旗袍 女孩",
    url: "https://api.18xo.eu.org/file/1748112965220_【哲风壁纸】中式背景-动漫.png"
  },
  {
    name: "游戏 金克丝 角色",
    url: "https://api.18xo.eu.org/file/1748112968601_【哲风壁纸】暴走萝莉-英雄联盟.png"
  },
  {
    name: "二次元 鬼女孩 刀 纹身",
    url: "https://api.18xo.eu.org/file/1748112970571_【哲风壁纸】AI-AI元素.png"
  },
  {
    name: "二次元 女孩 卧室 居室",
    url: "https://api.18xo.eu.org/file/1748112962999_【哲风壁纸】兽耳娘-动漫壁纸.png"
  },
  {
    name: "二次元 动漫 美人 冷白皮 魅魔",
    url: "https://api.18xo.eu.org/file/1748112965107_【哲风壁纸】二次元美人-冷白皮.png"
  },
  {
    name: "动漫角色 双马尾 金克斯",
    url: "https://api.18xo.eu.org/file/1748112959143_【哲风壁纸】动漫角色-双马尾.png"
  },
  {
    name: "二次元美女 唯美角色 女孩",
    url: "https://api.18xo.eu.org/file/1748112951054_【哲风壁纸】二次元美女-唯美角色.png"
  },
  {
    name: "八重神子 卧室场景",
    url: "https://api.18xo.eu.org/file/1748112957103_【哲风壁纸】八重神子-卧室场景.png"
  },
  {
    name: "写实插画 冷白皮 女孩",
    url: "https://api.18xo.eu.org/file/1748112954602_【哲风壁纸】写实插画-冷白皮.png"
  },
  {
    name: "水元素 泳池 女孩",
    url: "https://api.18xo.eu.org/file/1748112948471_【哲风壁纸】水元素-泳池.png"
  },
  {
    name: "性感角色 金克斯 游戏角色",
    url: "https://api.18xo.eu.org/file/1748112949402_【哲风壁纸】性感角色-游戏角色.png"
  },
  {
    name: "个性装扮 红发女孩 动漫角色",
    url: "https://api.18xo.eu.org/file/1748112954018_【哲风壁纸】个性装扮-动漫角色.png"
  },
  {
    name: "居家 女孩 电脑 壁纸",
    url: "https://api.18xo.eu.org/file/1748106846639_45864.png"
  },
  {
    name: "二次元 动漫 少女 沐浴女孩",
    url: "https://api.18xo.eu.org/file/1748106825810_48903.png"
  },
  {
    name: "动漫 二次元 人物 动物",
    url: "https://api.18xo.eu.org/file/1748106739691_45635.png"
  },
  {
    name: "壁纸 手绘 绘画",
    url: "https://api.18xo.eu.org/file/1748106823179_46060.png"
  },
  {
    name: "二次元 动漫少女 女孩 壁纸",
    url: "https://api.18xo.eu.org/file/1748106822281_45194.png"
  },
  {
    name: "少女 女孩 武器",
    url: "https://api.18xo.eu.org/file/1748106821815_45158.png"
  },
  {
    name: "动漫 性感女孩 少女 二次元",
    url: "https://api.18xo.eu.org/file/1748106822111_45157.png"
  },
  {
    name: "动漫 二次元 少女 可爱女孩",
    url: "https://api.18xo.eu.org/file/1748106800501_45154.png"
  },
  {
    name: "二次元 女孩 书桌 少女 居家",
    url: "https://api.18xo.eu.org/file/1748106833822_45718.jpg"
  },
  {
    name: "二次元 动漫 女孩 少女",
    url: "https://api.18xo.eu.org/file/1748106824969_45612.png"
  },
  {
    name: "女孩 少女 红发 动漫 二次元",
    url: "https://api.18xo.eu.org/file/1748106811404_45611.png"
  },
  {
    name: "动漫 人物 龙",
    url: "https://api.18xo.eu.org/file/1748106840671_45856.png"
  },
  {
    name: "动漫 人物 刺客 牛仔",
    url: "https://api.18xo.eu.org/file/1748106840860_45733.png"
  },
  {
    name: "动漫 女孩 吹笛少女",
    url: "https://api.18xo.eu.org/file/1748106841842_45719.png"
  },
  {
    name: "动漫 美少女 4K壁纸 女孩",
    url: "https://api.18xo.eu.org/file/1748106866339_45966.png"
  },
  {
    name: "动漫 女孩 双刀 绿发",
    url: "https://api.18xo.eu.org/file/1748106862892_45878.png"
  },
  {
    name: "动漫 少女 狐狸女孩 兽娘",
    url: "https://api.18xo.eu.org/file/1748106855160_45877.png"
  },
  {
    name: "动漫 女孩 少女",
    url: "https://api.18xo.eu.org/file/1748106863832_45873.png"
  },
  {
    name: "动漫 少女 女孩 长腿",
    url: "https://api.18xo.eu.org/file/1748106854383_45866.png"
  },
  {
    name: "动漫 车站 风景",
    url: "https://api.18xo.eu.org/file/1748106850610_45860.png"
  },
  {
    name: "动漫 少女 鬼女孩",
    url: "https://api.18xo.eu.org/file/1748106956307_45880.png"
  },
  {
    name: "动漫 少女 彩绘墙 兽耳",
    url: "https://api.18xo.eu.org/file/1748106887300_46195.png"
  },
  {
    name: "动漫 美少女 女孩 彩绘墙",
    url: "https://api.18xo.eu.org/file/1748106875444_46193.png"
  },
  {
    name: "动漫 少女 女孩 居家 玩偶",
    url: "https://api.18xo.eu.org/file/1748106873871_46191.png"
  },
  {
    name: "动漫 美少女 女孩 壁纸",
    url: "https://api.18xo.eu.org/file/1748106876492_46189.png"
  },
  {
    name: "动漫 女孩 红发少女",
    url: "https://api.18xo.eu.org/file/1748106864186_46186.png"
  },
  {
    name: "动漫 少女 女孩 角色 4K",
    url: "https://api.18xo.eu.org/file/1748106869458_46184.png"
  },
  {
    name: "动漫 角色 女孩 少女 壁纸4K",
    url: "https://api.18xo.eu.org/file/1748106866488_46182.png"
  },
  {
    name: "动漫 少女 花朵 花墙",
    url: "https://api.18xo.eu.org/file/1748106911724_46330.png"
  },
  {
    name: "动漫 少女 化妆 女孩",
    url: "https://api.18xo.eu.org/file/1748106916717_46323.png"
  },
  {
    name: "动漫 人物 犬夜叉 桔梗",
    url: "https://api.18xo.eu.org/file/1748106909099_46322.png"
  },
  {
    name: "动漫 女孩 车站 火车",
    url: "https://api.18xo.eu.org/file/1748106902449_46321.png"
  },
  {
    name: "动漫 人物 壁纸 4K电脑",
    url: "https://api.18xo.eu.org/file/1748106896517_46320.png"
  },
  {
    name: "动漫 电影 疯狂动物城",
    url: "https://api.18xo.eu.org/file/1748106887320_46316.png"
  },
  {
    name: "动漫 人物 你豆子 女孩",
    url: "https://api.18xo.eu.org/file/1748106894827_46238.png"
  },
  {
    name: "动漫 女孩 持剑 少女",
    url: "https://api.18xo.eu.org/file/1748106904919_46231.png"
  },
  {
    name: "动漫 少女 面具女孩",
    url: "https://api.18xo.eu.org/file/1748106876825_46217.png"
  },
  {
    name: "动漫 少女 眼睛",
    url: "https://api.18xo.eu.org/file/1748106958802_45740.png"
  },
  {
    name: "动漫 吉他 女孩 兽耳",
    url: "https://api.18xo.eu.org/file/1748106953315_45662.png"
  },
  {
    name: "动漫 少女 花海",
    url: "https://api.18xo.eu.org/file/1748106960438_46384.png"
  },
  {
    name: "动漫 吃饭女孩",
    url: "https://api.18xo.eu.org/file/1748106952520_45661.png"
  },
  {
    name: "动漫 女孩 酷 彩绘",
    url: "https://api.18xo.eu.org/file/1748106955971_45879.png"
  },
  {
    name: "动漫 初音未来 窗户 下雨",
    url: "https://api.18xo.eu.org/file/1748106953453_46366.png"
  },
  {
    name: "动漫 青春 美少女",
    url: "https://api.18xo.eu.org/file/1748106953797_45660.png"
  },
  {
    name: "动漫 高马尾 少女 女孩",
    url: "https://api.18xo.eu.org/file/1748106947739_45653.png"
  },
  {
    name: "动漫 少女 沐浴",
    url: "https://api.18xo.eu.org/file/1748106953018_45649.png"
  },
  {
    name: "动漫 少女 兽耳娘",
    url: "https://api.18xo.eu.org/file/1748106952325_45648.png"
  },
  {
    name: "动漫 女孩 美少女 壁纸",
    url: "https://api.18xo.eu.org/file/1748106940243_45581.png"
  },
  {
    name: "动漫 女孩 手 咬",
    url: "https://api.18xo.eu.org/file/1748106930390_46382.png"
  },
  {
    name: "动漫 少女 兽耳女孩",
    url: "https://api.18xo.eu.org/file/1748106933533_45169.png"
  },
  {
    name: "书法 蝴蝶 字帖 4K壁纸",
    url: "https://api.18xo.eu.org/file/1748106942705_47575.png"
  },
  {
    name: "动漫 风景 4K电脑壁纸",
    url: "https://api.18xo.eu.org/file/1748106933487_45137.png"
  },
  {
    name: "动漫 人物 龙女 兽娘",
    url: "https://api.18xo.eu.org/file/1748106921667_46573.png"
  },
  {
    name: "美女 眼镜 居室",
    url: "https://api.18xo.eu.org/file/1748106917896_46569.png"
  },
  {
    name: "动漫 美女 少女 翅膀",
    url: "https://api.18xo.eu.org/file/1748106921467_46572.png"
  },
  {
    name: "动漫 漫画 少女 女孩",
    url: "https://api.18xo.eu.org/file/1748106918773_48770.png"
  },
  {
    name: "动漫 少女 汽车",
    url: "https://api.18xo.eu.org/file/1748106910018_47358.png"
  },
  {
    name: "动漫 性感 美女 居家 壁纸",
    url: "https://api.18xo.eu.org/file/1748106917197_46331.png"
  },
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
