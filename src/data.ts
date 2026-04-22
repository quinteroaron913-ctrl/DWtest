export interface Dimensions {
  intelligence: number;
  rebellion: number;
  empathy: number;
  leadership: number;
  loyalty: number;
}

export interface Doctor {
  id: string;
  name: string;
  quote: string;
  description: string;
  profile: Dimensions;
}

export interface Option {
  text: string;
  weights: Partial<Dimensions>;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const DOCTORS: Doctor[] = [
  {
    id: '1st',
    name: 'The First Doctor',
    quote: "One day, I shall come back. Yes, I shall come back. Until then, there must be no regrets, no tears, no anxieties.",
    description: "你是那颗最初的火种。你拥有严谨且充满长者智慧的灵魂，虽然外表显现出某种傲慢与顽固，但内心深处却藏着对宇宙生灵最纯粹的慈悲。你极其看重责任与传统，在面对混沌时，你总能凭借无可置疑的权威和敏锐的直觉指引大家。你的性格中带着一种旧时代的优雅，却在探索未知的旅程中不断进化，最终展现出温柔的底色。",
    profile: { intelligence: 90, rebellion: 35, empathy: 55, leadership: 95, loyalty: 80 }
  },
  {
    id: '2nd',
    name: 'The Second Doctor',
    quote: "There are some corners of the universe which have bred the most terrible things. Things which act against everything we believe in. They must be fought!",
    description: "你是一位不可捉摸的战术家，隐藏在玩世不恭的“宇宙流浪者”外表下。你擅长用看似笨拙或顽皮的行为让敌人放松警惕，实则在大脑中编织着极其复杂的脱困计划。你极度珍惜同伴的生命，对邪恶有着零容忍的果决。即使在最黑暗、最压抑的时刻，你也能用幽默感作为武器，你是那种能在绝境中凭借一根短笛或一个冷笑话扭转乾坤的人。",
    profile: { intelligence: 88, rebellion: 65, empathy: 85, leadership: 70, loyalty: 92 }
  },
  {
    id: '3rd',
    name: 'The Third Doctor',
    quote: "A straight line may be the shortest distance between two points, but it is by no means the most interesting.",
    description: "你是一位天生的贵族与行动派。你优雅、自信且富有格调，对科学有着近乎狂热的执著。你认为智慧应当与力量并重，不畏惧在物理层面与邪恶对抗。你是一位坚定的领导者，擅长在复杂的外交博弈或激烈的实战中找到破局点。尽管你有时表现得有些自负，但那是因为你对自己守护世界的职责有着坚不可摧的信心，你的一举一动都充满了大将风范。",
    profile: { intelligence: 95, rebellion: 45, empathy: 60, leadership: 90, loyalty: 85 }
  },
  {
    id: '4th',
    name: 'The Fourth Doctor',
    quote: "Would you like a jelly baby?",
    description: "你是一个纯粹的自由灵魂，超越了常人的逻辑与规范。你古怪、迷人且极其不稳定，上一秒还在讨论高维物理，下一秒可能就在递给敌人一颗果冻宝宝。你的智力深不可测，但你拒绝被任何权力机制束缚。你以流浪者的心态游走于群星之间，看似漫不经心，实则对弱小生命保持着最深沉的关怀。你那条长长的彩虹围巾，正是你斑斓、自由且无法估量的人生态度的缩写。",
    profile: { intelligence: 92, rebellion: 95, empathy: 75, leadership: 65, loyalty: 70 }
  },
  {
    id: '5th',
    name: 'The Fifth Doctor',
    quote: "For some people, small beautiful events are what life is all about!",
    description: "你是时空旅者中最温柔、最具有绅士品格的一位。你脆弱但坚韧，敏感却无畏。在解决层出不穷的星际危机时，你总是倾向于沟通、外交与体谅，而非强硬的命令。你是团队中不可替代的粘合剂，总是牺牲自己的情绪来照顾每一个伙伴。你对宇宙中那些微小而美好的事物情有独钟，这种对生命细节的爱让你在面对浩大灾难时，依然能保持最初的那份赤子之心。",
    profile: { intelligence: 82, rebellion: 30, empathy: 95, leadership: 70, loyalty: 95 }
  },
  {
    id: '6th',
    name: 'The Sixth Doctor',
    quote: "Of all my incarnations, you especially should not question my intelligence!",
    description: "你是一位傲慢而热烈的先锋，穿着色彩最斑斓的华服去审视这荒谬的宇宙。你口齿伶俐，思维如闪电般迅猛，从不屑于掩饰自己的才华与对平庸的鄙夷。但在那刺眼的外壳下，你拥有一个比谁都炽热、比谁都看重正义的灵魂。你不怕得罪权贵，也不怕挑战既定的命运，你是那种即使在审判席上也能凭借雄辩让全世界哑口无言的人，你的每一个分身都应当对你的勇气感到敬畏。",
    profile: { intelligence: 96, rebellion: 85, empathy: 60, leadership: 85, loyalty: 75 }
  },
  {
    id: '7th',
    name: 'The Seventh Doctor',
    quote: "There are worlds out there where the sky is burning, and the sea's asleep, and the rivers dream; people made of smoke and cities made of song.",
    description: "你是一位不可思议的弈棋大师，在时间的长河中布下一场场长达千年的棋局。你通常保持沉默，用神秘与操纵力作为你的矛与盾。你能够在阴影中洞悉一切邪恶的起源，并以前瞻性的战术将其掐灭。虽然你偶尔会显得有些冷酷且难以捉摸，但你所做的每一处微小的操纵，都是为了维持宇宙那脆弱的平衡。你是那个在黑暗中撑起名为希冀之伞的人，沉稳、深邃且不可战胜。",
    profile: { intelligence: 98, rebellion: 70, empathy: 55, leadership: 95, loyalty: 80 }
  },
  {
    id: '8th',
    name: 'The Eighth Doctor',
    quote: "I'm a secret. I'm an old, forgotten secret, even from myself.",
    description: "你是一位带有浪漫主义色彩的冒险家，在破败的废墟与时代的裂痕中寻找美。你优雅、富有诗意，即便身处名为“时间之战”的残酷阴影下，你依然紧握着对生命的信仰。你是一个充满悲剧感的秘密，有着一段被遗忘却沉重的过往。你极其在乎那些被战争蹂躏的可怜人，你是那种会在绝境中依然停下来闻一闻花香的人。你的存在，本身就是对这个残酷宇宙最温柔的一场反叛。",
    profile: { intelligence: 88, rebellion: 60, empathy: 90, leadership: 75, loyalty: 90 }
  },
  {
    id: 'War',
    name: 'The War Doctor',
    quote: "Great men are forged in fire. It is the privilege of lesser men to light the flame.",
    description: "你是一位真正见证过地狱的战士。为了保护更广阔的未来，你不得不亲手扼杀自己的温柔与姓名。你不再是那个自诩为“医生”的救赎者，而是一个务实、高效、且为了大局不惜背负万世骂名的终结者。你性格坚毅如磐石，行为果敢似烈火，但那一双疲惫的眼睛里始终闪烁着对和平最深长的渴望。你是在黑暗时代里，通过燃烧自己来强行为世界续一秒命的人。",
    profile: { intelligence: 92, rebellion: 40, empathy: 50, leadership: 98, loyalty: 85 }
  },
  {
    id: '9th',
    name: 'The Ninth Doctor',
    quote: "Fantastic!",
    description: "你是灰烬中重生的灰鹰。你带着无法言说的沉痛伤疤，却展现出前所未有的生命热度。你说话直白甚至刺人，讨厌繁文缛节，更偏爱通过直接的行动来解决问题。你对一切卑微的、平凡的东西都感到发自内心的“精彩绝伦”。你拒绝做那个高高在上的神，而是选择穿上皮夹克去人间行走。在你的冷酷伪装下，是一颗渴望被连接、渴望重新爱上宇宙的、极度柔软的心。",
    profile: { intelligence: 85, rebellion: 75, empathy: 80, leadership: 90, loyalty: 85 }
  },
  {
    id: '10th',
    name: 'The Tenth Doctor',
    quote: "I don't want to go.",
    description: "你是一位充满魅力、光芒四射却又被悲伤深深浸染的英雄。你跑得比谁都快，笑得比谁都灿烂，但你的心却比谁都孤独。你拥有极强的正义感和“不给第二次机会”的铁血手腕。你深爱人类，甚至愿意为他们奉献一切。你总是沉浸在失去同伴的悔恨和对命运的抗争中，这种极致的同理心让你变得无比强大，也让你在每一次离别时都显得肝肠寸断。你是那个最像人类的神，也是最让人心碎的时空旅者。",
    profile: { intelligence: 95, rebellion: 82, empathy: 92, leadership: 88, loyalty: 90 }
  },
  {
    id: '11th',
    name: 'The Eleventh Doctor',
    quote: "We're all stories, in the end. Just make it a good one, eh?",
    description: "你是一个“永恒的孩子”，在九百岁的躯壳里跳动着一颗童话般的心。你精力过剩、思维跳跃，总是能从最无趣的尘埃中读出最宏大的诗篇。你爱戴领结、爱吃奇奇怪怪的食物，却在不经意间流露出一种俯瞰时间尽头的深邃沧桑。你是一个伟大的叙事者，如果你的一生是一篇故事，你定会竭尽全力让它变得精彩纷呈。你擅长创造希望，即使是在最冰冷的虚空里，你也能点燃一根带给孩子们欢笑的火柴。",
    profile: { intelligence: 93, rebellion: 85, empathy: 78, leadership: 82, loyalty: 88 }
  },
  {
    id: '12th',
    name: 'The Twelfth Doctor',
    quote: "Always try to be nice, but never fail to be kind.",
    description: "你是一位严厉却宽厚的导师。你外表冷酷、古怪、甚至有些难以接近，像是一位被困在摇滚歌手皮囊里的哲学教授。但随着时间的流逝，你会揭开那一层防御性的外壳，露出内里那颗只为了“应做之事”而停不下的心。你不再需要掌声和感激，你行善只是因为善良本身。你对权力和欺骗有着本能的厌恶，你的人生格言是：在最残酷的战场上，依然要保持那一抹最基本的人性底色。",
    profile: { intelligence: 98, rebellion: 95, empathy: 72, leadership: 85, loyalty: 82 }
  },
  {
    id: '13th',
    name: 'The Thirteenth Doctor',
    quote: "None of us know for sure what's out there. That's why we keep looking. Keep your faith. Love anyway.",
    description: "你是一位无可救药的乐观主义者，是黑暗宇宙中一抹明亮的色彩。你极度在乎团队协作，更愿意称自己的同伴为“家人”，而不是仅仅将其视作点缀。你拥有极其旺盛的好奇心，总是迫不及待地想要探索每一个星系的角落。你相信善良是有感染力的，在面对绝望时，你总是那个第一个伸出手去连接他人的人。这种跨越种族与时间的包容心，是你最强大的力量源泉，你让所有接近你的人都感到：一切都会好起来的。",
    profile: { intelligence: 87, rebellion: 55, empathy: 96, leadership: 75, loyalty: 98 }
  },
  {
    id: '15th',
    name: 'The Fifteenth Doctor',
    quote: "I transform logic into motion, and I turn motion into joy.",
    description: "你是经历了漫长苦旅后最终选择与自己和解的幸存者。你情感丰沛、充满活力、且极具时尚感。你不再被过去的阴影所累，而是带着一种近乎纯真的喜悦去拥抱每一个时刻。你能够敏锐地捕捉到空气中的情感波动，并以一种热烈、坦诚的方式给予回应。你认为生活不应当仅仅是生存，而应当是一场华丽的盛宴。你那颗焕然一新的心，正以跨越万载的强力搏动，宣告着一种全新的、更自由的生命可能。",
    profile: { intelligence: 85, rebellion: 78, empathy: 98, leadership: 80, loyalty: 85 }
  }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "如果你在荒原中发现一个散发着幽光的密封盒。你的第一反应是？",
    options: [
      { text: "扫描它的物理成分和辐射水平，先确保安全。", weights: { intelligence: 10, leadership: 2 } },
      { text: "直接暴力开启，好奇心远比危险重要。", weights: { rebellion: 10, intelligence: 3 } },
      { text: "静静聆听，看看内部是否传出微弱的求救声。", weights: { empathy: 10, loyalty: 2 } },
      { text: "守在旁边，等待你的同伴到来后再一起商量。", weights: { loyalty: 10, leadership: 3 } }
    ]
  },
  {
    id: 2,
    text: "一个古老的文明请求你带领他们抵抗外敌。你会说：",
    options: [
      { text: "我可以教你们如何自救，但指挥权在你们自己手里。", weights: { leadership: 10, intelligence: 5 } },
      { text: "我讨厌军队。比起开战，我更想去敌方旗舰找找“后门”。", weights: { rebellion: 10, intelligence: 5 } },
      { text: "在流血之前，我会先去尝试说服双方坐下来和谈。", weights: { empathy: 10, leadership: 5 } },
      { text: "只要你们需要，我会与你们并肩作战到最后一刻。", weights: { loyalty: 10, leadership: 5 } }
    ]
  },
  {
    id: 3,
    text: "你理想的时空旅行方式是？",
    options: [
      { text: "一艘能够深入各种极端环境的专业科研船。", weights: { intelligence: 8, leadership: 2 } },
      { text: "潜入一艘货运飞船，毫无目的地随波逐流。", weights: { rebellion: 8, empathy: 2 } },
      { text: "跟随一个老式但可靠的蓝色盒子，去它该去的地方。", weights: { rebellion: 5, loyalty: 5, empathy: 5 } },
      { text: "一艘足够大、足够温暖，能容纳所有朋友的舒适飞船。", weights: { loyalty: 10, empathy: 5 } }
    ]
  },
  {
    id: 4,
    text: "当你陷入绝境，发现敌人的指挥中心。你的战术风格更接近：",
    options: [
      { text: "在脑中推演一万种概率，寻找成功率最高的那一个。", weights: { intelligence: 10, leadership: 3 } },
      { text: "制造一场巨大的、足以载入史册的骚乱。", weights: { rebellion: 10, leadership: 2 } },
      { text: "寻找反派内心的一丝人性，尝试唤醒他们的善良。", weights: { empathy: 10, intelligence: 2 } },
      { text: "把自己作为诱饵，让同伴有撤退的机会。", weights: { loyalty: 10, empathy: 5 } }
    ]
  },
  {
    id: 5,
    text: "在18世纪的法国误入一场舞会，你会怎么做？",
    options: [
      { text: "待在图书馆研究当地的历史脉络，避免改变因果律。", weights: { intelligence: 10, leadership: 3 } },
      { text: "穿着卫衣冲进舞池大闹一场，管他什么历史规矩。", weights: { rebellion: 10, empathy: 2 } },
      { text: "融入当地，用魅力去结交那些被历史遗忘的小人物。", weights: { empathy: 10, rebellion: 3 } },
      { text: "时刻保持警惕，提防人群中潜伏的外星生物。", weights: { leadership: 10, intelligence: 3 } }
    ]
  },
  {
    id: 6,
    text: "你最看重一个角色的哪种特质？",
    options: [
      { text: "能够洞察宇宙规律的卓越思考能力。", weights: { intelligence: 10 } },
      { text: "无论面对谁，都敢于说“不”的自由灵魂。", weights: { rebellion: 10 } },
      { text: "能感受到众生痛苦并温柔对待世界的同理心。", weights: { empathy: 10 } },
      { text: "无论时间流逝多久都永不变色的忠诚。", weights: { loyalty: 10 } }
    ]
  },
  {
    id: 7,
    text: "一个强大的实体愿意给你“重塑宇宙”的权力，你的回答：",
    options: [
      { text: "所谓的“秩序”往往是理解的匮乏，我不接受这种粗暴的控制。", weights: { intelligence: 10, rebellion: 3 } },
      { text: "这种无聊的权力，我宁愿把它扔进黑洞。", weights: { rebellion: 10, leadership: 2 } },
      { text: "如果是以牺牲普通人的生活为代价，那它毫无价值。", weights: { empathy: 10, loyalty: 2 } },
      { text: "我不需要这种权力，我相信生命的自我进化。", weights: { leadership: 10, intelligence: 2 } }
    ]
  },
  {
    id: 8,
    text: "只剩下五分钟拯救一座城市，你会优先：",
    options: [
      { text: "利用当地的科技设备临时组装一个电磁陷阱。", weights: { intelligence: 10, leadership: 2 } },
      { text: "即兴发挥，计划本身就是用来被打破的。", weights: { rebellion: 10, intelligence: 2 } },
      { text: "号召所有的幸存者，共同完成不可能的任务。", weights: { leadership: 10 } },
      { text: "哪怕牺牲自己，也要先把所有避难点加固好。", weights: { loyalty: 10, empathy: 5 } }
    ]
  },
  {
    id: 9,
    text: "你会如何面对过去犯下的巨大错误？",
    options: [
      { text: "通过严谨的逻辑分析找到原因，确保永不再犯。", weights: { intelligence: 10, leadership: 2 } },
      { text: "继续奔跑，答案永远在未来的地平线上。", weights: { rebellion: 8, intelligence: 2 } },
      { text: "背负着它的重量，并把它转化为对待他人的善意。", weights: { empathy: 10, loyalty: 2 } },
      { text: "用余生去补偿那些被你伤害过的人和事。", weights: { loyalty: 10, empathy: 3 } }
    ]
  },
  {
    id: 10,
    text: "月球上传来奇怪的信号，但政府警告不要靠近。你：",
    options: [
      { text: "先在地球基地的传感器上解密信号的内容。", weights: { intelligence: 10, leadership: 2 } },
      { text: "偷一架飞船，立刻飞上去看个究竟。", weights: { rebellion: 10, intelligence: 2 } },
      { text: "觉得这信号听起来像是一个灵魂在孤独地哭号。", weights: { empathy: 10, loyalty: 2 } },
      { text: "组建一支信得过的精英小队，进行秘密探测。", weights: { leadership: 5, loyalty: 5 } }
    ]
  },
  {
    id: 11,
    text: "你的“音速起子”长什么样？",
    options: [
      { text: "流线型、银色，极致的工业设计感。", weights: { intelligence: 10 } },
      { text: "一堆破烂和黄铜拼凑出来的奇妙工具。", weights: { rebellion: 10 } },
      { text: "它甚至不是一个起子，可能是件隐蔽的饰品。", weights: { intelligence: 5, rebellion: 5 } },
      { text: "能散发出柔和的光，带给黑暗中人们一丝安慰。", weights: { empathy: 10 } }
    ]
  },
  {
    id: 12,
    text: "塔迪斯给你一个机会去任何地方。你选择：",
    options: [
      { text: "第一颗恒星诞生的瞬间，见证宏大的历史起点。", weights: { intelligence: 10, leadership: 2 } },
      { text: "去宇宙边缘的无法地带，加入一场公平的抗争。", weights: { rebellion: 10, intelligence: 2 } },
      { text: "回到21世纪的地球，只为看一眼你思念的人。", weights: { empathy: 10, loyalty: 5 } },
      { text: "宇宙的尽头，看看最终是什么支撑着万物走到最后。", weights: { loyalty: 10, empathy: 2 } }
    ]
  },
  {
    id: 13,
    text: "同伴在时间轴上走丢了。你会：",
    options: [
      { text: "计算多维空间的扰动，精确追踪他们的时间痕迹。", weights: { intelligence: 10, leadership: 2 } },
      { text: "不计后果地打破时间法则，把他们强行拉回来。", weights: { rebellion: 10, empathy: 2 } },
      { text: "在搜寻的同时，尽可能安抚受害者的家属。", weights: { empathy: 10, loyalty: 2 } },
      { text: "永不停止，哪怕需要独自在荒凉的时空中流浪千年。", weights: { loyalty: 10, leadership: 2 } }
    ]
  },
  {
    id: 14,
    text: "你对传统的看法是？",
    options: [
      { text: "它们是前人智慧的积累，很有研究价值。", weights: { intelligence: 8, leadership: 2 } },
      { text: "传统通常是停止思考的各种借口。", weights: { rebellion: 10, intelligence: 2 } },
      { text: "它是连接不同时代人们情感最牢固的纽带。", weights: { loyalty: 10, empathy: 2 } },
      { text: "只要这一传统在伤害任何人，它就应当被废除。", weights: { empathy: 10, rebellion: 2 } }
    ]
  },
  {
    id: 15,
    text: "在1890年的一个社交晚宴上，你会：",
    options: [
      { text: "待在角落，观察每个人的微表情和社交逻辑。", weights: { intelligence: 10, leadership: 2 } },
      { text: "穿着最不合时宜的衣服到场，以此质疑旧时代的傲慢。", weights: { rebellion: 10, empathy: 2 } },
      { text: "去陪那些不受欢迎的人聊天，让他们感到温暖。", weights: { empathy: 10, loyalty: 2 } },
      { text: "时刻监控酒水，防止有人投放外星毒素。", weights: { leadership: 10, intelligence: 2 } }
    ]
  },
  {
    id: 16,
    text: "假如生命将尽，你最希望被如何铭记？",
    options: [
      { text: "那个知晓万物运行逻辑的数据大师。", weights: { intelligence: 10 } },
      { text: "那个从未对任何暴政屈服过的孤勇者。", weights: { rebellion: 10 } },
      { text: "那个当世界变得冰冷时依旧选择善良的人。", weights: { empathy: 10 } },
      { text: "那个从未让任何伙伴失望过的依靠。", weights: { loyalty: 10 } }
    ]
  },
  {
    id: 17,
    text: "飞船正在沉没，唯一的逃生舱只能坐一个人。你：",
    options: [
      { text: "计算能否通过调整氧气系统并排携带两个人。", weights: { intelligence: 10, leadership: 5 } },
      { text: "我不接受牺牲，我一定会找到避开这个两难选择的邪路。", weights: { rebellion: 10, intelligence: 5 } },
      { text: "微笑着把它留给年纪最小、最害怕的那个生命。", weights: { empathy: 10 } },
      { text: "留下控制沉没轨迹，为所有逃生舱争取几秒时间。", weights: { loyalty: 10, leadership: 5 } }
    ]
  },
  {
    id: 18,
    text: "你认为宇宙最重要的普世法则是？",
    options: [
      { text: "熵增与规律的博弈。", weights: { intelligence: 10 } },
      { text: "规则是脆弱且多余的伪命题。", weights: { rebellion: 10 } },
      { text: "每一个生命个体都不可或缺。", weights: { empathy: 10 } },
      { text: "永远不抛弃，永远不放弃。", weights: { loyalty: 10 } }
    ]
  },
  {
    id: 19,
    text: "面对赛博人提供的“消除情感”服务，你的反应：",
    options: [
      { text: "你们抹杀掉了物种进化的动力源泉。", weights: { intelligence: 10, rebellion: 5 } },
      { text: "我宁愿在剧痛中颤栗，也绝不接受你们的冷漠秩序。", weights: { rebellion: 10, empathy: 2 } },
      { text: "痛苦和快乐都是我们在这个宇宙中真实生存的证明。", weights: { empathy: 10 } },
      { text: "若不再能感受到爱，我的忠诚又该安放何处？", weights: { loyalty: 10, empathy: 5 } }
    ]
  },
  {
    id: 20,
    text: "最后……对你来说，“博士”意味着什么？",
    options: [
      { text: "一位通过卓越智慧维系真理的学者。", weights: { intelligence: 10, leadership: 5 } },
      { text: "一个逃离平庸生活的、自由又危险的叛逆者。", weights: { rebellion: 10, intelligence: 5 } },
      { text: "一个长着一幅脏兮兮脸孔的天使。", weights: { empathy: 10, loyalty: 5 } },
      { text: "一个穿越时间，只为守护朋友的最佳伙伴。", weights: { loyalty: 10, leadership: 5 } }
    ]
  }
];
