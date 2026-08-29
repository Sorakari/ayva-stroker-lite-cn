<template>
  <div class="mode-container lil-gui">
    <span>当前模式:</span>
    <span
      class="mode"
      :class="modeClass"
    >{{ { 'Stopped': '已停止', 'Free Play': '自由控制', 'Manual': '手动' }[mode] || mode }}</span>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: '',
    },
  },

  computed: {
    modeClass () {
      return `${this.mode.toLowerCase().replaceAll(/\s+/g, '-')}-mode`;
    },
  },
};
</script>
