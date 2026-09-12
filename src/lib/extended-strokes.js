import { TempestStroke } from 'ayvajs';

/**
 * 24 个全新精选高级动作预设
 * 专为性爱阶段（寸止、高潮、平台期、嵌合试探、前戏研磨、间歇恢复）深度定制
 * 绝不与内置 42 个动作重名或雷同，充分利用 6 自由度与偏心率非对称波形
 */
export const EXTENDED_STROKES = {
  // ==========================================
  // 一、寸止专精类 (Edging & Micro-Control)
  // ==========================================
  'pinnacle-quiver': {
    L0: { from: 0.88, to: 0.98, phase: 0, ecc: 0.7 },
    L1: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    L2: { from: 0.48, to: 0.52, phase: 0.5, ecc: 0 },
    R0: { from: 0.45, to: 0.55, phase: 0.25, ecc: 0.5 },
    R1: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R2: { from: 0.55, to: 0.65, phase: 0, ecc: 0.5 },
  },

  'staircase-recede': {
    L0: { from: 0.15, to: 0.85, phase: 0, ecc: 0.85 },
    L1: { from: 0.6, to: 0.4, phase: 0, ecc: 0.4 },
    L2: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R0: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R1: { from: 0.45, to: 0.55, phase: 0.5, ecc: 0 },
    R2: { from: 0.4, to: 0.6, phase: 0, ecc: 0.85 },
  },

  'apex-hover-swirl': {
    L0: { from: 0.85, to: 0.90, phase: 0, ecc: 0 },
    L1: { from: 0.45, to: 0.55, phase: 0.25, ecc: 0 },
    L2: { from: 0.45, to: 0.55, phase: 0.75, ecc: 0 },
    R0: { from: 0.25, to: 0.75, phase: 0, ecc: 0 },
    R1: { from: 0.35, to: 0.65, phase: 0.5, ecc: 0 },
    R2: { from: 0.35, to: 0.65, phase: 0, ecc: 0 },
  },

  'pulse-jab-recoil': {
    L0: { from: 0.35, to: 0.88, phase: 0, ecc: 0.75 },
    L1: { from: 0.3, to: 0.7, phase: 0, ecc: 0.75 },
    L2: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R0: { from: 0.4, to: 0.6, phase: 0.5, ecc: 0.5 },
    R1: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R2: { from: 0.4, to: 0.7, phase: 0, ecc: 0.7 },
  },

  'abyss-tease-hesitate': {
    L0: { from: 0.05, to: 0.22, phase: 0, ecc: -0.3 },
    L1: { from: 0.35, to: 0.65, phase: 0.25, ecc: 0 },
    L2: { from: 0.4, to: 0.6, phase: 0.75, ecc: 0 },
    R0: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
    R1: { from: 0.4, to: 0.6, phase: 0.5, ecc: 0 },
    R2: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
  },

  // ==========================================
  // 二、高潮爆发类 (Climax & Frenzy)
  // ==========================================
  'full-sprint-overdrive': {
    L0: { from: 0.05, to: 0.98, phase: 0, ecc: 0 },
    L1: { from: 0.4, to: 0.6, phase: 0, ecc: 0 },
    L2: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R0: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R1: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R2: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
  },

  'hyper-vortex-frenzy': {
    L0: { from: 0.25, to: 0.95, phase: 0, ecc: 0.2 },
    L1: { from: 0.3, to: 0.7, phase: 0.5, ecc: 0 },
    L2: { from: 0.3, to: 0.7, phase: 1.0, ecc: 0 },
    R0: { from: 0.1, to: 0.9, phase: 0.25, ecc: 0 },
    R1: { from: 0.2, to: 0.8, phase: 0.75, ecc: 0 },
    R2: { from: 0.3, to: 0.7, phase: 0, ecc: 0 },
  },

  'deep-slam-hammer': {
    L0: { from: 0.58, to: 0.98, phase: 0, ecc: 0.6 },
    L1: { from: 0.2, to: 0.8, phase: 0, ecc: 0.6 },
    L2: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R0: { from: 0.4, to: 0.6, phase: 0.5, ecc: 0.2 },
    R1: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R2: { from: 0.3, to: 0.8, phase: 0, ecc: 0.6 },
  },

  'sawtooth-fury': {
    L0: { from: 0.15, to: 0.92, phase: 0, ecc: 0.75 },
    L1: { from: 0.4, to: 0.7, phase: 0, ecc: 0.5 },
    L2: { from: 0.45, to: 0.55, phase: 0.25, ecc: 0 },
    R0: { from: 0.2, to: 0.8, phase: 0.5, ecc: -0.4 },
    R1: { from: 0.4, to: 0.6, phase: 0.5, ecc: 0 },
    R2: { from: 0.35, to: 0.65, phase: 0, ecc: 0.5 },
  },

  'cataclysm-surge': {
    L0: { from: 0.2, to: 0.95, phase: 0, ecc: 0.3 },
    L1: { from: 0.2, to: 0.8, phase: 0.25, ecc: 0.2 },
    L2: { from: 0.2, to: 0.8, phase: 0.5, ecc: 0 },
    R0: { from: 0.15, to: 0.85, phase: 0.75, ecc: 0.2 },
    R1: { from: 0.25, to: 0.75, phase: 1.0, ecc: 0 },
    R2: { from: 0.25, to: 0.75, phase: 0.25, ecc: 0.3 },
  },

  // ==========================================
  // 三、试探进入与嵌合类 (Probing & Docking)
  // ==========================================
  'serpentine-glide': {
    L0: { from: 0.2, to: 0.75, phase: 0, ecc: 0.1 },
    L1: { from: 0.4, to: 0.6, phase: 0, ecc: 0 },
    L2: { from: 0.2, to: 0.8, phase: 0.5, ecc: 0 },
    R0: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R1: { from: 0.25, to: 0.75, phase: 0.5, ecc: 0 },
    R2: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
  },

  'corkscrew-inflow': {
    L0: { from: 0.15, to: 0.8, phase: 0, ecc: 0.2 },
    L1: { from: 0.4, to: 0.6, phase: 0, ecc: 0 },
    L2: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R0: { from: 0.15, to: 0.85, phase: 0, ecc: 0.2 },
    R1: { from: 0.45, to: 0.55, phase: 0.5, ecc: 0 },
    R2: { from: 0.4, to: 0.6, phase: 0, ecc: 0 },
  },

  'shallow-deep-wave': {
    L0: { from: 0.25, to: 0.85, phase: 0, ecc: -0.5 },
    L1: { from: 0.3, to: 0.7, phase: 0.25, ecc: 0.2 },
    L2: { from: 0.4, to: 0.6, phase: 0.5, ecc: 0 },
    R0: { from: 0.4, to: 0.6, phase: 0, ecc: 0 },
    R1: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R2: { from: 0.35, to: 0.65, phase: 0, ecc: -0.3 },
  },

  'compass-probe': {
    L0: { from: 0.1, to: 0.65, phase: 0, ecc: 0.3 },
    L1: { from: 0.25, to: 0.75, phase: 0.25, ecc: 0 },
    L2: { from: 0.25, to: 0.75, phase: 0.75, ecc: 0 },
    R0: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R1: { from: 0.3, to: 0.7, phase: 0.75, ecc: 0 },
    R2: { from: 0.3, to: 0.7, phase: 0.25, ecc: 0 },
  },

  // ==========================================
  // 四、平台期耐力节奏类 (Plateau & Cadence)
  // ==========================================
  'mid-cruise-cadence': {
    L0: { from: 0.3, to: 0.78, phase: 0, ecc: 0 },
    L1: { from: 0.4, to: 0.6, phase: 0.25, ecc: 0 },
    L2: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R0: { from: 0.35, to: 0.65, phase: 0.5, ecc: 0 },
    R1: { from: 0.4, to: 0.6, phase: 0.25, ecc: 0 },
    R2: { from: 0.4, to: 0.6, phase: 0, ecc: 0 },
  },

  'pendulum-swing': {
    L0: { from: 0.2, to: 0.85, phase: 0, ecc: 0 },
    L1: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    L2: { from: 0.15, to: 0.85, phase: 0.5, ecc: 0 },
    R0: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R1: { from: 0.2, to: 0.8, phase: 0.5, ecc: 0 },
    R2: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
  },

  'figure-8-loop': {
    L0: { from: 0.35, to: 0.8, phase: 0, ecc: 0 },
    L1: { from: 0.3, to: 0.7, phase: 0.25, ecc: 0 },
    L2: { from: 0.25, to: 0.75, phase: 0.5, ecc: 0 },
    R0: { from: 0.4, to: 0.6, phase: 0, ecc: 0 },
    R1: { from: 0.3, to: 0.7, phase: 0.75, ecc: 0 },
    R2: { from: 0.25, to: 0.75, phase: 0.25, ecc: 0 },
  },

  'syncopated-pulse': {
    L0: { from: 0.25, to: 0.82, phase: 0, ecc: 0.45 },
    L1: { from: 0.35, to: 0.65, phase: 0.25, ecc: 0.3 },
    L2: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
    R0: { from: 0.3, to: 0.7, phase: 0.5, ecc: 0.2 },
    R1: { from: 0.45, to: 0.55, phase: 0.5, ecc: 0 },
    R2: { from: 0.35, to: 0.65, phase: 0, ecc: 0.4 },
  },

  // ==========================================
  // 五、高阶前戏研磨类 (Advanced Foreplay)
  // ==========================================
  'butterfly-flutter': {
    L0: { from: 0.1, to: 0.28, phase: 0, ecc: 0 },
    L1: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    L2: { from: 0.35, to: 0.65, phase: 0.5, ecc: 0 },
    R0: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
    R1: { from: 0.2, to: 0.8, phase: 0.5, ecc: 0 },
    R2: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
  },

  'funnel-spiral-grind': {
    L0: { from: 0.15, to: 0.45, phase: 0, ecc: 0.2 },
    L1: { from: 0.25, to: 0.75, phase: 0.25, ecc: 0 },
    L2: { from: 0.25, to: 0.75, phase: 0.75, ecc: 0 },
    R0: { from: 0.2, to: 0.8, phase: 0, ecc: 0.1 },
    R1: { from: 0.3, to: 0.7, phase: 0.75, ecc: 0 },
    R2: { from: 0.3, to: 0.7, phase: 0.25, ecc: 0 },
  },

  'crescent-tilt-caress': {
    L0: { from: 0.12, to: 0.38, phase: 0, ecc: 0 },
    L1: { from: 0.3, to: 0.7, phase: 0, ecc: 0.2 },
    L2: { from: 0.2, to: 0.8, phase: 0.5, ecc: 0.2 },
    R0: { from: 0.4, to: 0.6, phase: 0.25, ecc: 0 },
    R1: { from: 0.25, to: 0.75, phase: 0.5, ecc: 0 },
    R2: { from: 0.4, to: 0.6, phase: 0, ecc: 0 },
  },

  // ==========================================
  // 六、间歇抚慰与恢复类 (Intermission & Recovery)
  // ==========================================
  'feather-float': {
    L0: { from: 0.15, to: 0.32, phase: 0, ecc: 0 },
    L1: { from: 0.45, to: 0.55, phase: 0.25, ecc: 0 },
    L2: { from: 0.45, to: 0.55, phase: 0.75, ecc: 0 },
    R0: { from: 0.48, to: 0.52, phase: 0, ecc: 0 },
    R1: { from: 0.45, to: 0.55, phase: 0.5, ecc: 0 },
    R2: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
  },

  'breathing-ripple': {
    L0: { from: 0.2, to: 0.45, phase: 0, ecc: 0 },
    L1: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
    L2: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R0: { from: 0.5, to: 0.5, phase: 0, ecc: 0 },
    R1: { from: 0.48, to: 0.52, phase: 0.5, ecc: 0 },
    R2: { from: 0.45, to: 0.55, phase: 0, ecc: 0 },
  },

  'gentle-tremor-drift': {
    L0: { from: 0.25, to: 0.30, phase: 0, ecc: 0 },
    L1: { from: 0.48, to: 0.52, phase: 0.5, ecc: 0 },
    L2: { from: 0.46, to: 0.54, phase: 0, ecc: 0 },
    R0: { from: 0.48, to: 0.52, phase: 0.25, ecc: 0 },
    R1: { from: 0.47, to: 0.53, phase: 0.75, ecc: 0 },
    R2: { from: 0.48, to: 0.52, phase: 0, ecc: 0 },
  },
};

// 自动向 TempestStroke 注册这 24 个精选动作
for (const [key, config] of Object.entries(EXTENDED_STROKES)) {
  TempestStroke.update(key, config);
}

