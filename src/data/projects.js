import { text } from "./profile.js";
// Add a record to add a card. Optional media: { src, poster, captions, captionsLang }.
// Use public/media paths (e.g. /media/film.mp4) or an HTTPS video file URL.
// Platform watch URLs belong in url, not media.src. Never invent project links.
export const projects = [
  {
    id: "iot",
    category: "CLOUD / IoT",
    title: text("让 12 万台车，连接云端。", "120,000 vehicles. One cloud."),
    description: text(
      "面向模拟车队的可扩展物联网基础设施。通过 MQTT 连接设备，使用 Lambda 分析 CO₂ 排放，并构建数据洞察管道。",
      "Scalable IoT infrastructure for a simulated fleet, connecting devices over MQTT, analyzing CO₂ emissions with Lambda, and delivering data insights.",
    ),
    tags: ["AWS IoT Core", "Python", "MQTT"],
    visual: "cloud",
    metric: "120K",
    metricLabel: text("模拟车辆", "simulated vehicles"),
  },
  {
    id: "video",
    category: "AI / MOTION",
    title: text("AI 影像实验", "AI motion experiments"),
    description: text(
      "用生成式 AI 探索影像叙事。新的作品将在这里呈现。",
      "Exploring visual storytelling with generative AI. New work will appear here.",
    ),
    tags: ["Generative AI", "Video"],
    visual: "motion",
    status: "coming-soon",
    media: null,
    url: null,
  },
  {
    id: "parking",
    category: "AUTONOMOUS SYSTEMS",
    title: text("GEM e4 自动泊车", "Autonomous parking · GEM e4"),
    description: text(
      "结合激光雷达与摄像头标定、Hybrid A* 路径规划和 MPC 轨迹跟踪，实现自动泊车导航。",
      "Autonomous parking with LiDAR and camera calibration, Hybrid A* path planning, and MPC trajectory tracking.",
    ),
    tags: ["MPC", "Hybrid A*", "Robotics"],
    visual: "path",
    url: "https://github.com/Li-Bo-github/GEMstack",
  },
  {
    id: "clustering",
    category: "DATA SCIENCE",
    title: text(
      "从账户数据，发现家庭关联。",
      "Finding connections in account data.",
    ),
    description: text(
      "基于地址和联名账户构建定制距离函数，使用层次聚类分析账户持有人，模型准确率达到 96.6%。",
      "Hierarchical clustering with custom distances based on addresses and joint accounts, reaching 96.6% model accuracy.",
    ),
    tags: ["Scikit-learn", "Snowflake", "Python"],
    visual: "data",
    metric: "96.6%",
    metricLabel: text("模型准确率", "model accuracy"),
    url: "https://github.com/CodySond/cs639-assocbank-team2",
  },
];
export const research = [
  {
    id: "claimtrust",
    title: text(
      "ClaimTrust · RAG 信任评分",
      "ClaimTrust · Trust scoring for RAG",
    ),
    date: "2024.08 — 2024.12",
    description: text(
      "基于图的文档可信度传播，处理 814 篇文章，将 RAG 系统回答质量提升 11.2%。指导教授：Heng Ji。",
      "Graph-based trust propagation across 814 articles, improving RAG response quality by 11.2%. Advised by Heng Ji.",
    ),
    url: "https://github.com/Li-Bo-github/ClaimTrust-A-Propagation-Based-Trust-Scoring-Framework-for-Retrieval-Augmented-Generation-Systems",
  },
  {
    id: "carla",
    title: text(
      "协同自动驾驶系统仿真",
      "Collaborative automated driving simulation",
    ),
    date: "2022.02 — 2022.12",
    description: text(
      "研究车辆轨迹预测，统一 CARLA 仿真输出与预测模型输入的数据格式。指导教授：Bin Ran。",
      "Investigated trajectory prediction and unified CARLA simulator exports with prediction model inputs. Advised by Bin Ran.",
    ),
  },
  {
    id: "smartnic",
    title: text(
      "SmartNIC / JBOF 数据库下推",
      "Database pushdown on SmartNIC / JBOF",
    ),
    date: "2021.10 — 2021.12",
    description: text(
      "定制基于 C++ 的 FlexPushdownDB，探索缓存与数据库下推能力。指导教授：Ming Liu。",
      "Customized C++ FlexPushdownDB to explore caching and database pushdown capabilities. Advised by Ming Liu.",
    ),
  },
];
export const archive = [
  {
    id: "farm",
    title: text("农场数据管理系统", "Farm data management"),
    tags: "JavaFX / Java",
    url: "https://github.com/Li-Bo-github/milk-farm-management-system",
  },
  {
    id: "enrollment",
    title: text(
      "本科招生数据研究与可视化",
      "Undergraduate enrollment analysis",
    ),
    tags: "Python / Data",
    url: "https://github.com/Li-Bo-github/school_undergrad-enrollment-study-and-visulization",
  },
  {
    id: "cssa",
    title: text("UW–Madison CSSA 网站", "UW–Madison CSSA website"),
    tags: "Web development",
    url: "https://github.com/cssaatuwmadisonIT",
  },
];
