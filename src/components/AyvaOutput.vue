<template>
  <div class="output-panel">
    <div class="limits-container lil-gui root">
      <div class="title" style="padding-right: 0">
        <span>设备输出</span>

        <ayva-connected
          :connected="device.connected"
          :mode="mode"
          @click.stop="toggleConnection"
        />

        <edit-settings-icon
          :disabled="mode !== 'Stopped' || device.connected ? '' : null" class="settings icon"
          @click.stop="mode != 'Stopped' || device.connected ? '' : (showSettings=true)"
        />
      </div>
      <div class="limits lil-gui children">
        <template v-for="axis of axes" :key="axis">
          <div
            class="limit"
            :class="axis"
          >
            <div class="axis">
              {{ { stroke: '抽插', surge: '前后平移', sway: '左右平移', twist: '旋转', roll: '侧倾', pitch: '俯仰' }[axis] || axis }}
            </div>
            <ayva-slider
              :options="sliderOptions"
              :storage-key="`${axis}-limit`"
              @update="onUpdate(axis, $event)"
            />
          </div>
        </template>
      </div>

      <ayva-modal :show="showSettings" lil-gui>
        <ayva-settings ref="ayvaSettings" @close="showSettings = false" />
      </ayva-modal>
    </div>

    <div class="sex-mode-container lil-gui root">
      <div class="title">
        <span>性爱模式</span>
      </div>
      <div class="limits lil-gui children">
        <div class="stage-folder lil-gui" :class="{ disabled: !normalEnabled }">
          <div class="title">
            <span>正常模式</span>
            <div class="stage-checkbox" @click.stop>
              <ayva-checkbox
                v-model="normalEnabled"
                storage-key="custom-normal-mode-enabled"
              />
            </div>
          </div>
          <div class="stage-children lil-gui children">
            <div
              v-for="phase of normalPhases"
              :key="phase.key"
              class="sub-stage-item"
              :class="{ active: selectedNormalPhase === phase.key, disabled: !normalEnabled }"
              @click="onRowClickNormalPhase(phase.key)"
            >
              <span class="sub-stage-label">{{ phase.label }}</span>
              <span class="sub-stage-bpm-badge">{{ phase.bpmBadge }} bpm</span>
              <div class="stage-checkbox" @click.stop>
                <ayva-checkbox
                  :model-value="selectedNormalPhase === phase.key"
                  @change="onToggleNormalPhase(phase.key, $event)"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="stage-folder lil-gui" :class="{ disabled: !milkingEnabled }">
          <div class="title">
            <span>榨精模式</span>
            <div class="stage-checkbox" @click.stop>
              <ayva-checkbox
                v-model="milkingEnabled"
                storage-key="custom-milking-mode-enabled"
              />
            </div>
          </div>
          <div class="stage-children lil-gui children">
            <!-- 待添加榨精模式内容 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AyvaSlider from './widgets/AyvaSlider.vue';
import AyvaCheckbox from './widgets/AyvaCheckbox.vue';
import AyvaConnected from './AyvaConnected.vue';
import AyvaSettings from './AyvaSettings.vue';
import AyvaModal from './AyvaModal.vue';
import Storage from '../lib/ayva-storage.js';
import { makeCollapsible } from '../lib/util.js';

const sexModeStorage = new Storage('sex-mode');

