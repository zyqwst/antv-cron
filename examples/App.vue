<template>
  <div id="app">
    <cron-input class="cron-editor" v-model="cron">
      <div style="display:flex;padding:1em">
        <a-input v-model="cron" placeholder="* * * * * ?" style="flex:1"/>
      </div>
    </cron-input>
    <a-popover trigger="click">
      <template slot="content">
        <cron-input class="cron-editor" v-model="cron"/>
      </template>
      <a-input v-model="cron" placeholder="* * * * * ?" style="width:auto"/>
    </a-popover>

  </div>
</template>

<script>
import { Input, Popover } from 'ant-design-vue'

export default {
  name: 'App',
  components: { AInput: Input, APopover: Popover },
  data () {
    return {
      visible: true,
      cron: '0 15 10 ? * MONL'
    }
  },
  mounted() {
    console.info(this.cron)
  },
  methods: {
    changeCron(val){
      console.info('TTTTT', val)
      this.cron=val
    }
  }
}
</script>

<style>
body{
  display: flex;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.cron-editor{
  border: 1px solid rgba(0,0,0,.1);
  margin-bottom: 1em;
}
</style>
