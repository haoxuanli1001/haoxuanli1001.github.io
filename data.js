const siteData = {
  profile: {
    name: "Haoxuan Li",
    initials: "ECE",
    avatarImage: "./assets/avatar.jpg",
    title: "Undergraduate Student",
    affiliation: "Xi'an Jiaotong University",
    email: "lhx-1001@stu.xjtu.edu.cn",
    //scholarUrl: "https://scholar.google.com/citations?user=kj8WqooAAAAJ&hl=zh-CN",
    githubUrl: "https://github.com/qinghaili142857",
    cvUrl: "./assets/CV.pdf",
    wechatQrImage: "./assets/wechat-qr.jpg",
    contacts: [
      {
        icon: "fa-building-columns",
        text: "School of Microelectronics, Xi'an Jiaotong University",
      },
      {
        icon: "fa-location-dot",
        text: "Xi'an, China",
      },
      {
        icon: "fa-envelope",
        text: "lhx-1001@stu.xjtu.edu.cn",
        href: "mailto:lhx-1001@stu.xjtu.edu.cn",
      },
    ],
  },
  about: {
    title: "About Me",
    paragraphs: [
      "I'm an undergraduate in the <strong>Young Gifted Class at Xi'an Jiaotong University</strong>, major in <strong>Integrated Circuit and Computer Engeneering</strong>. My research focuses on <strong>digital IC design and computer architecture</strong>, including FPGA design and computer micro architecture.",
      "I am a research intern at the <a href=\"https://iair.xjtu.edu.cn/\" target=\"_blank\" rel=\"noreferrer\"><strong>Institute of Artificial Intelligence and Robotics, Xi'an Jiaotong University</strong></a>.",
    ],
    notice:
      "I am currently seeking Fall 2029 Ph.D. opportunities. If my research interests align with yours, please feel free to contact me."
  },
  researchInterests: [
    "Computer Architecture",
    "Digital IC Design",
    "Cache Design",
  ],
  /*news: [
    {
      date: "2026/09",
      text: "Our <a href=\"https://arxiv.org/abs/2609.17210\" target=\"_blank\" rel=\"noreferrer\">FluxVLA Engine</a> technical report is out!",
    },
    {
      date: "2026/08",
      text: "Our team won National First Prize in the RoboCup Special Competition.",
    },
    {
      date: "2026/07",
      text: "Started a research internship at Shanghai Jiao Tong University.",
    },
    {
      date: "2026/04",
      text: "Updated my academic homepage and released a new project page.",
    },
  ],*/
  workExperience: [
    {
      institution: "Institude of Artificial Intelligence and Robotics(IAIR), Xi'an Jiao Tong University",
      role: "Research Intern",
      period: "April 2026 - Present",
      logo: "./assets/sjtu.png",
      logoAlt: "Xi'an Jiao Tong University logo",
      url: "https://www.aiar.xjtu.edu.cn/",
    },
  ],
  education: [
    {
      institution: "Xi'an Jiaotong University",
      role: "School of Microelectronics",
      period: "September 2025 - Present",
      logo: "./assets/xjtu.png",
      logoAlt: "Xi'an Jiaotong University logo",
      url: "http://www.ele.xjtu.edu.cn/",
    },
    {
      institution: "Xi'an Jiaotong University",
      role: "Young Gifted Class",
      period: "September 2023 - July 2025",
      logo: "./assets/xjtu.png",
      logoAlt: "Xi'an Jiaotong University logo",
      url: "https://bjb.xjtu.edu.cn/info/1071/1237.htm",
    },
  ],
  /*   publications: [
    {
      title: "SP-HLM: Sparse-Pose-Driven Motion Generation and Whole-Body Control for Humanoid Loco-Manipulation",
      pageUrl: "https://arxiv.org/abs/2610.30044",
      image: "./assets/sp-hlm-teaser.webp",
      imageAlt: "SP-HLM teaser: sparse-pose interface comparison, simulated and real humanoid robot tasks, and experimental results",
      venue: "arXiv preprint, Under Review, 2026.10",
      authors: [
        { name: "Zhaohui Yang*" },
        { name: "Quanbao Lin*" },
        { name: "Chengqi Shi*", highlight: true },
        { name: "Zhenglang Weng" },
        { name: "Jicheng Lin" },
        { name: "Boyu Chen" },
        { name: "Tengjie Zhu" },
        { name: "Guanzhu Ren" },
        { name: "Jiahao Xu" },
        { name: "Yang Feng" },
        { name: "Xiaokang Yang" },
        { name: "Yao Mu", corresponding: true },
      ],
      summary:
        "A sparse-pose-driven framework connecting vision-language-action prediction, real-time motion generation, and whole-body control for humanoid loco-manipulation. Five task-critical body poses and a learned motion prior enable coordinated behavior in simulation and on a real humanoid robot.",
      paperUrl: "https://arxiv.org/pdf/2610.30044",
      projectUrl: "https://sp-hlm.github.io/",
    },
    {
      title: "FluxVLA Engine: A One-Stop VLA Engineering Platform for Embodied Intelligence",
      pageUrl: "https://arxiv.org/abs/2609.17210",
      image: "./assets/fluxvla-system-overview.png",
      imageAlt: "FluxVLA platform overview: data processing, policy training, simulation evaluation, and robot deployment",
      venue: "Tech Report, 2026.09",
      authors: [
        { name: "Yinhao Li" },
        { name: "Weixin Mao" },
        { name: "Zihan Lan" },
        { name: "Jikun Rong" },
        { name: "Qirui Hu" },
        { name: "Yiming Zhang" },
        { name: "Weipeng Deng" },
        { name: "Bowen Shen" },
        { name: "Minzhao Zhu" },
        { name: "Yiming Mao" },
        { name: "Yan Yang" },
        { name: "Chenguang Cui" },
        { name: "Hongyuan Chen" },
        { name: "Xu Huang" },
        { name: "Zheyi Zhao" },
        { name: "Pinxi Shen" },
        { name: "Bozhen He" },
        { name: "Zhen Fu" },
        { name: "Yifan Wang" },
        { name: "Zexin Zhang" },
        { name: "Ang Gao" },
        { name: "Haoyu Chen" },
        { name: "Chengqi Shi", highlight: true },
        { name: "Hua Chen" },
      ],
      summary:
        "An open, configuration-driven platform unifying embodied-policy training, simulation evaluation, human-in-the-loop correction, and real-robot deployment in a reproducible data-to-deployment workflow.",
      paperUrl: "https://arxiv.org/pdf/2609.17210",
      projectUrl: "https://fluxvla.limxdynamics.com/",
      codeUrl: "https://github.com/FluxVLA/FluxVLA",
      bibtex: `@article{li2026fluxvla,
  title={{FluxVLA Engine}: A One-Stop {VLA} Engineering Platform for Embodied Intelligence},
  author={Li, Yinhao and Mao, Weixin and Lan, Zihan and Rong, Jikun and Hu, Qirui and Zhang, Yiming and Deng, Weipeng and Shen, Bowen and Zhu, Minzhao and Mao, Yiming and Yang, Yan and Cui, Chenguang and Chen, Hongyuan and Huang, Xu and Zhao, Zheyi and Shen, Pinxi and He, Bozhen and Fu, Zhen and Wang, Yifan and Zhang, Zexin and Gao, Ang and Chen, Haoyu and Shi, Chengqi and Chen, Hua},
  journal={arXiv preprint arXiv:2609.17210},
  year={2026},
  doi={10.48550/arXiv.2609.17210},
  url={https://arxiv.org/abs/2609.17210}
}`,
    },
  ], */
  honors: [
    {
      date: "2026/10",
      competition: "Xi'an Jiaotong University",
      award: "Second-Class Scholarship",
    },
    {
      date: "2026/10",
      competition: "Xi'an Jiaotong University",
      award: "Outstanding Student",
    },
    {
      date: "2026/08",
      competition: "National Undergraduate Integrated Circuit Innovation and Entrepreneurship Competition — Northwest Region",
      award: "Third Prize",
      role: "Team Captain",
    },
    {
      date: "2026/05",
      competition: "Mathematical Contest in Modeling (MCM)",
      award: "Honorable Mention",
    },
    {
      date: "2025/11",
      competition: "China Undergraduate Physics Experiment Competition (CUPET)",
      award: "National First Prize",
      role: "Team Captain",
    },
    {
      date: "2025/06",
      competition: "China Undergraduate Physics Tournament (CUPT) — Northwest Region",
      award: "Grand Prize",
    },
  ],
};
