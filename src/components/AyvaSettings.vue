<template>
  <div class="modal-body-small">
    <div>
      <div class="toolbar">
        <span class="toolbar-left">
          <span>输出设置</span>
        </span>
        <span class="toolbar-right">
          <span>
            <close-icon
              class="close icon"
              :disabled="frequencyInvalid || portInvalid ? '' : undefined"
              @click="close"
            />
          </span>
        </span>
      </div>
      <div class="limits lil-gui children">
        <div class="settings">
          <div class="settings-label">
            设备类型:
          </div>
          <ayva-dropdown v-model="deviceType" class="device-type" :options="deviceTypeOptions" storage-key="device-type" />
        </div>
        <div class="settings">
          <div class="settings-label">
            连接方式:
          </div>
          <template v-if="['HANDY', 'KEON', 'RUBJOY'].includes(deviceType)">
            <div class="connection-type">
              Bluetooth LE
            </div>
          </template>
          <template v-else>
            <ayva-dropdown v-model="connectionType" class="connection-type" :options="connectionTypeOptions" storage-key="connection-type" />
          </template>
        </div>
        <div v-show="connectionType === 'websocket'" class="settings">
          <div class="settings-label">
            主机地址 (Host):
          </div>
          <div>
            <n-tooltip :show="hostInvalid" class="error-tooltip">
              <template #trigger>
                <input v-model="host" class="host" :class="hostInvalid ? 'error' : ''">
              </template>
              主机地址不能为空。
            </n-tooltip>
          </div>
        </div>
        <div v-show="connectionType === 'websocket'" class="settings">
          <div class="settings-label">
            端口 (Port):
          </div>
          <div>
            <n-tooltip :show="portInvalid" class="error-tooltip">
              <template #trigger>
                <input v-model="port" class="port" :class="portInvalid ? 'error' : ''" maxlength="5" @keydown="restrictNumbers">
              </template>
              端口必须是 1 到 65535 之间的数字。
            </n-tooltip>
          </div>
        </div>
        <div v-show="connectionType === 'websocket'" class="settings">
          <div style="grid-column: span 2; font-size: 14px; text-align: center; color: var(--ayva-color-error);">
            注意：当前没有固件支持安全 WebSocket。
            您必须连接到运行在 localhost 上的其他应用程序，例如：<br>
            <a
              href="https://osr.wiki/books/ayva-websocket-hub/page/overview"
              target="_blank"
              style="color: var(--ayva-color-error);"
            >
              Ayva WebSocket Hub
            </a>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Storage from '../lib/ayva-storage';
import AyvaDropdown from './widgets/AyvaDropdown.vue';

const storage = new Storage('output-settings');

export default {
  components: {
    AyvaDropdown,
  },

  inject: ['globalEvents'],

  emits: ['close'],

  data () {
    return {
      deviceTypeOptions: [{
        key: 'OSR2',
        label: 'OSR2',
      }, {
        key: 'SR6',
        label: 'SR6',
      }, {
        key: 'SSR1',
        label: 'SSR1',
      }, {
        key: 'RUBJOY',
        label: 'Rubjoy',
      }],

      deviceType: 'OSR2',

      connectionTypeOptions: [{
        key: 'serial',
        label: '串口 (Serial)',
      }, {
        key: 'ble',
        label: '蓝牙 (BLE)',
      }, {
        key: 'websocket',
        label: 'WebSocket',
      }, {
        key: 'console',
        label: '控制台 (Console)',
      }],

      connectionType: 'serial',

      host: storage.load('host') || 'localhost',

      port: storage.load('port') || 80,

      frequency: storage.load('frequency') || 50,
    };
  },

  computed: {
    portInvalid () {
      const port = Number(this.port);
      return !(Number.isFinite(port) && port >= 1 && port <= 65535);
    },

    frequencyInvalid () {
      const frequency = Number(this.frequency);
      return !(Number.isFinite(frequency) && frequency >= 10 && frequency <= 250);
    },

    hostInvalid () {
      return !this.host || !this.host.trim();
    },
  },

  watch: {
    deviceType (value) {
      if (value === 'HANDY' || value === 'KEON' || value === 'RUBJOY') {
        this.connectionType = 'ble';
      }
    },
  },

  methods: {
    restrictNumbers (event) {
      const validKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];

      if (!event.key.match(/[0-9]/) && validKeys.indexOf(event.key) === -1) {
        event.preventDefault();
      }
    },

    close () {
      if (this.frequencyInvalid || this.portInvalid) {
        return;
      }

      storage.save('deviceType', this.deviceType);
      storage.save('connectionType', this.connectionType);
      storage.save('frequency', this.frequency);
      storage.save('host', this.host);
      storage.save('port', this.port);

      this.$emit('close');

      this.globalEvents.$emit('refresh-output-settings');
    },
  },

};
</script>

<style src="../assets/ayva-modal.css" scoped></style>

<style scoped>
.settings-label {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: -2px;
  justify-content: right;
  padding-right: 10px;
}

.settings {
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 10px 20px 10px 20px;
}

.settings input {
  background: var(--ayva-background-dark) !important;
  padding: 5px;
}

.limits {
  padding-bottom: 5px;
}

.port {
  width: 34%;
}

.frequency {
  width: 25%;
}
</style>
