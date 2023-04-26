<template>
  <div id="app">
    <div class="title">   
      <a href="https://github.com/zyqwst/json-schema-editor-vue" target="_blank">json-schema-editor-vue</a>
      <span class="version"> version：{{ version }}</span>
    </div>
    <div class="desc">
      <div>A Cron expression editor of easy-to-use, based on Vue2
      </div>
    </div>
    <div class="container">
      <div class="config">
        <a-form :form="form">
          <a-form-item label="语言(language)" :label-col="{ span: 10 }" :wrapper-col="{ span: 12 }">
            <a-select v-model="form.lang" style="width: 120px">
              <a-select-option v-for="item in langOptions" :value="item" :key="item">{{item}}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="可选配置项(enable tabs)" :label-col="{ span: 14 }" :wrapper-col="{ span: 24 }">
            <a-select mode="tags" v-model="form.item">
              <a-select-option v-for="val in itemOptions" :key="val" :value="val">{{ val }}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="使用数字表示周(week by num)" :label-col="{ span: 18 }" :wrapper-col="{ span: 6 }">
            <a-switch v-model="form.weekByNum"/>
          </a-form-item>
          <a-form-item label="星期天是第几天(sunday index)" :label-col="{ span: 16 }" :wrapper-col="{ span: 8 }">
            <a-input-number v-model="form.sundayIndex" :disabled="!form.weekByNum"/>
          </a-form-item>
          <a-form-item label="开始年度(min year)" :label-col="{ span: 12}" :wrapper-col="{ span: 12 }">
            <a-input-number v-model="form.yearStart"/>
          </a-form-item>
        </a-form>
      </div>
      <div class="demo">
        <cron-input
          class="cron-editor"
          v-model="cron"
          :week-by-num="form.weekByNum"
          :sundayIndex="form.sundayIndex"
          :item="form.item"
          :year-start="form.yearStart"
          :lang="form.lang"
          @change="change"
          >
          <div style="display:flex;padding:1em">
            <a-input v-model="cron" placeholder="cron str" style="flex:1"/>
          </div>
        </cron-input>
        
        <h2 style="margin-top:1em">气泡编辑</h2>
        <a-popover trigger="click">
          <template slot="content">
            <cron-input v-model="cron" v-if="show"/>
          </template>
          <a-input v-model="cron" placeholder="cron str" v-if="show"/>
        </a-popover>
      </div>

    </div>
    
  </div>
</template>

<script>
import { Input,InputNumber, Switch, Select,Form, Popover } from 'ant-design-vue'
var app = require("../package.json");
export default {
  name: 'App',
  components: { AInput: Input, AInputNumber: InputNumber, ASwitch: Switch, ASelect: Select,ASelectOption: Select.Option, AForm: Form,AFormItem: Form.Item, APopover: Popover },
  data () {
    return {
      version: app.version,
      show: true,
      cron: '0 0 2 * * MONL',
      langOptions: ['cn', 'en'],
      itemOptions: ['second','minute','hour','day','month','week','year'],
      form: {
        lang: 'cn',
        item: ['second','minute','hour','day','month','week'],
        weekByNum: false,
        sundayIndex: 0,
        yearStart: new Date().getFullYear()
      }
    }
  },
  mounted(){
    console.info('init config', JSON.stringify(this.form))
  },
  methods: {
    changeWeekByNum(val){
      this.cron = (val ? '0 0 2 * * 1' : '0 0 2 * * MONL')
      !val && (this.form.sundayIndex = 0)
    },
    change(val){
      console.info(val)
    }
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.title{
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  height:100px;
  line-height: 100px;
}
.version{
  font-size: 16px;
}
.desc{
  padding:20px;
  min-width:800px;
  margin:auto;
  padding: 0 0 1em 0;
  font-size: 1.2em;
  text-align: center;
}
.container{
  display: flex;
  padding:40px 20px;
  width:940px;
  justify-content:center;
  margin:auto;
  border: 1px solid rgba(0,0,0,.1);
  box-sizing: border-box;
  box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
}
.config{
  flex:0 0 300px;
  margin-right: 40px;
}
.demo{
  flex:1;
}
.cron-editor{
  border: 1px solid rgba(0,0,0,.1);
}

</style>
