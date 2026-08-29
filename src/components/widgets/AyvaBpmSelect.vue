<template>
  <!-- TODO: Use AyvaDropdown instead!-->
  <n-dropdown
    class="bpm-select ayva-dropdown"
    placement="bottom-start"
    trigger="click"
    size="small"
    :options="options"
    @select="onChange"
  >
    <span class="ayva-dropdown-input">
      <span>{{ label }}</span>
      <chevron-dropdown-icon class="chevron" />
    </span>
  </n-dropdown>
</template>

<script>
import Storage from '../../lib/ayva-storage.js';

const storage = new Storage('bpm-select');

export default {
  props: {
    modelValue: {
      type: String,
      default: null,
    },

    storageKey: {
      type: String,
      default: null,
    },
  },

  emits: ['update:modelValue', 'change'],

  data () {
    return {
      initialValue: null,

      options: [{
        key: 'transition',
        label: '动作切换时',
      }, {
        key: 'continuous',
        label: '连续随动',
      }],
    };
  },

  computed: {
    label () {
      const labelMap = this.options.reduce((map, next) => {
        map[next.key] = next.label;
        return map;
      }, {});

      return labelMap[this.modelValue] || '';
    },
  },

  watch: {
    modelValue (value) {
      if (this.storageKey) {
        storage.save(this.storageKey, value);
      }
    },
  },

  beforeMount () {
    if (this.storageKey) {
      this.initialValue = storage.load(this.storageKey);
    }
  },

  mounted () {
    if (this.initialValue !== null && this.initialValue !== undefined) {
      this.notifyChange(this.initialValue);
    }
  },

  methods: {
    onChange (value) {
      if (this.storageKey) {
        storage.save(this.storageKey, value);
      }

      this.notifyChange(value);
    },

    notifyChange (value) {
      this.$emit('update:modelValue', value);
      this.$emit('change', value);
    },
  },
};
</script>
