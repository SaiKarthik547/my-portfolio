export interface EngineeringDecision {
  challenge: string;
  approach: string;
}

export interface PipelineStage {
  step: string;
  title: string;
  description: string;
  technologies?: string[];
}

export interface ProjectDiagram {
  title: string;
  chart: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  context?: string;
}

export interface ProjectScreenshot {
  url: string;
  caption: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  tier: 'flagship' | 'completed';
  tagline: string;
  problem: string;
  whyIBuiltIt: string;
  solution: string;
  engineeringDecisions: EngineeringDecision[];
  architecture?: {
    summary: string;
    stages?: PipelineStage[];
    diagrams?: ProjectDiagram[];
  };
  results: ProjectMetric[];
  resultsSummary?: string;
  impact: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  prototypeDisclaimer?: string;
  screenshots?: ProjectScreenshot[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  // ─────────────────────────────────────────────────────────────
  // 1. MediConsult (Top Flagship 1)
  // ─────────────────────────────────────────────────────────────
  "medical-consultation-system": {
    id: "medical-consultation-system",
    title: "MediConsult — Telemedicine Platform & Core Engine",
    tier: "flagship",
    tagline: "Resilient telemedicine core engine with transactional state guarantees, idempotent payments, and WebRTC consulting.",
    problem:
      "Telemedicine systems frequently encounter race conditions during concurrent appointment booking, state desynchronization between patient and doctor portals during network drops, and brittle webhook handling that leads to orphan payments.",
    whyIBuiltIt:
      "I wanted to build a telemedicine core platform where double-booking is structurally impossible and every state transition is enforced through atomic Compare-And-Swap (CAS) database operations.",
    solution:
      "Designed a distributed telemedicine architecture powered by Next.js 15, a PostgreSQL database with Prisma ORM, Redis Pub/Sub state sync, BullMQ asynchronous workers, and peer-to-peer WebRTC video consulting. The public repository hosts a complete standalone single-file interactive prototype showcasing all 3 role workflows alongside full architectural specifications.",
    engineeringDecisions: [
      {
        challenge: "Double-booking race conditions during simultaneous booking attempts",
        approach: "Implemented database-level atomic Compare-And-Swap (CAS) state transitions on consultation rows without application-level locking."
      },
      {
        challenge: "Payment webhook dropouts causing unverified consultations",
        approach: "Constructed an idempotent webhook receiver with database-level uniqueness constraints and a Transactional Outbox pattern."
      },
      {
        challenge: "Real-time state synchronization across distributed clients",
        approach: "Decoupled WebSocket gateway backed by Redis Pub/Sub channels to broadcast instant status updates across patient, doctor, and admin portals."
      },
      {
        challenge: "Strict medical auditability and compliance",
        approach: "Integrated an immutable Prisma AuditLog extension that enforces append-only records at the library layer, blocking updates and deletes."
      }
    ],
    architecture: {
      summary: "Event-driven micro-layer architecture with atomic state machine guarantees, transactional outbox dispatch, and asynchronous queue workers.",
      diagrams: [
        {
          title: "MediConsult Core System Architecture",
          chart: `graph TB
  subgraph Client["① Client Layer"]
    P["Patient Portal (Next.js 15)"]
    D["Doctor Portal (CAS Queue)"]
    A["Admin Dashboard (KPI & Audit)"]
  end
  subgraph API["② Application Gateway"]
    SA["Server Actions & REST Endpoints"]
    VAL["Zod Validation & Trace ID Propagation"]
    SM["Atomic CAS State Machine"]
  end
  subgraph Queue["③ Async Task & State Layer"]
    REDIS[("Redis 7 Pub/Sub Gateway")]
    BULL["8 BullMQ Async Workers (Refunds/Sweepers)"]
  end
  subgraph DB["④ Persistence & Media Layer"]
    PG[("PostgreSQL 16 (Transactional Outbox & Audit)")]
    RTC["WebRTC P2P Video Consultation"]
  end
  P & D & A --> SA --> VAL --> SM
  SM --> PG
  SM --> REDIS
  REDIS --> BULL
  BULL --> PG
  P <--> RTC <--> D`
        },
        {
          title: "Consultation State Machine",
          chart: `stateDiagram-v2
  [*] --> PAYMENT_PENDING: Patient Books Slot
  PAYMENT_PENDING --> PAID: Payment Webhook Verified
  PAYMENT_PENDING --> EXPIRED: 15m Payment Timeout
  PAID --> READY: Doctor Accepts (Atomic CAS Lock)
  PAID --> CANCELLED: Patient Cancellation (BullMQ Refund)
  READY --> ACTIVE: Consultation Initiated
  ACTIVE --> COMPLETED: Session Closed & Prescription Issued
  COMPLETED --> [*]
  CANCELLED --> [*]
  EXPIRED --> [*]`
        }
      ]
    },
    results: [
      { label: "State Transition Integrity", value: "Atomic CAS", context: "Zero double-booking by design at database layer" },
      { label: "Background Queue Workers", value: "8 Workers", context: "BullMQ asynchronous task & recovery processors" },
      { label: "Interactive Prototype", value: "Single-File HTML", context: "97KB standalone demo with Patient, Doctor, & Admin portals" },
      { label: "Audit Log Immutability", value: "Append-Only", context: "Enforced at Prisma extension layer" }
    ],
    resultsSummary:
      "Architecture verified through documented chaos engineering profiles (Toxiproxy network fault injection, SIGKILL recovery) and an interactive single-file client prototype.",
    impact:
      "Demonstrates high-reliability backend engineering for regulated medical applications, ensuring financial atomicity, concurrency control, and deterministic state transitions.",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL 16", "Redis 7", "Prisma ORM", "BullMQ", "Razorpay", "WebRTC", "Zod", "Prometheus"],
    githubUrl: "https://github.com/SaiKarthik547/Medi-Consult-Prototype-Only",
    prototypeDisclaimer: "The public repository provides a standalone interactive single-file prototype (`mediconsult-prototype.html`) and complete technical architecture specifications; the core production service is maintained in a private repository."
  },

  // ─────────────────────────────────────────────────────────────
  // 2. NovaMind (Top Flagship 2)
  // ─────────────────────────────────────────────────────────────
  "novamind": {
    id: "novamind",
    title: "NovaMind — Recoverable Distributed Runtime Kernel",
    tier: "flagship",
    tagline: "Deterministic event-driven runtime kernel orchestrating AI workloads with Lamport clocks, DAG causal scheduling, and state recovery.",
    problem:
      "AI agent orchestration systems commonly suffer from non-deterministic execution order, unhandled race conditions during async multi-agent workloads, and irrecoverable state corruption after runtime crashes or process interruptions.",
    whyIBuiltIt:
      "I wanted to design an authoritative distributed runtime kernel that guarantees temporal correctness through Lamport logical clocks, causal DAG dependency resolution, and discrete epoch-sealed snapshot recovery rather than treating agent orchestration as uncontrolled async loops.",
    solution:
      "Engineered NovaMind v4.0 in Python 3.12+ as a recoverable event-driven runtime kernel. It features a multi-tiered architecture: a Synchronization Layer (Lamport logical clocks, EpochManager, and SnapshotBarrier for mutation gating), a Causal Scheduler resolving many-to-many DAG dependencies, an FSM Supervisor (NORMAL → DEGRADED → RECOVERY → CRITICAL_HALT), and a JSONL event journal with deterministic delta replay.",
    engineeringDecisions: [
      {
        challenge: "Non-deterministic event arrival across concurrent asynchronous agents",
        approach: "Implemented Lamport logical clocks with monotonic ticks and merge rules to arbitrate concurrent events causally rather than relying on wall-clock arrival."
      },
      {
        challenge: "State mutation race conditions during active snapshot generation",
        approach: "Engineered a SnapshotBarrier providing tiered concurrency gating that isolates state mutations during epoch seals without global stop-the-world freezes."
      },
      {
        challenge: "State reconstruction and fault recovery after process disruption",
        approach: "Built an authoritative recovery engine that reconstructs pre-disruption state by replaying delta event journals from the latest epoch-sealed snapshot."
      },
      {
        challenge: "State divergence between runtime engine and visual client",
        approach: "Implemented continuous divergence scoring and reconciliation between the Python kernel and the Godot visualization layer."
      }
    ],
    architecture: {
      summary: "Distributed kernel architecture pairing Lamport synchronization and DAG scheduling with FSM supervision and journal replay.",
      diagrams: [
        {
          title: "NovaMind Runtime Kernel Architecture",
          chart: `graph TB
  subgraph Sync["① Synchronization Layer"]
    LC["LogicalClock (Lamport Monotonic Ticks)"]
    EM["EpochManager (Epoch Seal & Advance)"]
    SB["SnapshotBarrier (Mutation Gating)"]
  end
  subgraph Sched["② Causal Scheduler"]
    DAG["DAG Dependency Resolver (Many-to-Many Parents)"]
    DL["Deadlock Detection & Resolution"]
    LOG["SchedulerTraceLog (Deterministic Dispatch)"]
  end
  subgraph Super["③ Runtime Supervisor"]
    FSM["Supervisor FSM: NORMAL → DEGRADED → RECOVERY → HALT"]
    ESC["EscalationHandler & HealthEvaluator"]
    DIV["Split-Brain DivergenceAnalyzer"]
  end
  subgraph Journal["④ Event System & Replay"]
    EB["EventBus (Pub/Sub Event Routing)"]
    REC[("EventRecorder (JSONL Audit Journal)")]
    REP["DAG ReplayEngine (Authoritative Reconstruction)"]
  end
  Sync --> Sched --> Super --> Journal
  DIV <--> GDT["Godot Visual Client"]`
        },
        {
          title: "Authoritative State Snapshot & Recovery Lifecycle",
          chart: `graph LR
  A["Workload Mutation"] --> B["SnapshotBarrier Gate"]
  B --> C["Epoch Seal Window"]
  C --> D[("Epoch Snapshot")]
  C --> E[("JSONL Delta Log")]
  F["⚠️ Process Crash"] -.-> G["Authoritative Recovery Engine"]
  D --> G
  E --> G
  G --> H["Restored Deterministic Kernel State"]`
        }
      ]
    },
    results: [
      { label: "Causal Ordering", value: "Lamport Clocks", context: "Monotonic logical clock arbitration & DAG scheduling" },
      { label: "State Recovery", value: "Snapshot + Delta", context: "Authoritative reconstruction from epoch-sealed state" },
      { label: "Concurrency Gating", value: "SnapshotBarrier", context: "Tiered mutation gating without stop-the-world freeze" },
      { label: "Supervisor FSM", value: "4-State Engine", context: "NORMAL → DEGRADED → RECOVERY → CRITICAL_HALT" }
    ],
    resultsSummary:
      "Verified runtime kernel architecture supporting deterministic AI agent workload execution, concurrency gating, and automated disruption recovery.",
    impact:
      "Demonstrates core distributed systems engineering—logical clocks, causal dependency scheduling, and snapshot recovery—applied to robust AI agent orchestration.",
    technologies: ["Python 3.12+", "Lamport Clocks", "DAG Scheduling", "FSM Supervisor", "Godot", "JSONL Journaling", "AsyncIO"],
    githubUrl: "https://github.com/SaiKarthik547/Novamind"
  },

  // ─────────────────────────────────────────────────────────────
  // 3. MultiGenAI OS (Top Flagship 3)
  // ─────────────────────────────────────────────────────────────
  "multigen": {
    id: "multigen",
    title: "MultiGenAI OS (MGOS) — Multi-Modal AI Operating System",
    tier: "flagship",
    tagline: "Production-grade multi-modal generation OS unifying SDXL, AnimateDiff sliding windows, and ArcFace character identity.",
    problem:
      "Generating multi-modal content (images, cinematic video, documents, code) typically requires fragmented tools that suffer from severe GPU VRAM memory fragmentation, character identity drift across frames, and temporal flickering in video sequences.",
    whyIBuiltIt:
      "I wanted to build a unified content generation operating system that isolates model residency to eliminate GPU out-of-memory errors on constrained hardware, enforces persistent 512-d character embeddings, and enables cinematic video generation through temporal sliding windows.",
    solution:
      "Constructed MultiGenAI OS around a centralized GenerationManager that enforces isolated engine lifecycles (`ModelLifecycle.safe_unload`), a Creative Intelligence Layer (SceneDesigner with camera trajectory modeling → PromptCompiler), an Identity Layer (512-d ArcFace embeddings via InsightFace), and an AnimateDiff video engine utilizing 16-frame sliding windows with 8-frame overlap for smooth motion continuity.",
    engineeringDecisions: [
      {
        challenge: "GPU VRAM fragmentation and Out-of-Memory (OOM) errors on T4 hardware",
        approach: "Enforced strict isolated model residency where engines load lazily and `ModelLifecycle.safe_unload()` cleans CUDA cache and IPC in every `finally` block."
      },
      {
        challenge: "Facial identity drift across multi-segment image and video generation",
        approach: "Extracted 512-dimensional ArcFace face embeddings via InsightFace and injected them into the diffusion pipeline via IP-Adapter."
      },
      {
        challenge: "Temporal jitter and flickering in generated video sequences",
        approach: "Implemented AnimateDiff with temporal sliding windows (16-frame window, 8-frame overlap), latent noise drift, and linear alpha-blending."
      },
      {
        challenge: "CLIP token limit truncation on complex multi-sentence prompts",
        approach: "Built an automated narrative segmentation and contextual expansion layer ensuring zero CLIP token truncation."
      }
    ],
    architecture: {
      summary: "Multi-layered generative operating system pairing isolated model lifecycles with creative intelligence and temporal video sliding windows.",
      diagrams: [
        {
          title: "MultiGenAI OS System Architecture",
          chart: `graph TB
  subgraph Entry["① User Entry Layer"]
    UI["Streamlit Web UI / CLI / REST API"]
  end
  subgraph Creative["② Creative & Identity Layer"]
    SD["SceneDesigner (Camera Trajectories)"]
    PC["PromptCompiler (Token Expansion)"]
    FACE["InsightFace (512-d ArcFace Embeddings)"]
    SD --> PC
    FACE --> PC
  end
  subgraph Core["③ Orchestration & Memory Guard"]
    GM["GenerationManager (Sole Orchestrator)"]
    ML["ModelLifecycle.safe_unload() (VRAM Evacuation)"]
  end
  subgraph Engines["④ Isolated Diffusion Engines"]
    IE["ImageEngine: SDXL Juggernaut XL"]
    VE["VideoEngine: AnimateDiff Sliding Windows"]
    DOC["Document & Presentation Engines"]
  end
  Entry --> Creative --> GM
  GM --> IE & VE & DOC
  IE & VE & DOC --> ML`
        },
        {
          title: "Temporal Video Generation Pipeline",
          chart: `graph LR
  A["Natural Prompt"] --> B["SceneBlueprint & Camera Trajectory"]
  B --> C["16-Frame Window 1"]
  B --> D["16-Frame Window 2 (8-Frame Overlap)"]
  C & D --> E["Latent Noise Drift & Alpha Blending"]
  E --> F["RIFE Frame Interpolation"]
  F --> G["Cinematic MP4 Output"]`
        }
      ]
    },
    results: [
      { label: "Unit Test Suite", value: "323 Tests Passing", context: "Comprehensive coverage across temporal stability, lifecycle, & motion" },
      { label: "Character Identity", value: "512-d ArcFace", context: "InsightFace embedding persistence via IP-Adapter" },
      { label: "Video Generation", value: "16-Frame Sliding Window", context: "8-frame matching overlap with latent noise drift" },
      { label: "Hardware Adaptability", value: "Auto-Tier Detection", context: "Automatic configuration for Kaggle T4, local CUDA, & CPU" }
    ],
    resultsSummary:
      "Validated production architecture with 323 passing automated tests covering temporal stability, memory evacuation, prompt compilation, and identity preservation.",
    impact:
      "Demonstrates production-grade generative AI system engineering, GPU VRAM lifecycle optimization, and temporal continuity algorithms for multi-modal generation.",
    technologies: ["Python 3.10+", "PyTorch", "Diffusers", "SDXL", "AnimateDiff", "InsightFace", "ControlNet", "Streamlit", "CUDA"],
    githubUrl: "https://github.com/SaiKarthik547/multigen"
  },

  // ─────────────────────────────────────────────────────────────
  // 4. NeuroX (Top Flagship 4)
  // ─────────────────────────────────────────────────────────────
  "capstone": {
    id: "capstone",
    title: "NeuroX — Multi-Disease Brain MRI Analysis System",
    tier: "flagship",
    tagline: "3D deep learning pipeline for multi-disease MRI segmentation and classification with quantified uncertainty.",
    problem:
      "Brain MRI diagnostic workflows typically require separate, isolated models for distinct pathologies such as tumors, ischemic strokes, and neurodegeneration. This fragmented approach increases diagnostic turnaround time and lacks unified confidence estimates across co-occurring conditions.",
    whyIBuiltIt:
      "I wanted to test whether a unified 3D deep-learning architecture could perform tumor segmentation, stroke localization, and Alzheimer's classification simultaneously while communicating prediction uncertainty rather than producing unexplained outputs.",
    solution:
      "NeuroX is built around a shared dual-channel 3D CNN encoder that extracts joint spatial representations from T1ce and FLAIR MRI volumes. It directs features into specialized branches: a conditional transformer bottleneck for 3D segmentation, a ResBlock3D backbone with heteroscedastic uncertainty estimation for Alzheimer's diagnosis, and an automated clinical reporting engine with 3D mesh rendering.",
    engineeringDecisions: [
      {
        challenge: "Multi-objective gradient conflict during joint training",
        approach: "Implemented a 3-phase curriculum (Phase 1: Alzheimer warmup, Phase 2: Segmentation warmup, Phase 3: Joint optimization) to stabilize convergence."
      },
      {
        challenge: "Volumetric 3D MRI memory limits on GPU hardware",
        approach: "Utilized mixed-precision training (FP16) combined with depth-wise separable 3D convolutions and sliding-window patch inference."
      },
      {
        challenge: "Overconfident clinical predictions in boundary regions",
        approach: "Integrated Monte Carlo Dropout with dual-head variance estimation (logit + log_var) to output calibrated prediction uncertainties."
      },
      {
        challenge: "Translating raw tensors into radiologist-readable insights",
        approach: "Built interactive 3D mesh generation with Trimesh and automated clinical PDF reporting with Groq Llama-3 70B diagnostic summaries."
      }
    ],
    architecture: {
      summary: "End-to-end 3D multi-task learning pipeline from volumetric skull-stripping to uncertainty-calibrated clinical reporting.",
      diagrams: [
        {
          title: "NeuroX Multi-Modal 3D Conditioning Pipeline",
          chart: `graph TB
  subgraph Input["① Volumetric MRI Scans"]
    T1["T1ce Volume (3D Axial)"]
    FL["FLAIR Volume (3D Axial)"]
  end
  subgraph Shared["② Shared Feature Extraction"]
    HDBET["HD-BET Skull Stripping & Normalization"]
    ENC["Dual-Channel 3D CNN Shared Encoder (Depthwise Conv)"]
  end
  subgraph Bottleneck["③ Conditional Context"]
    TRANS["3D Multi-Head Transformer Bottleneck (dim=128, depth=4)"]
  end
  subgraph Tasks["④ Multi-Task Diagnostic Decoders"]
    SEG["3D Residual Segmentation (WT: 0.8888, TC: 0.8211, ET: 0.7469, Stroke)"]
    ALZ["Alzheimer ResBlock3D + SE Classification"]
    UNC["Heteroscedastic Uncertainty (Log-Variance Output)"]
  end
  subgraph Output["⑤ Clinical Evaluation"]
    MESH["Interactive 3D Mesh (Trimesh / Plotly)"]
    PDF["Automated Clinical PDF Report (Groq Llama-3 70B)"]
  end
  T1 & FL --> HDBET --> ENC --> TRANS
  TRANS --> SEG --> MESH
  ENC --> ALZ & UNC --> PDF`
        },
        {
          title: "3-Phase Training Curriculum",
          chart: `graph LR
  P1["Phase 1 (Epochs 1-10)<br/>Alzheimer Classification Warmup"] --> P2["Phase 2 (Epochs 11-26)<br/>3D Segmentation Warmup"]
  P2 --> P3["Phase 3 (Epochs 27-48)<br/>Joint Multi-Task Optimization"]
  P3 --> RES["Evaluated BraTS & ADNI Benchmarks<br/>Dice: 0.8888 | Loss: 0.2082"]`
        }
      ]
    },
    results: [
      { label: "Whole Tumor (WT) Dice", value: "0.8888", context: "Evaluated on BraTS dataset" },
      { label: "Tumor Core (TC) Dice", value: "0.8211", context: "Evaluated on BraTS dataset" },
      { label: "Enhancing Tumor (ET) Dice", value: "0.7469", context: "Evaluated on BraTS dataset" },
      { label: "Ischemic Stroke Dice", value: "0.4475", context: "Evaluated on ISLES dataset" },
      { label: "Alzheimer's Classification Loss", value: "0.2082", context: "Evaluated on ADNI dataset" }
    ],
    resultsSummary:
      "Quantitative results recorded after 48-epoch curriculum training on Tesla T4 GPU across standardized BraTS, ISLES, and ADNI medical imaging benchmarks.",
    impact:
      "Demonstrates how distinct 3D neuroimaging tasks can be unified into a single learning pipeline, providing calibrated uncertainty estimates alongside 3D visualizations to assist radiological review.",
    technologies: ["Python", "PyTorch", "CUDA", "NiBabel", "HD-BET", "Streamlit", "Plotly", "Trimesh", "Scikit-image", "ReportLab", "Groq AI"],
    githubUrl: "https://github.com/SaiKarthik547/NeuroX"
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Task Management System
  // ─────────────────────────────────────────────────────────────
  "task-manager": {
    id: "task-manager",
    title: "Task Management System (TMS) — Enterprise Collaboration Platform",
    tier: "completed",
    tagline: "Self-hosted task management platform with granular RBAC, async scheduling, and real-time Socket.IO synchronization.",
    problem:
      "Team collaboration platforms often suffer from board state desynchronization during concurrent edits, slow permission evaluation across deep organizational hierarchies, and missing audit trails.",
    whyIBuiltIt:
      "I wanted to build a self-hosted enterprise task engine supporting a 40+ permission RBAC matrix, hierarchical subtask blocking trees, and live multi-client state synchronization.",
    solution:
      "Constructed an asynchronous full-stack platform using FastAPI with SQLAlchemy 2.0 async ORM, PostgreSQL connection pooling, Redis in-memory caching, Socket.IO real-time channels, APScheduler background automation, and a React TypeScript dashboard.",
    engineeringDecisions: [
      {
        challenge: "Permission resolution latency across complex multi-role hierarchies",
        approach: "Implemented an in-memory Redis RBAC role-tree cache, eliminating repetitive relational permission queries on every API request."
      },
      {
        challenge: "Board state drift across multiple collaborating users",
        approach: "Built Socket.IO room-based broadcasting with optimistic UI updates on the React client for drag-and-drop Kanban updates."
      },
      {
        challenge: "Automated project health analysis and scheduled cleanups",
        approach: "Integrated APScheduler background worker running recurring cron jobs for health status recalculation and automated task archiving."
      },
      {
        challenge: "Audit compliance and activity tracking",
        approach: "Implemented async event-driven logging tracking user presence, IP metadata, and historical state changes."
      }
    ],
    architecture: {
      summary: "Full-stack asynchronous architecture pairing FastAPI and SQLAlchemy async with Redis caching and Socket.IO real-time sync.",
      diagrams: [
        {
          title: "Enterprise Task Manager Architecture",
          chart: `graph TB
  subgraph Client["Frontend Client"]
    R["React 18 + Vite + TypeScript"]
    K["5-Column Kanban & Recharts Analytics"]
  end
  subgraph Backend["FastAPI Backend Layer"]
    API["FastAPI Async REST Layer"]
    SIO["Socket.IO Gateway (Room Broadcasting)"]
    RBAC["40+ Permission RBAC Engine"]
    SCHED["APScheduler (Hourly Recalc & Cleanup)"]
  end
  subgraph CacheDB["Data & Cache Layer"]
    RED[("Redis In-Memory Cache (Role Hierarchy)")]
    PG[("PostgreSQL 16 / SQLAlchemy Async ORM")]
  end
  Client <--> API & SIO
  API --> RBAC --> RED
  API --> PG
  SCHED --> PG
  SIO <--> RED`
        }
      ]
    },
    results: [
      { label: "RBAC Permissions", value: "40+ Permissions", context: "Granular role matrix across admin, manager, member, and viewer" },
      { label: "Real-Time Protocol", value: "Socket.IO", context: "Bi-directional WebSocket event sync across Kanban boards" },
      { label: "Background Automation", value: "APScheduler", context: "Scheduled background workers for analytics & cleanup" },
      { label: "Task Hierarchy", value: "Multi-Level", context: "Supports parent-child tasks, blocking dependencies, & Kanban flow" }
    ],
    resultsSummary:
      "Production-ready, self-hosted system featuring complete backend API, database migration schema, and responsive React frontend.",
    impact:
      "Demonstrates high-concurrency Python backend architecture, async relational database modeling, and real-time state management for enterprise collaboration.",
    technologies: ["FastAPI", "Python", "SQLAlchemy 2.0", "PostgreSQL", "Socket.IO", "Redis", "React", "TypeScript", "Tailwind CSS", "APScheduler"],
    githubUrl: "https://github.com/SaiKarthik547/task-manager"
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Beacon
  // ─────────────────────────────────────────────────────────────
  "beacon-analytics": {
    id: "beacon-analytics",
    title: "Beacon — Student Performance Analytics Platform",
    tier: "completed",
    tagline: "Data-driven academic analytics platform for early student risk detection, intervention tracking, and educator collaboration.",
    problem:
      "Educational institutions struggle to identify at-risk students early because academic indicators—attendance records, assessment trends, and course milestones—remain siloed across disconnected systems, delaying timely faculty interventions.",
    whyIBuiltIt:
      "I wanted to build an integrated academic intelligence platform that calculates predictive student risk scores from unified performance indicators and provides educators with an actionable intervention tracking workflow.",
    solution:
      "Constructed a full-stack platform using FastAPI, SQLAlchemy, and React TypeScript with Tailwind CSS. It combines custom predictive risk scoring algorithms, interactive KPI dashboards, role-based access for administrators, professors, and students, and an integrated real-time communication portal.",
    engineeringDecisions: [
      {
        challenge: "Unifying disparate academic performance signals",
        approach: "Designed a centralized relational schema aggregating attendance frequency, assignment milestones, and historical examination trends."
      },
      {
        challenge: "Early identification of academically vulnerable students",
        approach: "Implemented multi-factor risk prediction algorithms categorizing students into tiered risk classifications."
      },
      {
        challenge: "Facilitating closed-loop faculty interventions",
        approach: "Built an intervention management pipeline linking flagged risk profiles directly to assigned counselor follow-ups and real-time chat."
      },
      {
        challenge: "Enforcing academic privacy and data isolation",
        approach: "Implemented strict Role-Based Access Control (RBAC) separating administrative oversight, faculty course management, and private student views."
      }
    ],
    architecture: {
      summary: "Full-stack analytics pipeline pairing FastAPI relational services with predictive risk algorithms and role-segregated React dashboards.",
      diagrams: [
        {
          title: "Academic Risk Prediction & Intervention Pipeline",
          chart: `graph LR
  A["Academic Records Ingestion"] --> B["Attendance & Grades Aggregator"]
  B --> C["Risk Scoring Engine"]
  C --> D{"Risk Threshold"}
  D -->|High Risk| E["Early Intervention Trigger"]
  D -->|Normal| F["Progress Dashboard"]
  E --> G["Assigned Counselor Chat Portal"]`
        }
      ]
    },
    results: [
      { label: "Risk Stratification", value: "Multi-Tiered", context: "Early warning classification based on aggregated performance metrics" },
      { label: "User Portals", value: "3 Dedicated Roles", context: "Independent dashboards for Administrators, Faculty, and Students" },
      { label: "Intervention Pipeline", value: "Closed-Loop", context: "Direct tracking from automated risk flag to faculty follow-up" },
      { label: "Containerization", value: "Docker Ready", context: "Standardized container deployment for backend and frontend services" }
    ],
    resultsSummary:
      "Fully structured academic analytics platform with integrated risk scoring models, role-segregated UI workflows, and containerized deployment.",
    impact:
      "Demonstrates how unified educational data pipelines and predictive risk modeling enable proactive student support before academic failure occurs.",
    technologies: ["FastAPI", "Python", "SQLAlchemy", "React", "TypeScript", "Vite", "Tailwind CSS", "JWT", "Docker"],
    githubUrl: "https://github.com/SaiKarthik547/Beacon-Student-Performance-Analytics-Platform"
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Local Modular AI
  // ─────────────────────────────────────────────────────────────
  "local-modular-ai": {
    id: "local-modular-ai",
    title: "Local Modular AI — Offline-Ready Modular AI Assistant",
    tier: "completed",
    tagline: "Modular Python AI runtime with decoupled model adapters, internet fallback chains, and FAISS RAG retrieval.",
    problem:
      "Most local AI tools are monolithic desktop applications that lock users into specific model formats, require high idle hardware overhead, and lack seamless integration with live web data and local document retrieval.",
    whyIBuiltIt:
      "I wanted to build a modular, lightweight Python runtime that decouples model orchestration, memory caching, and API routing from the user interface, operating offline with local LLMs while augmenting queries with live internet search when connected.",
    solution:
      "Engineered an extensible client-server architecture in Flask and PyTorch. It features an adapter pattern for local Hugging Face models (Qwen 0.5B), a tiered fallback chain (Web Search → Local LLM → Offline Knowledge), FAISS vector retrieval for document RAG, and multi-modal tool integrations for code, text, image, and website generation.",
    engineeringDecisions: [
      {
        challenge: "Routing queries between live internet data and offline LLMs",
        approach: "Constructed a tiered fallback router that queries DuckDuckGo and Wikipedia when connected, falling back to local Qwen 0.5B offline."
      },
      {
        challenge: "Document retrieval without paid third-party embedding APIs",
        approach: "Integrated local FAISS vector indexing using sentence-transformers embeddings with a token-overlap fallback mechanism."
      },
      {
        challenge: "Decoupling model implementations from the execution engine",
        approach: "Implemented a modular adapter interface allowing drop-in model backends without restarting server runtime state."
      },
      {
        challenge: "Managing conversational context within local token limits",
        approach: "Built a lightweight JSON conversation memory buffer with dynamic sliding-window pruning."
      }
    ],
    architecture: {
      summary: "Modular Python client-server architecture featuring pluggable LLM adapters, FAISS RAG retrieval, and web search fallback routing.",
      diagrams: [
        {
          title: "Modular Routing & RAG Fallback Architecture",
          chart: `graph TB
  REQ["User Query / API Call"] --> CLAS["Task Classifier & Router"]
  CLAS --> NET_CHECK{"Internet Connection?"}
  NET_CHECK -->|Connected| DDG["DuckDuckGo & Wikipedia Live Search"]
  NET_CHECK -->|Offline / Fallback| LOCAL["Local Qwen 0.5B (Hugging Face)"]
  CLAS --> FAISS["Local FAISS Document Vector RAG"]
  DDG & LOCAL & FAISS --> RESP["Response Streaming & Code Generation"]`
        }
      ]
    },
    results: [
      { label: "Local Model Support", value: "Qwen 0.5B", context: "Local Hugging Face transformer inference without external API keys" },
      { label: "Vector Search Engine", value: "FAISS Index", context: "Local semantic document retrieval with sentence-transformers" },
      { label: "Fallback Strategy", value: "3-Tier Chain", context: "Live Web Search → Local LLM → Offline Knowledge Base" },
      { label: "Interface Support", value: "REST API + Web UI", context: "Dual interface for programmatic and interactive user querying" }
    ],
    resultsSummary:
      "Fully operational local AI platform capable of web-augmented reasoning, document querying, and code generation with zero paid API dependencies.",
    impact:
      "Demonstrates modular software design principles applied to privacy-first, offline-ready AI assistance and local vector retrieval.",
    technologies: ["Python", "Flask", "PyTorch", "Hugging Face Transformers", "FAISS", "Sentence-Transformers", "DuckDuckGo API", "BeautifulSoup4"],
    githubUrl: "https://github.com/SaiKarthik547/Local-Modular-AI"
  },

  // ─────────────────────────────────────────────────────────────
  // 8. EcoForge
  // ─────────────────────────────────────────────────────────────
  "eco-forge": {
    id: "eco-forge",
    title: "EcoForge — AI Agents for Carbon Footprint Analysis",
    tier: "completed",
    tagline: "Multi-agent environmental intelligence system powered by LangGraph, LangChain, and LangSmith.",
    problem:
      "Estimating personal and organizational carbon footprints requires evaluating disparate lifestyle domains (energy consumption, transportation patterns, dietary choices) where static questionnaires fail to offer dynamic, domain-specific reduction pathways.",
    whyIBuiltIt:
      "I wanted to explore whether collaborative, specialized AI agents orchestrated via LangGraph could iteratively analyze lifestyle data, execute domain-specific carbon estimation tools, and produce validated sustainability recommendations.",
    solution:
      "Built a modular multi-agent workflow in Python using LangGraph state graphs, LangChain tool bindings, persistent SQLite contextual memory, and LangSmith observability tracing, exposed through a Streamlit interactive dashboard with Plotly and PyDeck visual analytics.",
    engineeringDecisions: [
      {
        challenge: "Preventing agent execution loops and ensuring workflow termination",
        approach: "Designed a deterministic LangGraph state machine with explicit conditional transition gates and validation checkpoints."
      },
      {
        challenge: "Preventing calculation hallucinations on environmental metrics",
        approach: "Bound deterministic Python calculation tools with standard emission factors for solar potential and carbon calculations."
      },
      {
        challenge: "Monitoring multi-agent tool execution and latency",
        approach: "Integrated LangSmith execution tracing to monitor agent transitions, tool invocations, and token usage in real time."
      },
      {
        challenge: "Preserving user context across multi-turn recommendations",
        approach: "Implemented persistent SQLite conversational memory storing activity logs and user profile states."
      }
    ],
    architecture: {
      summary: "State-machine-governed multi-agent workflow orchestrating specialist agents, deterministic tools, and persistent memory.",
      diagrams: [
        {
          title: "LangGraph Multi-Agent Architecture",
          chart: `graph TB
  subgraph Input["User Data"]
    DATA["Lifestyle & Activity Ingestion"]
  end
  subgraph Orchestrator["LangGraph State Machine"]
    SUP["Supervisor Agent"]
    MEM[("Persistent SQLite Memory")]
  end
  subgraph Agents["Specialist Agents & Tools"]
    CARB["Carbon Specialist Agent"]
    SOLAR["Energy & Solar Advisor"]
    TOOL["Deterministic Python Emission Tools"]
  end
  subgraph UI["Observability & Dashboard"]
    LS["LangSmith Execution Tracing"]
    DASH["Streamlit Dashboard & PyDeck Visuals"]
  end
  DATA --> SUP
  SUP <--> MEM
  SUP --> CARB & SOLAR --> TOOL
  SUP --> LS --> DASH`
        }
      ]
    },
    results: [
      { label: "Agent Orchestrator", value: "LangGraph", context: "State-graph architecture with conditional branching" },
      { label: "Observability", value: "LangSmith", context: "End-to-end tracing of tool calls, token usage, and agent decisions" },
      { label: "State Persistence", value: "SQLite Memory", context: "Persistent storage of user activity logs and recommendations" },
      { label: "Visualization", value: "Plotly & PyDeck", context: "Interactive carbon breakdown charts and geospatial rendering" }
    ],
    resultsSummary:
      "Fully functional multi-agent environmental pipeline combining deterministic tool execution, persistent state, and observability tracing.",
    impact:
      "Demonstrates the practical application of agentic state graphs and deterministic tool integration for multi-variable environmental analytics.",
    technologies: ["Python", "LangGraph", "LangChain", "LangSmith", "Streamlit", "Plotly", "PyDeck", "SQLite", "Pandas"],
    githubUrl: "https://github.com/SaiKarthik547/EcoForge---AI-Agents-for-Carbon-Footprint-Analysis"
  },

  // ─────────────────────────────────────────────────────────────
  // 9. Multimodal Sentiment Analysis
  // ─────────────────────────────────────────────────────────────
  "multimodal-sentiment-analysis": {
    id: "multimodal-sentiment-analysis",
    title: "Multimodal Social Media Sentiment Analyzer",
    tier: "completed",
    tagline: "Cross-platform sentiment analysis pipeline fusing text NLP, speech acoustics, and facial emotion signals.",
    problem:
      "Social media video content rarely conveys sentiment through text alone. Relying strictly on transcript NLP misses vocal sarcasm, acoustic stress, and micro-expressions, resulting in inaccurate sentiment classification.",
    whyIBuiltIt:
      "I wanted to build an end-to-end multimodal pipeline that ingests raw social media URLs (Reddit, YouTube, TikTok) and fuses text sentiment, acoustic emotion, and facial expressions into an aligned, confidence-weighted score.",
    solution:
      "Engineered a comprehensive Streamlit analysis pipeline combining RoBERTa transformer ensembles for text, Whisper ASR and wav2vec2 for speech emotion, and BLIP captioning with DeepFace/FER for video frame emotion analysis, unified by an adaptive confidence fusion algorithm.",
    engineeringDecisions: [
      {
        challenge: "Cross-modal discordance (e.g. positive words spoken with angry facial cues)",
        approach: "Engineered an adaptive confidence fusion algorithm (`fuse_sentiments_adaptive`) that penalizes conflicting polarity signals."
      },
      {
        challenge: "Automated media extraction across disparate social platforms",
        approach: "Constructed a modular extraction pipeline using PRAW for Reddit posts and yt-dlp for YouTube and TikTok video streams."
      },
      {
        challenge: "Efficient temporal extraction of video facial emotion",
        approach: "Used MoviePy for frame sampling paired with DeepFace and FER for facial emotion detection across video keyframes."
      },
      {
        challenge: "Acoustic sentiment analysis from raw audio tracks",
        approach: "Combined OpenAI Whisper for automated speech transcription with wav2vec2-lg-xlsr for acoustic emotion classification."
      }
    ],
    architecture: {
      summary: "Multi-stage ingestion, parallel modality extraction, and adaptive confidence fusion pipeline.",
      diagrams: [
        {
          title: "Multimodal Sentiment Extraction & Fusion Flow",
          chart: `graph TB
  URL["Social Media URL (Reddit / YouTube / TikTok)"] --> FETCH["PRAW / yt-dlp Media Extractor"]
  FETCH --> TXT["Text & Comments: RoBERTa Ensemble"]
  FETCH --> AUD["Audio Stream: Whisper ASR + wav2vec2 Emotion"]
  FETCH --> VID["Video Frames: DeepFace Facial Emotion + BLIP"]
  TXT & AUD & VID --> FUSE["Adaptive Confidence Fusion Layer"]
  FUSE --> DB[("SQLite Storage & Streamlit Dashboard")]`
        }
      ]
    },
    results: [
      { label: "Supported Modalities", value: "3 Modalities", context: "Text NLP, Speech Audio, & Video Facial Emotion" },
      { label: "Model Ensemble", value: "6+ Neural Models", context: "RoBERTa, DistilBERT, Whisper, wav2vec2, BLIP, & DeepFace" },
      { label: "Platform Coverage", value: "Reddit, YouTube, TikTok", context: "Direct URL ingestion via PRAW and yt-dlp pipelines" },
      { label: "Fusion Strategy", value: "Adaptive Confidence", context: "Weighted average with cross-modal discordance penalty" }
    ],
    resultsSummary:
      "End-to-end multi-modal analysis system verified across social video URLs, producing aligned sentiment timelines and visual analytical breakdowns.",
    impact:
      "Demonstrates complex multi-model orchestration and cross-modal feature fusion for real-world social media content analysis.",
    technologies: ["Python", "Streamlit", "PyTorch", "Transformers", "Whisper", "wav2vec2", "BLIP", "DeepFace", "FER", "PRAW", "yt-dlp"],
    githubUrl: "https://github.com/SaiKarthik547/Multimodal-sentimental-analysis",
    screenshots: [
      {
        url: "https://github.com/user-attachments/assets/d87e65e4-9fd4-4bc6-8d69-3226a27e77b4",
        caption: "Multimodal Social Media Sentiment Analyzer dashboard with analysis overview"
      },
      {
        url: "https://github.com/user-attachments/assets/4ac24d00-47b1-419b-ab90-a7d013f9c6be",
        caption: "Detailed multimodal sentiment breakdown across text, audio, and visual modalities"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 10. Leo AI Assistant
  // ─────────────────────────────────────────────────────────────
  "leo-ai-assistant": {
    id: "leo-ai-assistant",
    title: "Leo AI Assistant",
    tier: "completed",
    tagline: "Personal AI assistant with multi-model switching, voice I/O, and Supabase authentication.",
    problem:
      "Personal AI chat interfaces often tie users to a single proprietary provider or require expensive subscription tokens, lacking voice-first controls and persistent multi-session conversation management.",
    whyIBuiltIt:
      "I wanted to build a versatile personal assistant that integrates multiple open-access LLM models via OpenRouter, supports hands-free voice interaction, and provides secure multi-session conversation storage.",
    solution:
      "Developed a personal assistant interface featuring dynamic model switching across open LLMs (Meta Llama 3.1 8B, Microsoft Phi-3 Mini, Google Gemma 2B, Mistral 7B), integrated speech recognition and text-to-speech feedback, file upload processing, and Supabase user authentication.",
    engineeringDecisions: [
      {
        challenge: "Supporting diverse open-access LLMs without managing multiple SDKs",
        approach: "Unified model querying through OpenRouter API client supporting runtime model switching within active chat sessions."
      },
      {
        challenge: "Hands-free voice interaction in the browser and desktop",
        approach: "Integrated speech recognition input pipeline with pyttsx3 and browser speech synthesis for audio responses."
      },
      {
        challenge: "Securing user conversation history across devices",
        approach: "Implemented Supabase authentication paired with persistent SQLite/cloud session storage."
      }
    ],
    architecture: {
      summary: "Clean client-service architecture integrating voice I/O, multi-model API routing, and user session management.",
      diagrams: [
        {
          title: "Multi-Model Assistant Architecture",
          chart: `graph LR
  A["Voice / Text Prompt"] --> B["Speech Recognition"]
  B --> C["OpenRouter Multi-Model Gateway"]
  C --> D["Llama 3.1 / Phi-3 / Gemma / Mistral"]
  D --> E["Supabase Auth & Session Storage"]
  D --> F["Speech Synthesis & UI Stream"]`
        }
      ]
    },
    results: [
      { label: "Model Options", value: "4 Open LLMs", context: "Llama 3.1 8B, Phi-3 Mini, Gemma 2B, & Mistral 7B via OpenRouter" },
      { label: "Voice Capabilities", value: "Speech I/O", context: "Speech-to-text input + Text-to-speech audio feedback" },
      { label: "Authentication", value: "Supabase", context: "Secure multi-user session management and auth" },
      { label: "History Management", value: "Multi-Session", context: "Session persistence across separate conversations" }
    ],
    resultsSummary:
      "Functional multi-model personal assistant with voice interaction, file analysis, and persistent user authentication.",
    impact:
      "Demonstrates multi-model API abstraction, speech recognition integration, and secure user session management.",
    technologies: ["Python", "React", "OpenRouter API", "Supabase", "SpeechRecognition", "pyttsx3", "SQLite"],
    githubUrl: "https://github.com/SaiKarthik547/Leo-AI-Assist"
  },

  // ─────────────────────────────────────────────────────────────
  // 11. JARVIS AI Assistant
  // ─────────────────────────────────────────────────────────────
  "jarvis-ai": {
    id: "jarvis-ai",
    title: "JARVIS AI Assistant",
    tier: "completed",
    tagline: "Full-stack personal assistant with system diagnostics, voice interaction, and multi-provider AI endpoints.",
    problem:
      "Standard conversational AI assistants operate purely in the cloud without awareness of local operating system telemetry, system health, or desktop-level task workflows.",
    whyIBuiltIt:
      "I wanted to build a centralized assistant dashboard combining hands-free voice commands, live hardware monitoring (CPU, memory, processes), and flexible multi-provider AI querying.",
    solution:
      "Engineered a full-stack platform with a FastAPI backend and React 18 frontend. It integrates local system diagnostics, speech recognition/synthesis, task management with calendar views, stock market tracking, and AI chat powered by multiple providers (OpenRouter, Groq, Hugging Face).",
    engineeringDecisions: [
      {
        challenge: "Real-time operating system telemetry without UI blocking",
        approach: "Implemented asynchronous background polling endpoints using Python psutil for CPU, memory, and process statistics."
      },
      {
        challenge: "Multi-provider AI endpoint redundancy",
        approach: "Constructed a unified AI dispatching service connecting to OpenRouter, Groq, and Hugging Face APIs."
      },
      {
        challenge: "Persistent user authentication and profile state",
        approach: "Implemented Supabase PostgreSQL database integration with JWT bearer token verification."
      }
    ],
    architecture: {
      summary: "Full-stack client-server architecture integrating OS diagnostic services with multi-provider AI dispatchers.",
      diagrams: [
        {
          title: "JARVIS System Architecture",
          chart: `graph TB
  subgraph Client["React 18 Dashboard"]
    UI["Telemetry Gauges & Voice Controls"]
  end
  subgraph Server["FastAPI Backend Server"]
    DIAG["Hardware Diagnostics (psutil)"]
    ROUTER["Multi-AI Dispatcher (Groq / OpenRouter / HF)"]
  end
  subgraph DB["Security & Storage"]
    SUPA[("Supabase DB & JWT Auth")]
  end
  UI <--> Server --> DB`
        }
      ]
    },
    results: [
      { label: "AI Providers", value: "3 API Providers", context: "OpenRouter, Groq, and Hugging Face integration" },
      { label: "System Monitoring", value: "Real-Time Telemetry", context: "Live CPU, memory, and active process tracking" },
      { label: "Voice Controls", value: "STT & TTS", context: "Speech recognition with text-to-speech audio feedback" },
      { label: "Backend Framework", value: "FastAPI + Supabase", context: "Asynchronous Python backend with PostgreSQL authentication" }
    ],
    resultsSummary:
      "Integrated desktop assistant combining live hardware diagnostics, voice interaction, and multi-provider conversational AI.",
    impact:
      "Demonstrates full-stack application development uniting system-level OS diagnostics with modern conversational AI APIs.",
    technologies: ["FastAPI", "Python", "React 18", "Vite", "Tailwind CSS", "Supabase", "Groq", "OpenRouter", "SpeechRecognition", "pyttsx3"],
    githubUrl: "https://github.com/SaiKarthik547/J.A.R.V.I.S-AI-Assistant"
  },

  // ─────────────────────────────────────────────────────────────
  // 12. PharmaTrack India
  // ─────────────────────────────────────────────────────────────
  "blockchain-drug-supply-chain": {
    id: "blockchain-drug-supply-chain",
    title: "PharmaTrack India — Pharmaceutical Supply Chain System (Simulation)",
    tier: "completed",
    tagline: "Frontend pharmaceutical supply chain tracking simulation with QR batch verification, role-based custody, and tiered expiry discounts.",
    problem:
      "Counterfeit medicines and expired pharmaceuticals enter healthcare distribution networks when supply chain tracking lacks verifiable custody checkpoints and automated expiry monitoring across manufacturers, distributors, and retail pharmacies.",
    whyIBuiltIt:
      "I wanted to build an interactive pharmaceutical supply chain verification system that models batch traceability, QR code generation and scanning, role-based custody transfers, and dynamic expiry date discounting.",
    solution:
      "Engineered an interactive supply chain tracking simulation in React 18, TypeScript, and Vite with Tailwind CSS and shadcn/ui. The application simulates the end-to-end drug lifecycle (Manufacturing → Distribution → Pharmacy → Patient Verification) with QR code generation, tiered expiry discount calculations (15%/30%/50%), role-based access for 5 user types, and pre-loaded records for major Indian pharmaceutical manufacturers.",
    engineeringDecisions: [
      {
        challenge: "Modeling multi-tier pharmaceutical supply custody workflows",
        approach: "Designed role-based interfaces and permissions for Manufacturers, Distributors, Pharmacies, Customers, and Administrators."
      },
      {
        challenge: "Batch-level provenance and consumer verification",
        approach: "Integrated dynamic QR code generation and decoding per drug batch for instant authenticity and lifecycle lookups."
      },
      {
        challenge: "Automated reduction of pharmaceutical waste from approaching expiry",
        approach: "Implemented dynamic expiry tracking that automatically applies tiered discount pricing (15%, 30%, 50%) based on remaining shelf life."
      }
    ],
    architecture: {
      summary: "Client-side supply chain simulation architecture modeling role transitions, QR verification, and expiry tracking.",
      diagrams: [
        {
          title: "Pharmaceutical Supply Chain Verification Flow",
          chart: `graph LR
  M["Manufacturer (Batch + QR Generation)"] --> D["Distributor (Custody Scan)"]
  D --> P["Pharmacy (Expiry Check & Discount)"]
  P --> C["Patient (Authenticity Verification)"]`
        }
      ]
    },
    results: [
      { label: "Role Perspectives", value: "5 Distinct Roles", context: "Manufacturer, Distributor, Pharmacy, Customer, & Admin" },
      { label: "Traceability", value: "QR Code Batching", context: "Dynamic QR code generation and scanning per batch" },
      { label: "Expiry Management", value: "Tiered Discounts", context: "Automated 15%, 30%, and 50% price discounting based on shelf life" },
      { label: "Sample Data", value: "30 Drug Records", context: "Pre-loaded pharmaceutical records from major Indian manufacturers" }
    ],
    resultsSummary:
      "Comprehensive frontend simulation modeling pharmaceutical supply chain traceability, custody transfer workflows, and QR-based authenticity verification.",
    impact:
      "Demonstrates clear domain modeling for supply chain integrity, role-based user interfaces, and client-side verification workflows.",
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "qrcode", "Lucide React"],
    githubUrl: "https://github.com/SaiKarthik547/Blockchain-based-Drug-Supply-Chain",
    prototypeDisclaimer: "This project is an interactive frontend simulation built with React, TypeScript, and local storage state persistence; it does not deploy smart contracts to an active Ethereum testnet."
  },

  // ─────────────────────────────────────────────────────────────
  // 13. Student Finance Tracker
  // ─────────────────────────────────────────────────────────────
  "student-expense-tracker": {
    id: "student-expense-tracker",
    title: "Student Finance Tracker — Indian Edition",
    tier: "completed",
    tagline: "Financial tracking and budget analytics application designed for Indian college students with INR localization.",
    problem:
      "Generic personal finance applications are frequently overburdened with enterprise features, lack Indian currency and banking conventions, and present high cognitive friction for students trying to manage monthly allowances.",
    whyIBuiltIt:
      "I wanted to build a clean, accessible financial tracker that provides immediate visibility into daily student expenses, visual category distributions, and monthly budget warnings with zero unnecessary complexity.",
    solution:
      "Built a responsive personal finance dashboard in React 18, TypeScript, and Vite with Tailwind CSS and shadcn/ui. Features instant income and expense logging, visual category analytics powered by Recharts, INR number formatting, major Indian bank categorization, and Supabase cloud persistence with Row-Level Security.",
    engineeringDecisions: [
      {
        challenge: "Accessible spending visualizations for quick student review",
        approach: "Integrated Recharts for category breakdown charts and monthly balance trend lines."
      },
      {
        challenge: "Localization for Indian college student financial workflows",
        approach: "Implemented INR currency formatting, Indian number system conventions, and major Indian banking filters."
      },
      {
        challenge: "Secure cloud persistence with private student data isolation",
        approach: "Integrated Supabase authentication and PostgreSQL database with Row-Level Security (RLS) policies."
      }
    ],
    architecture: {
      summary: "Responsive React client with Recharts analytics and Supabase PostgreSQL persistence with Row-Level Security.",
      diagrams: [
        {
          title: "Application Architecture",
          chart: `graph LR
  UI["React 18 + Tailwind Dashboard"] --> RECH["Recharts Visual Analytics"]
  UI --> SUPA[("Supabase Auth & PostgreSQL RLS")]`
        }
      ]
    },
    results: [
      { label: "Analytics Charts", value: "Recharts Visuals", context: "Category distribution pie charts & monthly spending trends" },
      { label: "Localization", value: "INR & Indian Banks", context: "Indian number formatting and bank transaction tagging" },
      { label: "Cloud Security", value: "Supabase RLS", context: "PostgreSQL Row-Level Security for private record isolation" },
      { label: "Design Theme", value: "Dark Emerald", context: "Modern high-contrast dark theme optimized for mobile and desktop" }
    ],
    resultsSummary:
      "Responsive financial management web application with real-time balance tracking, category analytics, and secure cloud storage.",
    impact:
      "Demonstrates practical UI/UX design, accessible financial data visualization, and database security with Row-Level Security policies.",
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/SaiKarthik547/Student-expense-tracker"
  },

  // ─────────────────────────────────────────────────────────────
  // 14. Fiery Flappy Bird
  // ─────────────────────────────────────────────────────────────
  "fiery-flappy-bird": {
    id: "fiery-flappy-bird",
    title: "Fiery Flappy Bird — Browser Arcade Game",
    tier: "completed",
    tagline: "Browser arcade game built completely in pure Vanilla JavaScript and HTML5 Canvas without external engines.",
    problem:
      "Understanding fundamental game loops, coordinate space transformations, and real-time collision geometry is essential for building interactive graphics applications without relying on black-box game engines.",
    whyIBuiltIt:
      "I wanted to build a complete, high-performance browser arcade game from scratch using only vanilla web standards to master frame-rate independent physics loops, canvas rendering, and collision detection mathematics.",
    solution:
      "Developed a browser-based arcade game in pure Vanilla JavaScript (ES6+), HTML5 Canvas, and CSS3. Features a continuous physics simulation (gravity, jump impulse, velocity clamping), Axis-Aligned Bounding Box (AABB) collision detection, procedural obstacle generation, a lives system, difficulty scaling, and game state management.",
    engineeringDecisions: [
      {
        challenge: "Smooth, frame-independent animation and physics updates",
        approach: "Implemented a `requestAnimationFrame` game loop calculating delta time for consistent physics across varying monitor refresh rates."
      },
      {
        challenge: "Precise obstacle collision detection without engine overhead",
        approach: "Constructed an Axis-Aligned Bounding Box (AABB) collision algorithm testing bird coordinates against dynamic pipe geometries."
      },
      {
        challenge: "Robust game lifecycle and state transitions",
        approach: "Engineered a finite state machine managing Start, Active Gameplay, Paused, and Game Over states with high score persistence."
      }
    ],
    architecture: {
      summary: "Dependency-free game engine architecture utilizing HTML5 Canvas and an event-driven physics loop.",
      diagrams: [
        {
          title: "Game Engine Loop & State Machine",
          chart: `graph LR
  LOOP["requestAnimationFrame Loop"] --> PHYS["Delta-Time Physics Simulation"]
  PHYS --> AABB["AABB Obstacle Collision Detection"]
  AABB --> FSM["Game State Machine: Start / Active / Over"]
  FSM --> CANVAS["HTML5 Canvas 2D Render Pipeline"]`
        }
      ]
    },
    results: [
      { label: "Dependencies", value: "Zero External", context: "100% Vanilla JavaScript, HTML5 Canvas, & CSS3" },
      { label: "Physics Simulation", value: "AABB Collision", context: "Real-time gravity, velocity, and bounding box collision checks" },
      { label: "State Management", value: "Finite State Machine", context: "Start, Playing, Paused, and Game Over lifecycle" },
      { label: "Gameplay Features", value: "Lives & Difficulty", context: "Dynamic pipe gaps, lives system, and score tracking" }
    ],
    resultsSummary:
      "Fully functional browser arcade game demonstrating physics simulation, canvas rendering, and collision mathematics with zero external libraries.",
    impact:
      "Demonstrates core software engineering fundamentals: game loop architecture, canvas rendering performance, and clean dependency-free JavaScript.",
    technologies: ["JavaScript (ES6+)", "HTML5 Canvas", "CSS3"],
    githubUrl: "https://github.com/SaiKarthik547/Fiery-Flappy-Bird"
  }
};
