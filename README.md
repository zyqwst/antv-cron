<h1 align="center">
  <a href="https://zyqwst.github.io/antv-cron/dist/index.html" target="_blank">antv-cron</a>
</h1>

[![Start](https://img.shields.io/github/stars/zyqwst/antv-cron?style=social)](https://github.com/zyqwst/antv-cron/stargazers)
[![Fork](https://img.shields.io/github/forks/zyqwst/antv-cron?style=social)](https://github.com/zyqwst/antv-cron/fork)
[![GitHub open issues](https://img.shields.io/github/issues/zyqwst/antv-cron.svg)](https://github.com/zyqwst/antv-cron/issues?q=is%3Aopen+is%3Aissue)
[![npm download](https://img.shields.io/npm/dt/antv-cron.svg?maxAge=30)](https://www.npmjs.com/package/antv-cron)
[![npm download per month](https://img.shields.io/npm/dm/antv-cron.svg)](https://www.npmjs.com/package/antv-cron)
[![npm version](https://img.shields.io/npm/v/antv-cron.svg)](https://www.npmjs.com/package/antv-cron)
[![MIT License](https://img.shields.io/github/license/zyqwst/antv-cron.svg)](https://github.com/zyqwst/antv-cron/blob/main/LICENSE)

A Cron expression editor of easy-to-use, based on Vue2

### Example
**Demo** [https://zyqwst.github.io/antv-cron/dist/index.html](https://zyqwst.github.io/antv-cron/dist/index.html) 

```bash
npm install antv-cron
```

```vue
import CronInput from 'antv-cron'
import 'antv-cron/lib/antv-cron.css'

Vue.use(CronInput)
```

```vue
<template>
  <div id="app">
    ...
    <a-popover trigger="click">
      <template slot="content">
        <cron-input  v-model="cron"/>
      </template>
      <a-input v-model="cron" placeholder="* * * * * ?"/>
    </a-popover>
    ...
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cron: null
    }
  }
}
</script>
```
### antv-cron属性说明如下：

|属性|说明|类型|是否必须|默认值|
:-|:-|:-|:-|:-
|value(v-model)|cron变量|string|是||
|item|可配置的项|array|否|`['second','minute','hour','day','month','week']`|
|weekByNum|星期(周)是否是用数字，默认false，使用英文简写，如SUN、MON|Boolean|否|`false`|
|sundayIndex|星期(周)使用数字时，星期天的值，一般是0或1|int|否|`0`|
|yearStart|年的默认开始日期，如2023||否|`当年`|
|lang|国际化(可选cn和en)|String|否|`cn`|

Don't forget to star if it helped!
如果对您有帮助，别忘记给个星哦

