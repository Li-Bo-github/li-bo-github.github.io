// All bilingual copy lives here. zh is the default language.
export const text = (zh, en) => ({ zh, en });
export const profile = {
  name: text("李博", "Bo Li"),
  email: "libo.tom.mail@gmail.com",
  github: "https://github.com/Li-Bo-github",
  linkedin: "https://www.linkedin.com/in/bo-li-7b6a10105/",
  instagram: "https://www.instagram.com/limbolavida/",
  title: text("软件工程师 · AI 探索者", "Software engineer · AI explorer"),
  headline: text("把想法，\n写成现实。", "Ideas into code.\nCode into impact."),
  intro: text(
    "专注于全栈开发、云基础设施与生成式 AI。从可靠的后端系统，到 AI 驱动的产品与影像，探索技术的更多可能。",
    "I build across full-stack development, cloud infrastructure, and generative AI — from reliable backend systems to AI-powered products and visual experiments.",
  ),
};
export const experience = [
  {
    id: "amazon-2025",
    company: text("Amazon 亚马逊", "Amazon"),
    role: text("软件工程师 I", "Software Development Engineer I"),
    date: "2025.06 — 2025.12",
    location: text("北京", "Beijing"),
    points: [
      text(
        "通过并行 S3 copy 优化 CloudWatch 日志归档，将 backfill 时间从 2.5 小时缩短至 20 分钟（约 86%）。",
        "Optimized CloudWatch log archiving with parallel S3 copies, reducing backfill from 2.5 hours to 20 minutes (approximately 86%).",
      ),
      text(
        "基于 Step Functions、Lambda 和 DynamoDB TTL 构建事件驱动工作流，分析超过 40,000 条跨境传输事件，标记逾百个需进一步处理的实例。",
        "Built event-driven workflows with Step Functions, Lambda, and DynamoDB TTL to analyze over 40,000 cross-border transfer events and flag over 100 instances for further review.",
      ),
      text(
        "开发 Bedrock AI 助手及每日知识库同步管道，扩展 Python Lambda 以支持 .msg 邮件解析。",
        "Developed a Bedrock AI assistant and daily knowledge-base sync pipeline, extending Python Lambda processing to support .msg email files.",
      ),
    ],
  },
  {
    id: "tharzen",
    company: text("Tharzen", "Tharzen"),
    role: text("软件工程师实习生", "Software Engineering Intern"),
    date: "2024.05 — 2024.08",
    location: text("", ""),
    points: [
      text(
        "使用 Rust 和双向求值开发可逆 PHP 解释器，通过测试驱动开发完善核心逻辑。",
        "Developed a reversible PHP interpreter using Rust and bidirectional evaluation, with test-driven development for core functionality.",
      ),
    ],
  },
  {
    id: "spark",
    company: text("火花思维", "Spark Education Group"),
    role: text("全栈开发实习生", "Full-stack Engineering Intern"),
    date: "2023.08 — 2023.12",
    location: text("北京", "Beijing"),
    points: [
      text(
        "开发基于向量存储的内部 GenAI 代码库问答应用，使用 React、Node.js、FastAPI 和 PostgreSQL 部署大语言模型平台。",
        "Developed an internal GenAI codebase assistant with vector storage, deploying an LLM platform with React, Node.js, FastAPI, and PostgreSQL.",
      ),
      text(
        "优化数据库与 API，使每周活跃用户增长 30%，日活跃用户峰值达到 185。",
        "Improved databases and APIs, contributing to 30% growth in weekly active users and a peak of 185 daily active users.",
      ),
    ],
  },
  {
    id: "amazon-2022",
    company: text("Amazon 亚马逊", "Amazon"),
    role: text("软件工程师实习生", "Software Engineering Intern"),
    date: "2022.05 — 2022.08",
    location: text("美国 · 贝尔维尤", "Bellevue, WA"),
    points: [
      text(
        "使用 Node.js、GraphQL 和 PostgreSQL 开发变更日志 API 与 CRUD 操作，参与从设计、评审到部署的完整开发流程。",
        "Built changelog APIs and CRUD operations with Node.js, GraphQL, and PostgreSQL, owning the lifecycle from design and review through deployment.",
      ),
    ],
  },
];
export const education = [
  {
    school: text(
      "伊利诺伊大学香槟分校",
      "University of Illinois Urbana-Champaign",
    ),
    degree: text("计算机科学硕士", "Master of Computer Science"),
    date: "2024.01 — 2025.05",
  },
  {
    school: text("威斯康星大学麦迪逊分校", "University of Wisconsin–Madison"),
    degree: text(
      "理学学士 · 计算机科学、数据科学",
      "B.S. · Computer Science & Data Science",
    ),
    date: "2019.09 — 2023.05",
  },
];
export const skills = [
  {
    title: text("语言与前端", "Languages & frontend"),
    items: ["Java", "Python", "SQL", "TypeScript", "React"],
  },
  {
    title: text("云与基础设施", "Cloud & infrastructure"),
    items: [
      "AWS CDK",
      "Lambda",
      "DynamoDB",
      "Step Functions",
      "EventBridge",
      "S3",
      "SQS",
      "CloudWatch",
    ],
  },
  {
    title: text("AI 与后端", "AI & backend"),
    items: [
      "Amazon Bedrock",
      "FastAPI",
      "PostgreSQL",
      "GraphQL",
      "Scikit-learn",
      "Google Guice",
      "Dagger",
    ],
  },
];
export const copy = {
  projects: text("项目展示", "Selected work"),
  experience: text("工作经历", "Experience"),
  research: text("研究探索", "Research"),
  education: text("教育背景", "Education"),
  skills: text("技术栈", "Toolkit"),
  contact: text("联系我", "Get in touch"),
  viewWork: text("看看我的项目", "Explore my work"),
  resume: text("简历", "Résumé"),
  projectIntro: text(
    "从云端系统到 AI 创作，让技术落到实处。",
    "Systems, experiments, and the things I build along the way.",
  ),
  source: text("查看代码", "View source"),
  visit: text("查看项目", "View project"),
  coming: text("作品待发布", "Coming soon"),
  archive: text("更多项目", "More projects"),
  footer: text("有想法？一起聊聊。", "Have something in mind? Let’s talk."),
  videoError: text(
    "视频暂时无法播放，可尝试打开原视频。",
    "This video could not be played. Try opening the original video.",
  ),
  openVideo: text("打开原视频", "Open video"),
};
