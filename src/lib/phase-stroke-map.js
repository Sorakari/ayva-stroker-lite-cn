import './extended-strokes.js';

/**
 * 阶段与预设动作联动映射表
 * 包含原生 42 个动作及 24 个精选高级动作
 */
export const PHASE_STROKES = {
  // 前戏研磨
  foreplay: [
    'orbit-tease',
    'tease-orbit-left',
    'tease-orbit-right',
    'left-right-tease',
    'tease-left-right-rock',
    'forward-back-tease',
    'vortex-tease',
    'swirl-tease',
    'tease-down-back',
    'tease-back-swirl-left',
    'tease-back-swirl-right',
    'tease-up-down-circle-left',
    'tease-up-down-circle-right',
    'forward-back-grind',
    'grind-forward-back',
    'grind-forward-back-phased',
    'grind-forward-back-tilt',
    'grind-forward-tilt',
    'orbit-grind',
    'grind-circular',
    'grind-vortex',
    // 精选新增前戏与浅层动作
    'butterfly-flutter',
    'funnel-spiral-grind',
    'crescent-tilt-caress',
    'abyss-tease-hesitate',
  ],

  // 试探进入与嵌合
  probing: [
    'short-low-roll-forward',
    'short-low-roll-backward',
    'short-mid-roll-forward',
    'short-mid-roll-backward',
    'thrust-forward',
    'thrust-forward-swirl',
    'diagonal-down-forward',
    'diagonal-down-back',
    'down-forward',
    'down-backward',
    // 精选新增嵌合试探动作
    'serpentine-glide',
    'corkscrew-inflow',
    'shallow-deep-wave',
    'compass-probe',
  ],

  // 平台期
  plateau: [
    'long-stroke-1',
    'long-stroke-2',
    'long-stroke-3',
    'short-mid-roll-forward',
    'short-mid-roll-backward',
    'down-forward',
    'down-backward',
    'lean-forward-thrust-down',
    'grind-forward-back-phased',
    // 精选新增平台期韵律巡航动作
    'mid-cruise-cadence',
    'pendulum-swing',
    'figure-8-loop',
    'syncopated-pulse',
    'shallow-deep-wave',
  ],

  // 寸止
  edging: [
    'short-high-roll-forward',
    'short-high-roll-backward',
    'back-thrust-down-swirl',
    'thrust-forward-swirl',
    'swirl-tease',
    'vortex-tease',
    'tease-back-swirl-left',
    'tease-back-swirl-right',
    // 精选新增寸止特化动作
    'pinnacle-quiver',
    'staircase-recede',
    'apex-hover-swirl',
    'pulse-jab-recoil',
    'abyss-tease-hesitate',
  ],

  // 间歇
  intermission: [
    'short-low-roll-forward',
    'short-low-roll-backward',
    'left-right-tease',
    'forward-back-tease',
    'orbit-tease',
    'tease-left-right-rock',
    'forward-back-grind',
    'grind-forward-back',
    'tease-orbit-left',
    'tease-orbit-right',
    // 精选新增间歇抚慰动作
    'feather-float',
    'breathing-ripple',
    'gentle-tremor-drift',
  ],

  // 女高潮
  'female-climax': [
    'lean-forward-thrust-down-swirl',
    'back-thrust-down-swirl',
    'thrust-forward-swirl',
    'long-stroke-4',
    'long-stroke-5',
    'short-high-roll-forward',
    'grind-vortex',
    // 精选新增高潮爆发动作
    'full-sprint-overdrive',
    'hyper-vortex-frenzy',
    'deep-slam-hammer',
    'sawtooth-fury',
    'cataclysm-surge',
    'apex-hover-swirl',
  ],

  // 男高潮
  'male-climax': [
    'long-stroke-1',
    'long-stroke-2',
    'long-stroke-3',
    'long-stroke-5',
    'down-forward',
    'down-backward',
    'lean-forward-thrust-down',
    'back-thrust-down',
    'thrust-forward',
    // 精选新增高潮爆发动作
    'full-sprint-overdrive',
    'hyper-vortex-frenzy',
    'deep-slam-hammer',
    'sawtooth-fury',
    'cataclysm-surge',
    'pulse-jab-recoil',
  ],
};

/**
 * 正常模式各阶段专属配置（BPM 范围、连续随动加速度、模式持续时间与过渡时间全维联动）
 */
export const PHASE_CONFIGS = {
  // 前戏研磨
  foreplay: {
    label: '前戏研磨',
    bpm: [10, 18],
    acceleration: [1, 2],
    patternDuration: [15, 22],
    transitionDuration: [3.5, 5.0],
  },

  // 试探进入与嵌合
  probing: {
    label: '试探进入与嵌合',
    bpm: [14, 22],
    acceleration: [1, 3],
    patternDuration: [12, 18],
    transitionDuration: [2.5, 4.0],
  },

  // 平台期
  plateau: {
    label: '平台期',
    bpm: [28, 45],
    acceleration: [2, 4],
    patternDuration: [18, 28],
    transitionDuration: [2.5, 3.5],
  },

  // 寸止
  edging: {
    label: '寸止',
    bpm: [8, 15],
    acceleration: [1, 2],
    patternDuration: [16, 24],
    transitionDuration: [1.5, 2.5],
  },

  // 间歇
  intermission: {
    label: '间歇',
    bpm: [6, 12],
    acceleration: [0, 1],
    patternDuration: [20, 30],
    transitionDuration: [4.0, 6.0],
  },

  // 女高潮
  'female-climax': {
    label: '女高潮',
    bpm: [30, 45],
    acceleration: [3, 5],
    patternDuration: [9, 15],
    transitionDuration: [1.5, 2.5],
  },

  // 男高潮
  'male-climax': {
    label: '男高潮',
    bpm: [120, 140],
    acceleration: [8, 15],
    patternDuration: [5, 8],
    transitionDuration: [0.8, 1.2],
  },
};

export default PHASE_STROKES;

