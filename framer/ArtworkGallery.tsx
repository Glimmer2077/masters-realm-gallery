import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

// Framer Code Component starter.
// Compact mobile-museum layout: 4+ cards per row, click card to open details.
const ARTWORKS = [
  {
    "id": "titian-madonna-child-st-paul",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 1,
    "order": 1,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "圣母子与圣保罗",
    "titleEn": "Virgin and Child with Saint Paul",
    "artistZh": "提香",
    "artistEn": "Titian / Tiziano Vecellio",
    "date": "约1540年",
    "medium": "油画",
    "tags": [
      "威尼斯色彩",
      "圣母子",
      "必看"
    ],
    "imageFile": "Tiziano Vecellio Virgin Mary with Child and St. Paul.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Tiziano_Vecellio_Virgin_Mary_with_Child_and_St._Paul.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "summary": "全展的文艺复兴锚点：不是靠硬轮廓，而是用颜色、色层和肉身感把神圣场面组织起来。",
    "viewTips": [
      "先看圣母衣料的蓝、红、金色如何稳定画面。",
      "再看圣婴皮肤、圣保罗红衣和暗部之间的温度变化。",
      "最后看人物、背景和宗教属性怎样被色彩连成一个整体。"
    ],
    "keywords": [
      "Titian",
      "Venetian colorito",
      "sacra conversazione",
      "Saint Paul",
      "oil layers"
    ],
    "compare": "克拉纳赫《持施洗者圣约翰首级的莎乐美》：一个靠色彩和肉身，一个靠线条和冷峻细节。",
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/titian-madonna-child-st-paul.jpg"
  },
  {
    "id": "cranach-salome",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 2,
    "order": 2,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "持施洗者圣约翰首级的莎乐美",
    "titleEn": "Salome with the Head of Saint John the Baptist",
    "artistZh": "老卢卡斯·克拉纳赫",
    "artistEn": "Lucas Cranach the Elder",
    "date": "约1526–1530年",
    "medium": "木板油画",
    "tags": [
      "北方文艺复兴",
      "莎乐美",
      "线描"
    ],
    "imageFile": "Lucas Cranach d. Ä. - Salome - WGA05722.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lucas_Cranach_d._%C3%84._-_Salome_-_WGA05722.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "summary": "同样是宗教暴力题材，这里被处理成冷静、精致、带道德警示的北方文艺复兴图像。",
    "viewTips": [
      "先看黑背景如何把人物和银盘推到前景。",
      "再看珠宝、衣纹、头饰和手指的精密线条。",
      "最后看莎乐美平静表情与人头之间的强烈反差。"
    ],
    "keywords": [
      "Cranach",
      "Northern Renaissance",
      "Salome",
      "John the Baptist",
      "line and detail"
    ],
    "compare": "真蒂莱斯基《莎乐美》：同题材从冷峻叙事变成巴洛克戏剧。",
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/cranach-salome.jpg"
  },
  {
    "id": "artemisia-salome",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 3,
    "order": 10,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "持施洗者圣约翰首级的莎乐美",
    "titleEn": "Salome with the Head of Saint John the Baptist",
    "artistZh": "传阿尔泰米西娅·真蒂莱斯基",
    "artistEn": "Attributed to Artemisia Gentileschi",
    "date": "约1610–1615年",
    "medium": "布面油画",
    "tags": [
      "巴洛克",
      "强明暗",
      "同题对照"
    ],
    "imageFile": "Salome with the Head of Saint John the Baptist by Artemisia Gentileschi ca. 1610-1615.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Salome_with_the_Head_of_Saint_John_the_Baptist_by_Artemisia_Gentileschi_ca._1610-1615.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "summary": "这一件适合和克拉纳赫连看：黑暗、光束、人物动作和心理重量都更接近巴洛克舞台。",
    "viewTips": [
      "先看光线是否集中在脸、手和人头上。",
      "再看黑背景如何制造压迫感。",
      "最后注意展签的归属词：传为、归于、工作室、作，含义不同。"
    ],
    "keywords": [
      "Artemisia Gentileschi",
      "attributed to",
      "Caravaggism",
      "chiaroscuro",
      "Salome"
    ],
    "compare": "克拉纳赫《莎乐美》：北方冷静与巴洛克戏剧性的同题对照。",
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/artemisia-salome.jpg"
  },
  {
    "id": "el-greco-apostle",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 4,
    "order": 4,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "圣巴多罗买使徒（局部）",
    "titleEn": "Saint Bartholomew Apostle (fragment)",
    "artistZh": "埃尔·格列柯",
    "artistEn": "El Greco / Domenikos Theotokopoulos",
    "date": "约1585年 / 公开馆藏数据亦见约1600年写法",
    "medium": "布面油画",
    "tags": [
      "矫饰主义",
      "精神性",
      "使徒像"
    ],
    "imageFile": "El Greco - Saint James the Younger - Google Art Project.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:El_Greco_-_Saint_James_the_Younger_-_Google_Art_Project.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏图像；题名在公开库中又作 Saint James the Younger / Saint Bartholomew Apostle，现场以展签为准",
    "summary": "不要用“像不像”判断它。重点是拉长的脸、紧张的眼神和不稳定空间带来的精神强度。",
    "viewTips": [
      "先看脸部比例是否故意拉长。",
      "再看冷色调、衣褶和暗部如何制造精神紧张。",
      "最后把它和提香比较：一个追求肉身温度，一个追求信仰强度。"
    ],
    "keywords": [
      "El Greco",
      "Mannerism",
      "apostle",
      "spiritual intensity",
      "elongated figures"
    ],
    "compare": "提香《圣母子与圣保罗》：一个是威尼斯色彩与肉身，一个是西班牙宗教精神性。",
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/el-greco-apostle.jpg"
  },
  {
    "id": "goya-caballero",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 5,
    "order": 17,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "西班牙司法大臣何塞·安东尼奥·德·卡瓦列罗侯爵肖像",
    "titleEn": "Portrait of José Antonio, Marqués de Caballero",
    "artistZh": "弗朗西斯科·戈雅",
    "artistEn": "Francisco de Goya y Lucientes",
    "date": "1807年",
    "medium": "布面油画",
    "tags": [
      "权力肖像",
      "西班牙",
      "心理"
    ],
    "imageFile": "Goya - Portrait of José Antonio Marqués de Caballero, 1807, 3274.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Goya_-_Portrait_of_Jos%C3%A9_Antonio_Marqu%C3%A9s_de_Caballero,_1807,_3274.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "summary": "权力肖像不是只画体面：脸部、衣饰、勋章和姿态共同制造一种冷峻的政治存在感。",
    "viewTips": [
      "先看人物的眼神与嘴角，判断心理距离。",
      "再看制服、勋章和椅子如何组织权力感。",
      "最后比较脸部细节与服饰笔触的速度差异。"
    ],
    "keywords": [
      "Goya",
      "court portrait",
      "Spanish Enlightenment",
      "power",
      "psychological portrait"
    ],
    "compare": "雷诺阿《年轻女子肖像》：同为肖像，一个偏权力心理，一个偏肉色与光。",
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/goya-caballero.jpg"
  },
  {
    "id": "jan-steen-peasant-wedding",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 6,
    "order": 18,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "农民婚礼",
    "titleEn": "A Peasant Wedding",
    "artistZh": "扬·斯滕",
    "artistEn": "Jan Steen",
    "date": "1656–1660年",
    "medium": "油画",
    "tags": [
      "荷兰风俗画",
      "婚礼",
      "日常寓意"
    ],
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/10239/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "summary": "表面是热闹婚礼，实际是荷兰黄金时代风俗画：动作、表情、吃喝、音乐都可能带有幽默和道德寓意。",
    "viewTips": [
      "像看电影一样扫视：谁在吃、谁在喝、谁在看谁。",
      "找最夸张的动作，它通常是画面叙事的入口。",
      "留意孩子、乐器、酒杯、旁观者这些小线索。"
    ],
    "keywords": [
      "Jan Steen",
      "Dutch Golden Age",
      "genre painting",
      "moralizing scene",
      "peasant wedding"
    ],
    "compare": "戈雅肖像：一个画权力中心，一个画日常社会，但都不只是记录现实。",
    "imageStatus": "本地作品图（已缓存）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2F10239%2F&embed=image.url",
    "localImage": "assets/artworks/jan-steen-peasant-wedding.webp"
  },
  {
    "id": "juan-zurbaran-still-life",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 7,
    "order": 21,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "水果静物",
    "titleEn": "Still Life with Fruit",
    "artistZh": "胡安·德·苏巴朗",
    "artistEn": "Juan de Zurbarán",
    "date": "约1640年",
    "medium": "布面油画",
    "tags": [
      "西班牙静物",
      "bodegón",
      "暗背景"
    ],
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/199673/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "summary": "静物不是“画得像”那么简单，而是用光、暗背景、物体间距和质感制造一种近乎凝视的安静力量。",
    "viewTips": [
      "先看水果、盘沿、叶子和阴影的质感是否被分开。",
      "再看物体之间的空隙是否像几何结构。",
      "最后看黑暗背景如何让水果像被供奉出来。"
    ],
    "keywords": [
      "Juan de Zurbarán",
      "Spanish still life",
      "bodegón",
      "dark ground",
      "geometry"
    ],
    "compare": "莫奈《退潮时的特鲁维尔防波堤》：一个让世界凝固，一个让世界化成光和空气。",
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2F199673%2F&embed=image.url"
  },
  {
    "id": "monet-trouville",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 8,
    "order": 31,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "退潮时的特鲁维尔防波堤",
    "titleEn": "Breakwater at Trouville, Low Tide",
    "artistZh": "克劳德·莫奈",
    "artistEn": "Claude Monet",
    "date": "1870年",
    "medium": "布面油画",
    "tags": [
      "印象派",
      "海景",
      "光色"
    ],
    "imageFile": "Claude Monet, 1870, Le port de Trouville (Breakwater at Trouville, Low Tide), oil on canvas, 54 x 65.7 cm, Museum of Fine Arts, Budapest.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Claude_Monet,_1870,_Le_port_de_Trouville_(Breakwater_at_Trouville,_Low_Tide),_oil_on_canvas,_54_x_65.7_cm,_Museum_of_Fine_Arts,_Budapest.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "summary": "不是画港口地理，而是画退潮时光线如何改变海、沙、空气和船。",
    "viewTips": [
      "先站远看天空、水面、防波堤和红帆的整体冷色调。",
      "走近看船、人物和倒影并没有被精确描边。",
      "退后看碎笔触如何重新合成空气感。"
    ],
    "keywords": [
      "Monet",
      "Trouville",
      "plein air",
      "low tide",
      "broken brushwork"
    ],
    "compare": "西涅伊·梅尔谢《田野中的红罂粟》：法国印象派与匈牙利户外光色。",
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/monet-trouville.jpg"
  },
  {
    "id": "renoir-young-woman",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 9,
    "order": 32,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "年轻女子肖像",
    "titleEn": "Portrait of a Young Woman",
    "artistZh": "皮埃尔-奥古斯特·雷诺阿",
    "artistEn": "Pierre-Auguste Renoir",
    "date": "约1900年 / 馆方亦有约1895年说明",
    "medium": "布面油画",
    "tags": [
      "印象派人物",
      "肉色",
      "柔化轮廓"
    ],
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/portrait-of-a-young-woman-2/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "summary": "不要只看“甜美”。要看脸、颈部、衣饰和背景如何通过暖色、松动笔触与柔软边界连在一起。",
    "viewTips": [
      "先看人物轮廓为什么不硬。",
      "再看皮肤、白衣和背景之间的颜色渗透。",
      "最后和戈雅肖像比较：权力心理与现代生活感完全不同。"
    ],
    "keywords": [
      "Renoir",
      "portrait",
      "flesh tones",
      "soft contour",
      "late style"
    ],
    "compare": "戈雅《卡瓦列罗侯爵肖像》：同为肖像，一个冷，一个暖；一个权力，一个肉色。",
    "imageStatus": "本地作品图（已缓存）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fportrait-of-a-young-woman-2%2F&embed=image.url",
    "localImage": "assets/artworks/renoir-young-woman.jpg"
  },
  {
    "id": "szinyei-poppies",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 10,
    "order": 57,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "田野中的红罂粟",
    "titleEn": "Poppies in the Field / Red Poppy in the Field",
    "artistZh": "帕尔·西涅伊·梅尔谢",
    "artistEn": "Pál Szinyei Merse",
    "date": "1901–1902年",
    "medium": "布面油画",
    "tags": [
      "匈牙利绘画",
      "户外光色",
      "红绿对比"
    ],
    "imageFile": "Szinyei Merse, Pál - Poppies in the Field (1902).jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Szinyei_Merse,_P%C3%A1l_-_Poppies_in_the_Field_(1902).jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "summary": "这件适合和莫奈放在一起看：红色像视觉火花，人物不再只是叙事主角，也成为色彩结构的一部分。",
    "viewTips": [
      "先看红罂粟和绿色田野的视觉冲突。",
      "再看人物是否被色彩关系吸收，而不只是故事主角。",
      "最后比较它和莫奈：一个海边退潮，一个田野阳光。"
    ],
    "keywords": [
      "Pál Szinyei Merse",
      "Hungarian painting",
      "poppies",
      "plein air",
      "red-green contrast"
    ],
    "compare": "莫奈《退潮时的特鲁维尔防波堤》：同样关心户外光，但文化位置不同。",
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/szinyei-poppies.jpg"
  },
  {
    "id": "munkacsy-two-boys",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 11,
    "order": 58,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "桌旁的两个少年（《乡村英雄》习作）",
    "titleEn": "Study for The Village Hero / Two Boys at the Table",
    "artistZh": "米哈伊·蒙卡奇",
    "artistEn": "Mihály Munkácsy",
    "date": "1874年",
    "medium": "布面油画",
    "tags": [
      "匈牙利现实主义",
      "社会叙事",
      "暗部"
    ],
    "imageFile": "Munkácsy Két legény az asztalnál.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Munk%C3%A1csy_K%C3%A9t_leg%C3%A9ny_az_asztaln%C3%A1l.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "summary": "不是靠明亮好看取胜，而是靠人物关系、桌面结构、暗部空间和故事未说破的压力。",
    "viewTips": [
      "先看桌子怎样把两个人的关系组织起来。",
      "再看手、脸和身体姿态透露出的心理状态。",
      "最后看暗部如何压缩空间，让叙事更沉。"
    ],
    "keywords": [
      "Mihály Munkácsy",
      "Hungarian Realism",
      "genre painting",
      "The Village Hero",
      "social narrative"
    ],
    "compare": "雷诺阿《年轻女子肖像》：一个是现代人物的温柔光色，一个是现实主义叙事张力。",
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/munkacsy-two-boys.jpg"
  },
  {
    "id": "vaszary-birthday-cake",
    "exhibition": "masters",
    "focus": true,
    "focusOrder": 12,
    "order": 66,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "生日蛋糕",
    "titleEn": "Birthday Cake",
    "artistZh": "亚诺什·沃萨里",
    "artistEn": "János Vaszary",
    "date": "约1930年",
    "medium": "油画",
    "tags": [
      "匈牙利现代主义",
      "装饰色彩",
      "20世纪"
    ],
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/birthday-cake/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "summary": "适合作为现代转向的收束：画面更轻快、装饰、平面化，和提香、克拉纳赫的古典图像逻辑完全不同。",
    "viewTips": [
      "先看颜色是否更像节奏，而不只是描摹。",
      "再看空间是否比古典绘画更平面。",
      "最后回想提香：从神圣身体到现代生活，绘画语言已经换了一套。"
    ],
    "keywords": [
      "János Vaszary",
      "Hungarian modernism",
      "decorative colour",
      "1930s",
      "modern life"
    ],
    "compare": "提香《圣母子与圣保罗》：从古典神圣图像跳到20世纪现代视觉。",
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fbirthday-cake%2F&embed=image.url"
  },
  {
    "id": "hans-von-aachen-bacchus-silenus",
    "exhibition": "masters",
    "focus": false,
    "order": 3,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "巴克斯与西勒诺斯",
    "titleEn": "Bacchus and Silenus",
    "artistZh": "汉斯·冯·亚琛",
    "artistEn": "Hans von Aachen",
    "date": "约1610年",
    "medium": "油画",
    "tags": [
      "神话",
      "酒神",
      "矫饰主义"
    ],
    "summary": "神话题材；看身体、酒神属性和夸张姿态。",
    "imageFile": "Hans von Aachen - Bacchus with Silen c. 1608.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hans_von_Aachen_-_Bacchus_with_Silen_c._1608.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "viewTips": [
      "神话题材；看身体、酒神属性和夸张姿态。"
    ],
    "keywords": [
      "神话",
      "酒神",
      "矫饰主义"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/hans-von-aachen-bacchus-silenus.jpg"
  },
  {
    "id": "anonymous-madonna-child-st-louis",
    "exhibition": "masters",
    "focus": false,
    "order": 5,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "圣母子与图卢兹的圣路易",
    "titleEn": "Madonna and Child with Saint Louis of Toulouse",
    "artistZh": "佚名",
    "artistEn": "Anonymous",
    "date": "约1520年",
    "medium": "油画",
    "tags": [
      "圣母子",
      "圣徒",
      "宗教图像"
    ],
    "summary": "圣母子与圣徒题材；重点看人物属性和空间安排。",
    "imageFile": "Polidoro da lanciano-la virgen con el niño y san luis-budapest.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Polidoro_da_lanciano-la_virgen_con_el_ni%C3%B1o_y_san_luis-budapest.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "viewTips": [
      "圣母子与圣徒题材；重点看人物属性和空间安排。"
    ],
    "keywords": [
      "圣母子",
      "圣徒",
      "宗教图像"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "museumPage": "https://www.mfab.hu/artworks/12114/",
    "localImage": "assets/artworks/anonymous-madonna-child-st-louis.jpg"
  },
  {
    "id": "anonymous-madonna-child-dorothy",
    "exhibition": "masters",
    "focus": false,
    "order": 6,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "圣母子与圣多萝西娅",
    "titleEn": "Madonna and Child with Saint Dorothea",
    "artistZh": "佚名",
    "artistEn": "Anonymous",
    "date": "16世纪上半叶",
    "medium": "油画",
    "tags": [
      "圣母子",
      "圣徒",
      "宗教图像"
    ],
    "summary": "看圣徒属性、圣母子关系和早期宗教图像的稳定结构。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/madonna-and-child-with-saint-dorothy/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看圣徒属性、圣母子关系和早期宗教图像的稳定结构。"
    ],
    "keywords": [
      "圣母子",
      "圣徒",
      "宗教图像"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fmadonna-and-child-with-saint-dorothy%2F&embed=image.url"
  },
  {
    "id": "bonifacio-workshop-summer",
    "exhibition": "masters",
    "focus": false,
    "order": 7,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "夏",
    "titleEn": "Summer",
    "artistZh": "博尼法奇奥·委罗内塞工作室",
    "artistEn": "Workshop of Bonifacio Veronese",
    "date": "1550–1553年",
    "medium": "油画",
    "tags": [
      "季节寓意",
      "威尼斯",
      "工作室"
    ],
    "summary": "季节寓意题材；留意人物、农作物与季节象征。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/summer/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "季节寓意题材；留意人物、农作物与季节象征。"
    ],
    "keywords": [
      "季节寓意",
      "威尼斯",
      "工作室"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fsummer%2F&embed=image.url"
  },
  {
    "id": "bonifacio-workshop-autumn",
    "exhibition": "masters",
    "focus": false,
    "order": 8,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "秋",
    "titleEn": "Autumn",
    "artistZh": "博尼法奇奥·委罗内塞工作室",
    "artistEn": "Workshop of Bonifacio Veronese",
    "date": "1550–1553年",
    "medium": "油画",
    "tags": [
      "季节寓意",
      "威尼斯",
      "工作室"
    ],
    "summary": "和《夏》一起看，比较季节如何通过人物和物象表达。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/autumn/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "和《夏》一起看，比较季节如何通过人物和物象表达。"
    ],
    "keywords": [
      "季节寓意",
      "威尼斯",
      "工作室"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fautumn%2F&embed=image.url",
    "localImage": "assets/artworks/bonifacio-workshop-autumn.webp"
  },
  {
    "id": "tintoretto-workshop-doge-loredano",
    "exhibition": "masters",
    "focus": false,
    "order": 9,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "总督彼得罗·洛雷达诺肖像",
    "titleEn": "Portrait of Doge Pietro Loredano",
    "artistZh": "雅各布·丁托列托工作室",
    "artistEn": "Workshop of Jacopo Tintoretto",
    "date": "约1567–1570年",
    "medium": "油画",
    "tags": [
      "威尼斯",
      "肖像",
      "工作室"
    ],
    "summary": "看威尼斯权力肖像：服饰、姿态和脸部表情如何建立身份。",
    "imageFile": "Tintoretto (and workshop) - Portrait of Doge Pietro Loredano, ca. 1567–1570, 4227.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Tintoretto_(and_workshop)_-_Portrait_of_Doge_Pietro_Loredano,_ca._1567%E2%80%931570,_4227.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "viewTips": [
      "看威尼斯权力肖像：服饰、姿态和脸部表情如何建立身份。"
    ],
    "keywords": [
      "威尼斯",
      "肖像",
      "工作室"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/tintoretto-workshop-doge-loredano.jpg"
  },
  {
    "id": "tiepolo-god-father",
    "exhibition": "masters",
    "focus": false,
    "order": 11,
    "section": "文艺复兴与巴洛克｜宗教、神话、寓意",
    "titleZh": "圣父",
    "titleEn": "God the Father",
    "artistZh": "乔瓦尼·多梅尼科·提埃波罗",
    "artistEn": "Giovanni Domenico Tiepolo",
    "date": "约1770–1775年",
    "medium": "油画",
    "tags": [
      "洛可可",
      "宗教",
      "天界"
    ],
    "summary": "看轻盈笔触、天界空间和晚期威尼斯绘画的明亮感。",
    "imageFile": "Giovanni Domenico Tiepolo - God the Father - WGA22376.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Giovanni_Domenico_Tiepolo_-_God_the_Father_-_WGA22376.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "viewTips": [
      "看轻盈笔触、天界空间和晚期威尼斯绘画的明亮感。"
    ],
    "keywords": [
      "洛可可",
      "宗教",
      "天界"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/tiepolo-god-father.jpg"
  },
  {
    "id": "fetti-young-friar",
    "exhibition": "masters",
    "focus": false,
    "order": 12,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "年轻修士肖像",
    "titleEn": "Portrait of a Young Friar",
    "artistZh": "多梅尼科·费蒂",
    "artistEn": "Domenico Fetti",
    "date": "约1614–1622年",
    "medium": "油画",
    "tags": [
      "肖像",
      "修士",
      "巴洛克"
    ],
    "summary": "看脸部心理、修士衣料和背景暗部。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/9122/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看脸部心理、修士衣料和背景暗部。"
    ],
    "keywords": [
      "肖像",
      "修士",
      "巴洛克"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2F9122%2F&embed=image.url"
  },
  {
    "id": "anonymous-ferdinand",
    "exhibition": "masters",
    "focus": false,
    "order": 13,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "奥地利费迪南大公肖像",
    "titleEn": "Portrait of Archduke Ferdinand of Austria",
    "artistZh": "佚名",
    "artistEn": "Anonymous / after Rubens?",
    "date": "1636年后",
    "medium": "油画",
    "tags": [
      "肖像",
      "摹本",
      "权力"
    ],
    "summary": "现场看归属词：原作、摹本、工作室在艺术史含义上差别很大。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/portrait-of-ferdinand-of-austria/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "现场看归属词：原作、摹本、工作室在艺术史含义上差别很大。"
    ],
    "keywords": [
      "肖像",
      "摹本",
      "权力"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fportrait-of-ferdinand-of-austria%2F&embed=image.url"
  },
  {
    "id": "cornelis-janssens-anna-maria",
    "exhibition": "masters",
    "focus": false,
    "order": 14,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "安娜·玛丽亚·兰普？肖像",
    "titleEn": "Portrait of Anna Maria Lampe?",
    "artistZh": "科内利斯·扬森斯·范·塞乌伦",
    "artistEn": "Cornelis Janssens van Ceulen",
    "date": "1658年",
    "medium": "油画",
    "tags": [
      "肖像",
      "北方",
      "服饰"
    ],
    "summary": "看服饰、面部和身份表达。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/portrait-of-anna-maria-lampe/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看服饰、面部和身份表达。"
    ],
    "keywords": [
      "肖像",
      "北方",
      "服饰"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fportrait-of-anna-maria-lampe%2F&embed=image.url"
  },
  {
    "id": "bartolome-gonzalez-prince",
    "exhibition": "masters",
    "focus": false,
    "order": 15,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "西班牙王子肖像",
    "titleEn": "Portrait of a Spanish Prince",
    "artistZh": "巴尔托洛梅·冈萨雷斯",
    "artistEn": "Bartolomé González",
    "date": "1618年",
    "medium": "油画",
    "tags": [
      "宫廷肖像",
      "西班牙",
      "儿童"
    ],
    "summary": "宫廷儿童肖像：看服装、姿势和王权符号。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/portrait-of-a-spanish-prince/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "宫廷儿童肖像：看服装、姿势和王权符号。"
    ],
    "keywords": [
      "宫廷肖像",
      "西班牙",
      "儿童"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fportrait-of-a-spanish-prince%2F&embed=image.url"
  },
  {
    "id": "mazo-nobleman",
    "exhibition": "masters",
    "focus": false,
    "order": 16,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "贵族男子肖像",
    "titleEn": "Portrait of a Nobleman",
    "artistZh": "胡安·包蒂斯塔·马丁内斯·德尔·马索",
    "artistEn": "Juan Bautista Martínez del Mazo",
    "date": "约1665年",
    "medium": "油画",
    "tags": [
      "肖像",
      "西班牙",
      "宫廷"
    ],
    "summary": "留意脸部、黑衣和身份姿态。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/portrait-of-a-nobleman/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "留意脸部、黑衣和身份姿态。"
    ],
    "keywords": [
      "肖像",
      "西班牙",
      "宫廷"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fportrait-of-a-nobleman%2F&embed=image.url"
  },
  {
    "id": "isaac-van-duynen-fish",
    "exhibition": "masters",
    "focus": false,
    "order": 19,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "鱼的静物",
    "titleEn": "Still Life with Fish",
    "artistZh": "伊萨克·范·杜伊嫩",
    "artistEn": "Isaac van Duynen",
    "date": "1673年",
    "medium": "油画",
    "tags": [
      "静物",
      "鱼",
      "质感"
    ],
    "summary": "看鳞片、湿润表面和光如何区分材质。",
    "imageFile": "Isaac van Duynen - Fish Still Life.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Isaac_van_Duynen_-_Fish_Still_Life.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "viewTips": [
      "看鳞片、湿润表面和光如何区分材质。"
    ],
    "keywords": [
      "静物",
      "鱼",
      "质感"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "museumPage": "https://www.mfab.hu/artworks/still-life-with-fish/",
    "localImage": "assets/artworks/isaac-van-duynen-fish.jpg"
  },
  {
    "id": "ruoppolo-fruit",
    "exhibition": "masters",
    "focus": false,
    "order": 20,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "水果静物",
    "titleEn": "Still Life with Fruit",
    "artistZh": "朱塞佩·鲁奥波洛",
    "artistEn": "Giuseppe Ruoppolo",
    "date": "约1670年代",
    "medium": "油画",
    "tags": [
      "静物",
      "水果",
      "意大利"
    ],
    "summary": "和苏巴朗静物对照：看意大利静物的丰盛与装饰性。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/fruit-still-life/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "和苏巴朗静物对照：看意大利静物的丰盛与装饰性。"
    ],
    "keywords": [
      "静物",
      "水果",
      "意大利"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Ffruit-still-life%2F&embed=image.url"
  },
  {
    "id": "molenaer-peter-denial",
    "exhibition": "masters",
    "focus": false,
    "order": 22,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "圣彼得不认主",
    "titleEn": "The Denial of Saint Peter",
    "artistZh": "让·米恩斯·莫莱奈尔",
    "artistEn": "Jan Miense Molenaer",
    "date": "1633年",
    "medium": "油画",
    "tags": [
      "宗教叙事",
      "风俗化",
      "荷兰"
    ],
    "summary": "宗教故事被放入类似日常场景中，留意人物互动。",
    "imageFile": "Jan Miense Molenaer 006.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Jan_Miense_Molenaer_006.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "viewTips": [
      "宗教故事被放入类似日常场景中，留意人物互动。"
    ],
    "keywords": [
      "宗教叙事",
      "风俗化",
      "荷兰"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "museumPage": "https://www.mfab.hu/artworks/the-denial-of-saint-peter/",
    "localImage": "assets/artworks/molenaer-peter-denial.jpg"
  },
  {
    "id": "salci-dead-fox",
    "exhibition": "masters",
    "focus": false,
    "order": 23,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "有死狐狸与刺猬的静物",
    "titleEn": "Still Life with Dead Fox and Hedgehog",
    "artistZh": "加布里埃莱·萨尔奇",
    "artistEn": "Gabriele Salci",
    "date": "1720年",
    "medium": "油画",
    "tags": [
      "静物",
      "动物",
      "狩猎"
    ],
    "summary": "看毛发、刺、死亡动物和猎物静物传统。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/still-life-with-a-fox/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看毛发、刺、死亡动物和猎物静物传统。"
    ],
    "keywords": [
      "静物",
      "动物",
      "狩猎"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fstill-life-with-a-fox%2F&embed=image.url",
    "localImage": "assets/artworks/salci-dead-fox.webp"
  },
  {
    "id": "quadal-young-hunter",
    "exhibition": "masters",
    "focus": false,
    "order": 24,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "休憩的少年猎人",
    "titleEn": "Resting Young Hunter",
    "artistZh": "马丁·费迪南德·夸达尔",
    "artistEn": "Martin Ferdinand Quadal",
    "date": "1786年",
    "medium": "油画",
    "tags": [
      "狩猎",
      "肖像",
      "18世纪"
    ],
    "summary": "看人物、猎具和动物如何共同塑造身份。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/resting-young-hunter/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看人物、猎具和动物如何共同塑造身份。"
    ],
    "keywords": [
      "狩猎",
      "肖像",
      "18世纪"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fresting-young-hunter%2F&embed=image.url",
    "localImage": "assets/artworks/quadal-young-hunter.webp"
  },
  {
    "id": "roos-children-animals",
    "exhibition": "masters",
    "focus": false,
    "order": 25,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "儿童与休憩动物",
    "titleEn": "Children with Resting Animals",
    "artistZh": "约翰·海因里希·罗斯",
    "artistEn": "Johann Heinrich Roos",
    "date": "1672年",
    "medium": "油画",
    "tags": [
      "动物",
      "儿童",
      "田园"
    ],
    "summary": "看动物群、儿童和田园气氛的组合。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/children-with-resting-animals/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看动物群、儿童和田园气氛的组合。"
    ],
    "keywords": [
      "动物",
      "儿童",
      "田园"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fchildren-with-resting-animals%2F&embed=image.url"
  },
  {
    "id": "vernet-ruins",
    "exhibition": "masters",
    "focus": false,
    "order": 26,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "城堡遗迹",
    "titleEn": "Castle Ruins",
    "artistZh": "克劳德-约瑟夫·韦尔内",
    "artistEn": "Claude-Joseph Vernet",
    "date": "约1750年",
    "medium": "油画",
    "tags": [
      "风景",
      "遗迹",
      "18世纪"
    ],
    "summary": "看废墟风景如何制造崇高感和时间感。",
    "imageFile": "Claude Joseph Vernet 001.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Claude_Joseph_Vernet_001.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "viewTips": [
      "看废墟风景如何制造崇高感和时间感。"
    ],
    "keywords": [
      "风景",
      "遗迹",
      "18世纪"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "museumPage": "https://www.mfab.hu/artworks/10609/",
    "localImage": "assets/artworks/vernet-ruins.jpg"
  },
  {
    "id": "marieschi-venice",
    "exhibition": "masters",
    "focus": false,
    "order": 27,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "威尼斯狮子小广场",
    "titleEn": "The Piazzetta in Venice",
    "artistZh": "米歇尔·马里斯奇",
    "artistEn": "Michele Marieschi",
    "date": "约1735年",
    "medium": "油画",
    "tags": [
      "威尼斯风景",
      "城市景观",
      "veduta"
    ],
    "summary": "看建筑透视、广场空间和威尼斯城市形象。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/the-piazzetta-in-venice/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看建筑透视、广场空间和威尼斯城市形象。"
    ],
    "keywords": [
      "威尼斯风景",
      "城市景观",
      "veduta"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fthe-piazzetta-in-venice%2F&embed=image.url"
  },
  {
    "id": "beerstraten-winter-nieuwkoop",
    "exhibition": "masters",
    "focus": false,
    "order": 28,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "冬日的纽科普村",
    "titleEn": "The Village of Nieuwkoop in Winter",
    "artistZh": "扬·阿布拉罕斯佐恩·范·比尔斯特拉滕",
    "artistEn": "Jan Abrahamsz. van Beerstraten",
    "date": "1660年代初",
    "medium": "油画",
    "tags": [
      "冬景",
      "荷兰",
      "村庄"
    ],
    "summary": "看冰面、天空和人群如何组织冬日风景。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/the-village-of-nieuwkoop-in-winter/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看冰面、天空和人群如何组织冬日风景。"
    ],
    "keywords": [
      "冬景",
      "荷兰",
      "村庄"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fthe-village-of-nieuwkoop-in-winter%2F&embed=image.url"
  },
  {
    "id": "fidanza-winter-river",
    "exhibition": "masters",
    "focus": false,
    "order": 29,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "冬季河畔风景",
    "titleEn": "Winter River Landscape",
    "artistZh": "弗朗切斯科·菲丹察",
    "artistEn": "Francesco Fidanza",
    "date": "1808年",
    "medium": "油画",
    "tags": [
      "冬景",
      "河流",
      "风景"
    ],
    "summary": "看寒冷色调、河岸空间和人物点景。",
    "imageFile": "",
    "sourceUrl": "https://www.mfab.hu/artworks/winter-river-landscape/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看寒冷色调、河岸空间和人物点景。"
    ],
    "keywords": [
      "冬景",
      "河流",
      "风景"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fwww.mfab.hu%2Fartworks%2Fwinter-river-landscape%2F&embed=image.url"
  },
  {
    "id": "nome-imaginary-church",
    "exhibition": "masters",
    "focus": false,
    "order": 30,
    "section": "文艺复兴与巴洛克｜肖像、风俗、静物、风景",
    "titleZh": "想象中的教堂内部",
    "titleEn": "Interior of an Imaginary Gothic Church",
    "artistZh": "弗朗索瓦·德·诺梅",
    "artistEn": "François de Nomé",
    "date": "约1621–1623年",
    "medium": "布面油画",
    "tags": [
      "幻想建筑",
      "教堂内部",
      "巴洛克"
    ],
    "summary": "看真实建筑逻辑与幻想空间的混合，像早期“超现实”的舞台。",
    "imageFile": "Interior of an imaginary gothic church with classical motifs).jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Interior_of_an_imaginary_gothic_church_with_classical_motifs).jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "viewTips": [
      "看真实建筑逻辑与幻想空间的混合，像早期“超现实”的舞台。"
    ],
    "keywords": [
      "幻想建筑",
      "教堂内部",
      "巴洛克"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "localImage": "assets/artworks/nome-imaginary-church.jpg"
  },
  {
    "id": "corot-coubron",
    "exhibition": "masters",
    "focus": false,
    "order": 33,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "库布龙追忆",
    "titleEn": "Reminiscence of Coubron",
    "artistZh": "卡米耶·柯罗",
    "artistEn": "Camille Corot",
    "date": "1872年",
    "medium": "油画",
    "tags": [
      "风景",
      "调性",
      "莫奈前史"
    ],
    "summary": "把它放在莫奈之前看：柯罗强调空气、银灰调性和风景诗意。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/reminiscence-of-coubron/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "把它放在莫奈之前看：柯罗强调空气、银灰调性和风景诗意。"
    ],
    "keywords": [
      "风景",
      "调性",
      "莫奈前史"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Freminiscence-of-coubron%2F&embed=image.url"
  },
  {
    "id": "courbet-rocky-landscape",
    "exhibition": "masters",
    "focus": false,
    "order": 34,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "岩石风景",
    "titleEn": "Rocky Landscape",
    "artistZh": "古斯塔夫·库尔贝",
    "artistEn": "Gustave Courbet",
    "date": "1872年",
    "medium": "油画",
    "tags": [
      "现实主义",
      "风景",
      "厚重"
    ],
    "summary": "看岩石、泥土和厚重笔触，是莫奈之前更结实的现实主义风景。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/rocky-landscape/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看岩石、泥土和厚重笔触，是莫奈之前更结实的现实主义风景。"
    ],
    "keywords": [
      "现实主义",
      "风景",
      "厚重"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Frocky-landscape%2F&embed=image.url"
  },
  {
    "id": "alfred-stevens-harp",
    "exhibition": "masters",
    "focus": false,
    "order": 35,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "持竖琴的女子",
    "titleEn": "Woman with a Harp",
    "artistZh": "阿尔弗莱德·斯蒂文斯",
    "artistEn": "Alfred Stevens",
    "date": "19世纪下半叶",
    "medium": "油画",
    "tags": [
      "女性形象",
      "室内",
      "19世纪"
    ],
    "summary": "看服饰、乐器和现代室内生活。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/woman-with-a-harp/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看服饰、乐器和现代室内生活。"
    ],
    "keywords": [
      "女性形象",
      "室内",
      "19世纪"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fwoman-with-a-harp%2F&embed=image.url"
  },
  {
    "id": "boutibonne-majthenyi",
    "exhibition": "masters",
    "focus": false,
    "order": 36,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "拉斯洛·迈泰尼男爵夫人肖像",
    "titleEn": "Portrait of Baroness László Majthényi",
    "artistZh": "爱德华·布蒂博纳",
    "artistEn": "Edouard Boutibonne",
    "date": "1862年",
    "medium": "油画",
    "tags": [
      "肖像",
      "贵族",
      "19世纪"
    ],
    "summary": "看贵族身份如何通过服装、姿态和画面空间呈现。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/portrait-of-baroness-laszlo-majthenyi/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看贵族身份如何通过服装、姿态和画面空间呈现。"
    ],
    "keywords": [
      "肖像",
      "贵族",
      "19世纪"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fportrait-of-baroness-laszlo-majthenyi%2F&embed=image.url"
  },
  {
    "id": "israels-orphan",
    "exhibition": "masters",
    "focus": false,
    "order": 37,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "卡特韦克的孤女",
    "titleEn": "Orphan Girl of Katwijk",
    "artistZh": "约瑟夫·伊斯拉埃尔斯",
    "artistEn": "Jozef Israëls",
    "date": "19世纪下半叶",
    "medium": "油画",
    "tags": [
      "现实主义",
      "人物",
      "情感"
    ],
    "summary": "看人物情绪、贫困题材和现实主义同情。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/orphan-girl-of-katwijk/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看人物情绪、贫困题材和现实主义同情。"
    ],
    "keywords": [
      "现实主义",
      "人物",
      "情感"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Forphan-girl-of-katwijk%2F&embed=image.url"
  },
  {
    "id": "bisschop-sulking",
    "exhibition": "masters",
    "focus": false,
    "order": 38,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "怄气",
    "titleEn": "Sulking",
    "artistZh": "克里斯托费尔·比斯霍普",
    "artistEn": "Christoffel Bisschop",
    "date": "19世纪下半叶",
    "medium": "油画",
    "tags": [
      "风俗",
      "室内",
      "人物"
    ],
    "summary": "日常情绪题材；看姿态、表情和室内叙事。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/sulking/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "日常情绪题材；看姿态、表情和室内叙事。"
    ],
    "keywords": [
      "风俗",
      "室内",
      "人物"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fsulking%2F&embed=image.url"
  },
  {
    "id": "reiter-jeweller",
    "exhibition": "masters",
    "focus": false,
    "order": 39,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "小珠宝商",
    "titleEn": "The Little Jeweller",
    "artistZh": "约翰·巴普蒂斯特·赖特",
    "artistEn": "Johann Baptist Reiter",
    "date": "1850年",
    "medium": "油画",
    "tags": [
      "儿童",
      "职业",
      "风俗"
    ],
    "summary": "看儿童形象、物件细节和小型叙事。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/the-little-jeweller/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看儿童形象、物件细节和小型叙事。"
    ],
    "keywords": [
      "儿童",
      "职业",
      "风俗"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fthe-little-jeweller%2F&embed=image.url"
  },
  {
    "id": "hans-canon-man",
    "exhibition": "masters",
    "focus": false,
    "order": 40,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "男子肖像",
    "titleEn": "Portrait of a Man",
    "artistZh": "汉斯·卡农",
    "artistEn": "Hans Canon",
    "date": "19世纪下半叶",
    "medium": "油画",
    "tags": [
      "肖像",
      "19世纪",
      "男性"
    ],
    "summary": "看面部塑造和深色背景中的人物存在感。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/portrait-of-a-man-3/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看面部塑造和深色背景中的人物存在感。"
    ],
    "keywords": [
      "肖像",
      "19世纪",
      "男性"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fportrait-of-a-man-3%2F&embed=image.url"
  },
  {
    "id": "johann-ender-young-woman",
    "exhibition": "masters",
    "focus": false,
    "order": 41,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "年轻女子肖像",
    "titleEn": "Portrait of a Young Woman",
    "artistZh": "约翰·内波穆克·恩德尔",
    "artistEn": "Johann Nepomuk Ender",
    "date": "1837年",
    "medium": "油画",
    "tags": [
      "肖像",
      "19世纪",
      "女性"
    ],
    "summary": "看早19世纪肖像的发型、服饰和姿态规范。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/portrait-of-a-young-woman-3/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看早19世纪肖像的发型、服饰和姿态规范。"
    ],
    "keywords": [
      "肖像",
      "19世纪",
      "女性"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fportrait-of-a-young-woman-3%2F&embed=image.url"
  },
  {
    "id": "lefebvre-water-nymph",
    "exhibition": "masters",
    "focus": false,
    "order": 42,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "水中精灵",
    "titleEn": "Water Nymph",
    "artistZh": "朱尔·勒费弗尔",
    "artistEn": "Jules Lefebvre",
    "date": "1882年",
    "medium": "油画",
    "tags": [
      "学院派",
      "神话",
      "裸体"
    ],
    "summary": "看学院派对人体、光滑表面和神话题材的处理。",
    "imageFile": "Ondine Lefebvre.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Ondine_Lefebvre.jpg",
    "sourceLabel": "Wikimedia Commons / Wikidata｜馆藏作品图像",
    "viewTips": [
      "看学院派对人体、光滑表面和神话题材的处理。"
    ],
    "keywords": [
      "学院派",
      "神话",
      "裸体"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "本地作品图（已缓存）",
    "museumPage": "https://www.mfab.hu/artworks/ondine/",
    "localImage": "assets/artworks/lefebvre-water-nymph.jpg"
  },
  {
    "id": "maurice-denis-maternity",
    "exhibition": "masters",
    "focus": false,
    "order": 43,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "母性",
    "titleEn": "Maternity",
    "artistZh": "莫里斯·德尼",
    "artistEn": "Maurice Denis",
    "date": "1895年",
    "medium": "油画",
    "tags": [
      "纳比派",
      "母性",
      "现代装饰"
    ],
    "summary": "看平面化、装饰性和宗教/家庭情感的现代转译。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/maternity/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看平面化、装饰性和宗教/家庭情感的现代转译。"
    ],
    "keywords": [
      "纳比派",
      "母性",
      "现代装饰"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fmaternity%2F&embed=image.url"
  },
  {
    "id": "schleich-field-cattle",
    "exhibition": "masters",
    "focus": false,
    "order": 44,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "田野与牛群",
    "titleEn": "Field with Cattle",
    "artistZh": "老爱德华·施莱希",
    "artistEn": "Eduard Schleich the Elder",
    "date": "19世纪中叶",
    "medium": "油画",
    "tags": [
      "风景",
      "动物",
      "田野"
    ],
    "summary": "看田野空间、牛群和大气效果。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/field-with-cattle/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看田野空间、牛群和大气效果。"
    ],
    "keywords": [
      "风景",
      "动物",
      "田野"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Ffield-with-cattle%2F&embed=image.url"
  },
  {
    "id": "lier-mill",
    "exhibition": "masters",
    "focus": false,
    "order": 45,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "磨坊",
    "titleEn": "Mill",
    "artistZh": "阿道夫·海因里希·利尔",
    "artistEn": "Adolf Heinrich Lier",
    "date": "1876年后",
    "medium": "油画",
    "tags": [
      "风景",
      "磨坊",
      "19世纪"
    ],
    "summary": "看建筑、河流/田野和光线氛围。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/mill/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看建筑、河流/田野和光线氛围。"
    ],
    "keywords": [
      "风景",
      "磨坊",
      "19世纪"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fmill%2F&embed=image.url"
  },
  {
    "id": "daubigny-seine-oise",
    "exhibition": "masters",
    "focus": false,
    "order": 46,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "塞纳河与瓦兹河的交汇处",
    "titleEn": "The Confluence of the Seine and Oise",
    "artistZh": "夏尔·弗朗索瓦·多比尼",
    "artistEn": "Charles-François Daubigny",
    "date": "1868年",
    "medium": "油画",
    "tags": [
      "巴比松",
      "河流",
      "莫奈前史"
    ],
    "summary": "莫奈前史之一：看河面、船、天空如何接近户外光线问题。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/the-confluence-of-the-seine-and-oise/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "莫奈前史之一：看河面、船、天空如何接近户外光线问题。"
    ],
    "keywords": [
      "巴比松",
      "河流",
      "莫奈前史"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fthe-confluence-of-the-seine-and-oise%2F&embed=image.url"
  },
  {
    "id": "luigi-nono-walking-woman",
    "exhibition": "masters",
    "focus": false,
    "order": 47,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "漫步的女子",
    "titleEn": "Walking Woman",
    "artistZh": "路易吉·诺诺",
    "artistEn": "Luigi Nono",
    "date": "1891年",
    "medium": "油画",
    "tags": [
      "人物",
      "日常",
      "19世纪"
    ],
    "summary": "看人物姿态、背景空间和日常生活气息。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/walking-woman/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看人物姿态、背景空间和日常生活气息。"
    ],
    "keywords": [
      "人物",
      "日常",
      "19世纪"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fwalking-woman%2F&embed=image.url"
  },
  {
    "id": "leo-putz-idyll",
    "exhibition": "masters",
    "focus": false,
    "order": 48,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "田园诗",
    "titleEn": "Idyll",
    "artistZh": "列奥·普茨",
    "artistEn": "Leo Putz",
    "date": "19世纪晚期",
    "medium": "油画",
    "tags": [
      "田园",
      "人物",
      "现代"
    ],
    "summary": "看晚19世纪田园题材如何变得轻快、装饰。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/idyll/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看晚19世纪田园题材如何变得轻快、装饰。"
    ],
    "keywords": [
      "田园",
      "人物",
      "现代"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fidyll%2F&embed=image.url"
  },
  {
    "id": "normann-norwegian-fjord",
    "exhibition": "masters",
    "focus": false,
    "order": 49,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "挪威峡湾",
    "titleEn": "Norwegian Fjord",
    "artistZh": "阿德尔斯滕·诺尔曼",
    "artistEn": "Adelsteen Normann",
    "date": "1870–1887年",
    "medium": "油画",
    "tags": [
      "风景",
      "峡湾",
      "北欧"
    ],
    "summary": "看山、水、船和北欧风景的纵深。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/norwegian-fjord/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看山、水、船和北欧风景的纵深。"
    ],
    "keywords": [
      "风景",
      "峡湾",
      "北欧"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fnorwegian-fjord%2F&embed=image.url"
  },
  {
    "id": "menzler-spring-day",
    "exhibition": "masters",
    "focus": false,
    "order": 50,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "春日",
    "titleEn": "Spring Day",
    "artistZh": "威廉·门茨勒",
    "artistEn": "Wilhelm Menzler",
    "date": "1909年",
    "medium": "油画",
    "tags": [
      "春天",
      "人物",
      "现代"
    ],
    "summary": "看明亮季节感和人物生活气息。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/spring-day/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看明亮季节感和人物生活气息。"
    ],
    "keywords": [
      "春天",
      "人物",
      "现代"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fspring-day%2F&embed=image.url"
  },
  {
    "id": "slevogt-flowers",
    "exhibition": "masters",
    "focus": false,
    "order": 51,
    "section": "1800年后的国际艺术珍藏",
    "titleZh": "花卉静物",
    "titleEn": "Still Life with Flowers",
    "artistZh": "马克斯·斯列福格特",
    "artistEn": "Max Slevogt",
    "date": "1921年",
    "medium": "油画",
    "tags": [
      "静物",
      "花卉",
      "现代"
    ],
    "summary": "看松动笔触、花卉色彩和现代静物。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/still-life-with-flowers/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看松动笔触、花卉色彩和现代静物。"
    ],
    "keywords": [
      "静物",
      "花卉",
      "现代"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fstill-life-with-flowers%2F&embed=image.url"
  },
  {
    "id": "borsos-carrier-pigeon",
    "exhibition": "masters",
    "focus": false,
    "order": 52,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "飞鸽传书",
    "titleEn": "Carrier Pigeon",
    "artistZh": "约瑟夫·鲍尔绍什",
    "artistEn": "József Borsos",
    "date": "1855年",
    "medium": "油画",
    "tags": [
      "匈牙利",
      "比德迈",
      "人物"
    ],
    "summary": "看叙事细节、人物表情和19世纪中欧趣味。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/49412/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看叙事细节、人物表情和19世纪中欧趣味。"
    ],
    "keywords": [
      "匈牙利",
      "比德迈",
      "人物"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2F49412%2F&embed=image.url"
  },
  {
    "id": "barabas-woman",
    "exhibition": "masters",
    "focus": false,
    "order": 53,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "女子肖像",
    "titleEn": "Portrait of a Woman",
    "artistZh": "米克洛什·巴拉巴什",
    "artistEn": "Miklós Barabás",
    "date": "1844年",
    "medium": "油画",
    "tags": [
      "匈牙利肖像",
      "比德迈",
      "女性"
    ],
    "summary": "看中欧比德迈肖像的服饰、姿态和温和气氛。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/52683/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看中欧比德迈肖像的服饰、姿态和温和气氛。"
    ],
    "keywords": [
      "匈牙利肖像",
      "比德迈",
      "女性"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2F52683%2F&embed=image.url"
  },
  {
    "id": "szekely-leda-swan",
    "exhibition": "masters",
    "focus": false,
    "order": 54,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "丽达与天鹅",
    "titleEn": "Leda and the Swan",
    "artistZh": "贝尔陶兰·塞凯伊",
    "artistEn": "Bertalan Székely",
    "date": "1871年后",
    "medium": "油画",
    "tags": [
      "神话",
      "学院派",
      "匈牙利"
    ],
    "summary": "看神话裸体题材与学院训练。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/leda-and-the-swan/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看神话裸体题材与学院训练。"
    ],
    "keywords": [
      "神话",
      "学院派",
      "匈牙利"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fleda-and-the-swan%2F&embed=image.url"
  },
  {
    "id": "lotz-harvest-dance",
    "exhibition": "masters",
    "focus": false,
    "order": 55,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "起舞的农民（丰收节）",
    "titleEn": "Dancing Peasants / Harvest Festival",
    "artistZh": "卡罗伊·洛茨",
    "artistEn": "Károly Lotz",
    "date": "约1860年",
    "medium": "油画",
    "tags": [
      "风俗",
      "丰收",
      "民族"
    ],
    "summary": "看农民形象、节庆动作和民族风俗题材。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/dancing-peasants-harvest-festival/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看农民形象、节庆动作和民族风俗题材。"
    ],
    "keywords": [
      "风俗",
      "丰收",
      "民族"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fdancing-peasants-harvest-festival%2F&embed=image.url"
  },
  {
    "id": "deak-ebner-bride-procession",
    "exhibition": "masters",
    "focus": false,
    "order": 56,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "新娘队伍",
    "titleEn": "Bridal Procession",
    "artistZh": "拉约什·戴克·埃布纳",
    "artistEn": "Lajos Deák Ébner",
    "date": "1888年",
    "medium": "油画",
    "tags": [
      "婚礼",
      "民族风俗",
      "匈牙利"
    ],
    "summary": "和扬·斯滕婚礼题材比较：一个荷兰黄金时代，一个匈牙利民族风俗。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/bridal-procession/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "和扬·斯滕婚礼题材比较：一个荷兰黄金时代，一个匈牙利民族风俗。"
    ],
    "keywords": [
      "婚礼",
      "民族风俗",
      "匈牙利"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fbridal-procession%2F&embed=image.url"
  },
  {
    "id": "reti-figural-landscape",
    "exhibition": "masters",
    "focus": false,
    "order": 59,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "人物风景",
    "titleEn": "Figure Landscape",
    "artistZh": "伊什特万·雷蒂",
    "artistEn": "István Réti",
    "date": "1906年",
    "medium": "油画",
    "tags": [
      "匈牙利",
      "风景",
      "人物"
    ],
    "summary": "看人物与自然景色的融合。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/figure-landscape/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看人物与自然景色的融合。"
    ],
    "keywords": [
      "匈牙利",
      "风景",
      "人物"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Ffigure-landscape%2F&embed=image.url"
  },
  {
    "id": "hollosy-farmyard",
    "exhibition": "masters",
    "focus": false,
    "order": 60,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "农家院落",
    "titleEn": "Farmyard",
    "artistZh": "西蒙·霍洛希",
    "artistEn": "Simon Hollósy",
    "date": "约1910年",
    "medium": "油画",
    "tags": [
      "农家",
      "现实主义",
      "匈牙利"
    ],
    "summary": "看院落空间、生活痕迹和乡村现实感。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/farmyard/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看院落空间、生活痕迹和乡村现实感。"
    ],
    "keywords": [
      "农家",
      "现实主义",
      "匈牙利"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Ffarmyard%2F&embed=image.url"
  },
  {
    "id": "zemplenyi-holiday",
    "exhibition": "masters",
    "focus": false,
    "order": 61,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "假日",
    "titleEn": "Holiday",
    "artistZh": "蒂沃达尔·曾普莱尼",
    "artistEn": "Tivadar Zemplényi",
    "date": "1899年",
    "medium": "油画",
    "tags": [
      "风俗",
      "假日",
      "人物"
    ],
    "summary": "看休闲场景和人物关系。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/holiday/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看休闲场景和人物关系。"
    ],
    "keywords": [
      "风俗",
      "假日",
      "人物"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fholiday%2F&embed=image.url"
  },
  {
    "id": "fenyes-village-street",
    "exhibition": "masters",
    "focus": false,
    "order": 62,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "村街",
    "titleEn": "Village Street",
    "artistZh": "阿道夫·费涅什",
    "artistEn": "Adolf Fényes",
    "date": "1905年",
    "medium": "油画",
    "tags": [
      "村街",
      "现实主义",
      "匈牙利"
    ],
    "summary": "看乡村道路、光线和社会空间。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/village-street/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看乡村道路、光线和社会空间。"
    ],
    "keywords": [
      "村街",
      "现实主义",
      "匈牙利"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fvillage-street%2F&embed=image.url"
  },
  {
    "id": "mednyanszky-alpine",
    "exhibition": "masters",
    "focus": false,
    "order": 63,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "阿尔卑斯山风景",
    "titleEn": "Alpine Landscape",
    "artistZh": "拉斯洛·迈德尼扬斯基",
    "artistEn": "László Mednyánszky",
    "date": "19世纪90年代前半期",
    "medium": "油画",
    "tags": [
      "风景",
      "阿尔卑斯",
      "气氛"
    ],
    "summary": "看山地风景的雾气、冷色和孤独感。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/alpine-landscape/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看山地风景的雾气、冷色和孤独感。"
    ],
    "keywords": [
      "风景",
      "阿尔卑斯",
      "气氛"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Falpine-landscape%2F&embed=image.url"
  },
  {
    "id": "koszta-corn-husking",
    "exhibition": "masters",
    "focus": false,
    "order": 64,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "剥玉米",
    "titleEn": "Husking Corn",
    "artistZh": "约瑟夫·科斯陶",
    "artistEn": "József Koszta",
    "date": "1915年",
    "medium": "油画",
    "tags": [
      "劳动",
      "乡村",
      "色块"
    ],
    "summary": "看劳动题材、浓重色块和人物身体感。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/husking-corn/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看劳动题材、浓重色块和人物身体感。"
    ],
    "keywords": [
      "劳动",
      "乡村",
      "色块"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fhusking-corn%2F&embed=image.url"
  },
  {
    "id": "ziffer-winter-village",
    "exhibition": "masters",
    "focus": false,
    "order": 65,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "冬日村庄",
    "titleEn": "Winter Village",
    "artistZh": "山多尔·齐费尔",
    "artistEn": "Sándor Ziffer",
    "date": "1910年",
    "medium": "油画",
    "tags": [
      "冬景",
      "现代色彩",
      "匈牙利"
    ],
    "summary": "看冬景中的色彩关系和现代绘画感。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/winter-village/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看冬景中的色彩关系和现代绘画感。"
    ],
    "keywords": [
      "冬景",
      "现代色彩",
      "匈牙利"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fwinter-village%2F&embed=image.url"
  },
  {
    "id": "perlrott-terrace",
    "exhibition": "masters",
    "focus": false,
    "order": 67,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "露台上",
    "titleEn": "On the Terrace",
    "artistZh": "伊扎克·佩尔穆特",
    "artistEn": "Izsák Perlmutter",
    "date": "1916年",
    "medium": "油画",
    "tags": [
      "露台",
      "现代生活",
      "匈牙利"
    ],
    "summary": "看现代生活空间与明亮色彩。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/on-the-terrace/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看现代生活空间与明亮色彩。"
    ],
    "keywords": [
      "露台",
      "现代生活",
      "匈牙利"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fon-the-terrace%2F&embed=image.url"
  },
  {
    "id": "molnar-aliga-cliffs",
    "exhibition": "masters",
    "focus": false,
    "order": 68,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "阿利加的悬崖岩岸",
    "titleEn": "Rocky Shore at Aliga",
    "artistZh": "约瑟夫·莫尔纳尔",
    "artistEn": "József Molnár",
    "date": "1870年代",
    "medium": "油画",
    "tags": [
      "风景",
      "岩岸",
      "匈牙利"
    ],
    "summary": "看岩岸、湖面/水面和风景结构。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/rocky-shore-at-aliga/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看岩岸、湖面/水面和风景结构。"
    ],
    "keywords": [
      "风景",
      "岩岸",
      "匈牙利"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Frocky-shore-at-aliga%2F&embed=image.url"
  },
  {
    "id": "lotz-cornelia-white-dress",
    "exhibition": "masters",
    "focus": false,
    "order": 69,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "身着白裙的科尔内利娅·洛茨",
    "titleEn": "Cornelia Lotz in a White Dress",
    "artistZh": "卡罗伊·洛茨",
    "artistEn": "Károly Lotz",
    "date": "约1900年",
    "medium": "油画",
    "tags": [
      "肖像",
      "白裙",
      "家庭"
    ],
    "summary": "看白裙、人物姿态和亲密肖像氛围。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/cornelia-lotz-in-a-white-dress/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看白裙、人物姿态和亲密肖像氛围。"
    ],
    "keywords": [
      "肖像",
      "白裙",
      "家庭"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fcornelia-lotz-in-a-white-dress%2F&embed=image.url"
  },
  {
    "id": "benczur-franciska-apponyi",
    "exhibition": "masters",
    "focus": false,
    "order": 70,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "卡罗伊·拉斯洛夫人、弗朗西斯卡·阿波尼伯爵夫人肖像",
    "titleEn": "Portrait of Mrs Károly László, Countess Franciska Apponyi",
    "artistZh": "久洛·本楚尔",
    "artistEn": "Gyula Benczúr",
    "date": "1898年",
    "medium": "油画",
    "tags": [
      "学院派肖像",
      "贵族",
      "匈牙利"
    ],
    "summary": "看学院派技法、贵族身份与华丽表面。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/portrait-of-mrs-karoly-laszlo-countess-franciska-apponyi/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看学院派技法、贵族身份与华丽表面。"
    ],
    "keywords": [
      "学院派肖像",
      "贵族",
      "匈牙利"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fportrait-of-mrs-karoly-laszlo-countess-franciska-apponyi%2F&embed=image.url"
  },
  {
    "id": "benczur-woman-woods",
    "exhibition": "masters",
    "focus": false,
    "order": 71,
    "section": "匈牙利绘画 1840–1930",
    "titleZh": "林中女子",
    "titleEn": "Woman in the Woods",
    "artistZh": "久洛·本楚尔",
    "artistEn": "Gyula Benczúr",
    "date": "约1875年",
    "medium": "油画",
    "tags": [
      "人物",
      "树林",
      "学院派"
    ],
    "summary": "看人物与林间光线、学院派造型和情节气氛。",
    "imageFile": "",
    "sourceUrl": "https://en.mng.hu/artworks/woman-in-the-woods/",
    "sourceLabel": "Museum of Fine Arts Budapest / Hungarian National Gallery 官方作品页｜个人观展用页面预览图；版权/使用条款以来源页为准",
    "viewTips": [
      "看人物与林间光线、学院派造型和情节气氛。"
    ],
    "keywords": [
      "人物",
      "树林",
      "学院派"
    ],
    "compare": "可和同单元作品对照看题材、光线、笔触和归属词。",
    "focusOrder": 999,
    "imageStatus": "来源页预览图（联网加载；失败时可打开来源页）",
    "imageUrl": "https://api.microlink.io/?url=https%3A%2F%2Fen.mng.hu%2Fartworks%2Fwoman-in-the-woods%2F&embed=image.url"
  }
]

function commons(file: string, width = 900) {
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`
}
function autoPreview(url: string) {
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&embed=image.url`
}
function canAutoPreview(url = "") {
    return /mfab\.hu|mng\.hu|commons\.wikimedia\.org|artsandculture\.google\.com|wga\.hu|wikiart\.org|vaszarygaleria\.hu/i.test(String(url))
}
function uniq(arr: string[]) { return [...new Set(arr.filter(Boolean))] }
function mediaCandidates(a: any, width = 900) {
    const urls: string[] = []
    if (a.imageData) urls.push(a.imageData)
    if (a.localImage) urls.push(a.localImage)
    if (a.imageFile) urls.push(commons(a.imageFile, width))
    if (a.imageUrl) urls.push(a.imageUrl)
    if (a.sourceUrl && canAutoPreview(a.sourceUrl)) urls.push(autoPreview(a.sourceUrl))
    return uniq(urls)
}

function ArtworkImage({ a, width = 420, fit = "cover" }: { a: any; width?: number; fit?: "cover" | "contain" }) {
    const urls = React.useMemo(() => mediaCandidates(a, width), [a, width])
    const [idx, setIdx] = React.useState(0)
    React.useEffect(() => setIdx(0), [a?.id])
    if (!urls.length || idx >= urls.length) {
        return <div style={styles.placeholder}><span style={styles.placeholderMono}>图像暂不可预览</span><b style={styles.placeholderTitle}>{a.titleZh}</b><span style={styles.placeholderSmall}>点开来源页</span></div>
    }
    return <img src={urls[idx]} alt={a.titleZh} loading="lazy" referrerPolicy="no-referrer" onError={() => setIdx(idx + 1)} style={{ width: "100%", height: "100%", objectFit: fit, display: "block", background: "#111" }} />
}

export default function ArtworkGallery() {
    const [query, setQuery] = React.useState("")
    const [active, setActive] = React.useState<any | null>(null)
    const q = query.trim().toLowerCase()
    const filtered = React.useMemo(() => ARTWORKS.filter((a: any) => {
        if (!q) return true
        const hay = [a.titleZh, a.titleEn, a.artistZh, a.artistEn, a.section, a.date, ...(a.tags || []), ...(a.keywords || [])].join(" ").toLowerCase()
        return hay.includes(q)
    }), [q])
    const focus = filtered.filter((a: any) => a.focus).sort((a: any, b: any) => a.focusOrder - b.focusOrder)
    const rest = filtered.filter((a: any) => !a.focus).sort((a: any, b: any) => a.order - b.order)

    const Card = ({ a }: { a: any }) => <button style={styles.card} onClick={() => setActive(a)}>
        <div style={styles.thumb}>
            {a.focus && <span style={styles.badge}>重点{String(a.focusOrder).padStart(2, "0")}</span>}
            <ArtworkImage a={a} width={420} fit="cover" />
        </div>
        <div style={styles.info}>
            <div style={styles.title}>{a.titleZh}</div>
            <div style={styles.artist}>{a.artistZh}</div>
        </div>
    </button>

    return <div style={styles.wrap}>
        <div style={styles.header}>
            <div style={styles.navTitle}>大师之境</div>
            <div style={styles.tabs}>
                {["大师之境", "开馆展 02", "开馆展 03", "开馆展 04", "开馆展 05", "开馆展 06", "开馆展 07"].map((x, i) => <span key={x} style={{ ...styles.chip, ...(i === 0 ? styles.chipActive : null) }}>{x}</span>)}
            </div>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="快速搜：莫奈 / 莎乐美 / 静物 / 匈牙利" style={styles.search} />
        </div>
        <section style={styles.section}>
            <div style={styles.sectionHead}><b>12件重点作品</b><span>{focus.length} / 12</span></div>
            <div style={styles.grid}>{focus.map((a: any) => <Card key={a.id} a={a} />)}</div>
        </section>
        <section style={styles.section}>
            <div style={styles.sectionHead}><b>其余作品</b><span>{rest.length} / 59</span></div>
            <div style={styles.grid}>{rest.map((a: any) => <Card key={a.id} a={a} />)}</div>
        </section>
        <AnimatePresence>
            {active && <motion.div style={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div style={styles.scrim} onClick={() => setActive(null)} />
                <motion.article style={styles.sheet} initial={{ y: 24 }} animate={{ y: 0 }} exit={{ y: 24 }}>
                    <button style={styles.close} onClick={() => setActive(null)}>×</button>
                    <div style={styles.modalMedia}><ArtworkImage a={active} width={1200} fit="contain" /></div>
                    <div style={styles.modalBody}>
                        <div style={styles.eyebrow}>{active.section}</div>
                        <h2 style={styles.h2}>{active.titleZh}</h2>
                        <div style={styles.en}>{active.titleEn}</div>
                        <div style={styles.meta}>{[active.artistZh + (active.artistEn ? " / " + active.artistEn : ""), active.date, active.medium].filter(Boolean).map(x => <span key={x}>{x}</span>)}</div>
                        <p style={styles.lead}>{active.summary}</p>
                        <div style={styles.modalSection}><div style={styles.eyebrow}>站在画前怎么看</div><ol style={styles.tips}>{(active.viewTips || []).map((t: string) => <li key={t}>{t}</li>)}</ol></div>
                        <div style={styles.modalSection}><div style={styles.eyebrow}>关键词</div><div style={styles.keywords}>{(active.keywords || active.tags || []).map((t: string) => <span key={t} style={styles.tag}>{t}</span>)}</div></div>
                        <div style={styles.modalSection}><div style={styles.eyebrow}>对照观看</div><p style={styles.lead}>{active.compare}</p></div>
                        <div style={styles.source}>图片/资料来源：{active.sourceUrl ? <a href={active.sourceUrl} target="_blank" rel="noreferrer" style={{ color: "#e2c77d" }}>{active.sourceLabel || "打开来源页"}</a> : (active.sourceLabel || "来源待补")}。图片状态：{active.imageStatus || "来源页预览"}{active.localImage ? `。本地图片：${active.localImage}` : ""}。</div>
                    </div>
                </motion.article>
            </motion.div>}
        </AnimatePresence>
    </div>
}

const styles: Record<string, React.CSSProperties> = {
    wrap: { width: "100%", minHeight: "100%", background: "#0b0a08", color: "#f3ede2", fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang SC", system-ui, sans-serif' },
    header: { position: "sticky", top: 0, zIndex: 5, padding: 10, background: "rgba(11,10,8,.92)", backdropFilter: "blur(18px)", borderBottom: "1px solid rgba(243,237,226,.12)" },
    navTitle: { fontSize: 16, fontWeight: 800, marginBottom: 8, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
    tabs: { display: "flex", gap: 6, overflowX: "auto", paddingBottom: 8 },
    chip: { border: "1px solid rgba(243,237,226,.12)", borderRadius: 999, padding: "5px 8px", color: "#b8aea0", fontSize: 12, whiteSpace: "nowrap" },
    chipActive: { background: "#c7a15a", color: "#19130a", fontWeight: 800 },
    search: { width: "100%", border: "1px solid rgba(243,237,226,.12)", borderRadius: 13, background: "rgba(255,255,255,.065)", color: "#f3ede2", padding: "9px 11px", outline: "none", fontSize: 14 },
    section: { padding: "0 10px 4px" },
    sectionHead: { display: "flex", justifyContent: "space-between", alignItems: "end", padding: "15px 0 8px", fontSize: 16, color: "#f3ede2" },
    grid: { display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 7 },
    card: { position: "relative", border: "1px solid rgba(243,237,226,.10)", borderRadius: 13, overflow: "hidden", background: "#181612", color: "inherit", padding: 0, textAlign: "left", cursor: "pointer", minWidth: 0 },
    thumb: { width: "100%", aspectRatio: "1 / 1.18", background: "#17130f", overflow: "hidden", position: "relative" },
    badge: { position: "absolute", top: 4, left: 4, zIndex: 2, borderRadius: 999, padding: "3px 5px", background: "rgba(11,10,8,.76)", color: "#e2c77d", fontSize: 9, lineHeight: 1, border: "1px solid rgba(199,161,90,.38)" },
    info: { padding: "5px 6px 6px", minHeight: 41 },
    title: { fontSize: 10.5, fontWeight: 780, lineHeight: 1.18, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" },
    artist: { marginTop: 3, color: "#b8aea0", fontSize: 9, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
    placeholder: { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, padding: 6, background: "linear-gradient(135deg, rgba(199,161,90,.17), rgba(123,47,47,.10) 46%, rgba(255,255,255,.035)), #171410", textAlign: "center" },
    placeholderMono: { color: "rgba(243,237,226,.58)", fontSize: 8, letterSpacing: ".08em" },
    placeholderTitle: { color: "#f3ede2", fontSize: 10, lineHeight: 1.15 },
    placeholderSmall: { color: "#b8aea0", fontSize: 8 },
    overlay: { position: "fixed", inset: 0, zIndex: 100 },
    scrim: { position: "absolute", inset: 0, background: "rgba(0,0,0,.72)", backdropFilter: "blur(10px)" },
    sheet: { position: "absolute", left: 0, right: 0, bottom: 0, maxHeight: "94vh", background: "linear-gradient(180deg,#191611,#0f0e0c)", borderRadius: "24px 24px 0 0", overflow: "hidden", display: "flex", flexDirection: "column", borderTop: "1px solid rgba(243,237,226,.12)" },
    close: { position: "absolute", right: 12, top: 12, zIndex: 3, width: 38, height: 38, border: "1px solid rgba(243,237,226,.12)", borderRadius: 999, background: "rgba(0,0,0,.54)", color: "#f3ede2", fontSize: 23 },
    modalMedia: { width: "100%", maxHeight: "45vh", minHeight: 220, background: "#111" },
    modalBody: { padding: "16px 16px 24px", overflowY: "auto" },
    eyebrow: { color: "#e2c77d", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase" },
    h2: { margin: "6px 0 4px", fontSize: 23, lineHeight: 1.18 },
    en: { color: "#b8aea0", fontSize: 13, marginBottom: 10 },
    meta: { display: "flex", flexWrap: "wrap", gap: 6, margin: "9px 0 13px" },
    lead: { color: "#f3ede2", fontSize: 15, margin: 0, lineHeight: 1.45 },
    tips: { margin: "9px 0 0", paddingLeft: 18, color: "#b8aea0", fontSize: 14 },
    modalSection: { borderTop: "1px solid rgba(243,237,226,.12)", marginTop: 15, paddingTop: 13 },
    keywords: { display: "flex", flexWrap: "wrap", gap: 7, marginTop: 10 },
    tag: { color: "#e2c77d", background: "rgba(199,161,90,.10)", border: "1px solid rgba(199,161,90,.18)", borderRadius: 999, padding: "4px 7px", fontSize: 11 },
    source: { color: "#8e8476", fontSize: 12, marginTop: 12, lineHeight: 1.45 },
}
