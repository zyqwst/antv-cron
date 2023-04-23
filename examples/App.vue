<template>
  <div id="app">
    <cron-input class="cron-editor" v-model="cron"/>
    <a-input v-model="cron" placeholder="* * * * * ? *"/>
  </div>
</template>

<script>
import { Input } from 'ant-design-vue'

export default {
  name: 'App',
  components: { AInput: Input },
  data () {
    return {
      visible: true,
      cron: '0 15 10 ? * 2-6'
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