export default {
  components: {
    AyvaSlider,
    AyvaCheckbox,
    AyvaConnected,
    AyvaSettings,
    AyvaModal,
  },

  inject: {
    device: {
      from: 'globalDevice',
    },
    events: {
      from: 'globalEvents',
    },
  },

  props: {
    mode: {
      type: String,
      default: null,
    },
  },

  emits: ['update-limits', 'request-connection', 'disconnect'],

  data () {
    return {
      axes: ['stroke', 'surge', 'sway', 'twist', 'roll', 'pitch'],
      sliderOptions: {
        start: [0.2, 0.8],
        tooltips: true,
        margin: 0.1,
        connect: true,
        range: {
          min: [0],
          max: [1],
        },
      },
      showSettings: false,
      normalEnabled: true,
      milkingEnabled: false,
      normalPhases: [
        { key: 'foreplay', label: '前戏研磨', bpmBadge: '10-18' },
        { key: 'probing', label: '试探进入与嵌合', bpmBadge: '14-22' },
        { key: 'plateau', label: '平台期', bpmBadge: '28-45' },
        { key: 'edging', label: '寸止', bpmBadge: '8-15' },
        { key: 'intermission', label: '间歇', bpmBadge: '6-12' },
        { key: 'female-climax', label: '女高潮', bpmBadge: '30-45' },
        { key: 'male-climax', label: '男高潮', bpmBadge: '120-140' },
      ],
      selectedNormalPhase: sexModeStorage.load('selected-normal-phase') || 'foreplay',
    };
  },

  watch: {
    normalEnabled (val) {
      if (val && this.milkingEnabled) {
        this.milkingEnabled = false;
      }
      if (val && this.selectedNormalPhase) {
        this.events?.$emit('filter-strokes-by-phase', this.selectedNormalPhase);
      }
    },

    milkingEnabled (val) {
      if (val && this.normalEnabled) {
        this.normalEnabled = false;
      }
    },
  },

  mounted () {
    this.$el.querySelectorAll('.lil-gui.root, .stage-folder').forEach((element) => {
      makeCollapsible(element);
    });

    if (this.normalEnabled && this.milkingEnabled) {
      this.milkingEnabled = false;
    }

    if (this.normalEnabled && this.selectedNormalPhase) {
      this.$nextTick(() => {
        this.events?.$emit('filter-strokes-by-phase', this.selectedNormalPhase);
      });
    }
  },

  methods: {
    onUpdate (axis, values) {
      const [min, max] = values;
      this.updateLimit(axis, min, max);
    },

    updateLimit (axis, min, max) {
      const limits = {
        min: Number(min),
        max: Number(max),
      };

      this.$emit('update-limits', {
        name: axis,
        limits,
      });
    },

    toggleConnection () {
      if (!this.device.connected && this.mode === 'Stopped') {
        this.$emit('request-connection');
      } else if (this.device.connected && this.mode === 'Stopped') {
        this.$emit('disconnect');
      }
    },

    onToggleNormalPhase (key, checked) {
      if (checked) {
        if (!this.normalEnabled) {
          this.normalEnabled = true;
        }
        this.selectedNormalPhase = key;
        this.events?.$emit('filter-strokes-by-phase', key);
      } else if (this.selectedNormalPhase === key) {
        this.selectedNormalPhase = null;
      }
      sexModeStorage.save('selected-normal-phase', this.selectedNormalPhase);
    },

    onRowClickNormalPhase (key) {
      if (!this.normalEnabled) {
        this.normalEnabled = true;
      }
      if (this.selectedNormalPhase === key) {
        this.selectedNormalPhase = null;
      } else {
        this.selectedNormalPhase = key;
        this.events?.$emit('filter-strokes-by-phase', key);
      }
      sexModeStorage.save('selected-normal-phase', this.selectedNormalPhase);
    },
  },
};
</script>

<style scoped>
.limits-container.lil-gui.root,
.sex-mode-container.lil-gui.root {
  width: 270px;
}

.settings.icon {
  width: 25px;
  outline: none;
  position: relative;
  top: 1px;
  padding-right: 7px;
  margin-left: auto;
}

.settings.icon[disabled] {
  opacity: 0.25;
}

.title {
  display: flex;
  align-items: flex-start;
}

.sex-mode-container .title > * {
  position: relative;
  top: 2px;
}

.stage-folder,
.stage-folder.lil-gui,
.stage-folder .title,
.sex-mode-container > .children > .stage-folder > .title,
.sex-mode-container.lil-gui.root > .children > .stage-folder.lil-gui > .title {
  border: none !important;
  border-width: 0 !important;
  outline: none !important;
  box-shadow: none !important;
}

.stage-folder {
  width: calc(100% - 7px);
  margin-bottom: 2px;
}

.stage-folder .title {
  background: var(--ayva-background-medium);
  font-size: 11px;
  display: flex;
  align-items: center;
}

.stage-folder .title:hover {
  background: var(--ayva-background-light);
}

.stage-folder .title > span {
  position: relative;
  top: 2px;
}

.stage-folder .stage-checkbox {
  margin-left: auto;
  margin-right: 6px;
  display: flex;
  align-items: center;
}

.stage-folder.disabled .title > span {
  opacity: 0.5;
}

.stage-folder .stage-children {
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
}

.stage-folder.closed > .stage-children {
  transform: translateY(-5px);
  opacity: 0;
}

.stage-folder.transition > .stage-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}

.sub-stage-item {
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0 4px 0 12px;
  cursor: pointer;
  user-select: none;
  transition: background-color 150ms ease;
}

.sub-stage-item:hover {
  background-color: var(--hover-color, #4f4f4f);
}

.sub-stage-item.active {
  background-color: rgba(103, 132, 187, 0.15);
}

.sub-stage-item.active .sub-stage-label {
  color: var(--ayva-blue, #6784bb);
  font-weight: 600;
}

.sub-stage-label {
  font-size: 11px;
  color: var(--text-color, #ebebeb);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sub-stage-bpm-badge {
  font-size: 9px;
  color: #909399;
  margin-left: auto;
  margin-right: 6px;
  background: rgba(255, 255, 255, 0.08);
  padding: 1px 4px;
  border-radius: 3px;
  font-family: monospace;
  letter-spacing: 0.2px;
}

.sub-stage-item.active .sub-stage-bpm-badge {
  color: #fff;
  background: rgba(103, 132, 187, 0.4);
  font-weight: bold;
}

.sub-stage-item .stage-checkbox {
  margin-right: 6px;
  display: flex;
  align-items: center;
}

.sub-stage-item.disabled {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
