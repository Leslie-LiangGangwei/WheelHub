---
title: Toast
---

# Toast 全局提示

> Toast 为全局展示操作反馈信息的组件。

## 引入

> 贯彻工程化思路，用户需要自动 `vue.ues(...)`调用插件后，才可使用。

### 需要在 app.js 调用

```
import Vue from 'vue'
import Toast from './component/toast'
import toastPlugin from 'toastPlugin'

Vue.use(toastPlugin)

new Vue({
    el: '#app',
    methods: {
        showToast() {
            this.$toast('我是 Toast')
        }
    }
})
```

### 基本用法

> Toast 三秒后自动关闭

```
<div id="app">
    <g-button @click="showToast">触发 Toast</g-button>
</div>

new Vue({
    el: '#app',
    methods: {
        showToast() { 
            this.$toast('我是 Toast') 
        }
    }
})
```

### Toast 不同定位

#### 默认定位（Top）

```
<div id="app">
    <g-button @click="showToast">触发 Toast</g-button>
</div>

new Vue({
    el: '#app',
    methods: {
        showToast() { this.$toast('我是 Toast') }
    }
})
```

#### Bottom 定位

```
<div id="app">
    <g-button @click="showToast">触发 Toast</g-button>
</div>

new Vue({
    el: '#app',
    methods: {
        showToast() { 
            this.$toast('我是 Toast' ,{
                toastPosition: 'bottom'
            })
        }
    }
})
```

#### middle 定位

```
<div id="app">
    <g-button @click="showToast">触发 Toast</g-button>
</div>

new Vue({
    el: '#app',
    methods: {
        showToast() {
            this.$toast('我是 Toast' ,{
                toastPosition: 'middle'
            })
        }
    }
})
```

### Toast 启用 HTML

```
<div id="app">
    <g-button @click="showToast">触发 Toast</g-button>
</div>

new Vue({
    el: '#app',
    methods: {
        showToast() { 
            this.$toast('<strong>我是 Toast</strong>', {
                enableHtml: true
            }) 
        }
    }
})
```

### Toast 是否自动关闭

#### 开启自动关闭

> 5 秒后关闭 Toast

```
<div id="app">
    <g-button @click="showToast">触发 Toast</g-button>
</div>

new Vue({
    el: '#app',
    methods: {
        showToast() { 
            this.$toast('<strong>我是 Toast</strong>', {
                autoClose: 5
            }) 
        }
    }
})
```

#### 不开启自动关闭

```
<div id="app">
    <g-button @click="showToast">触发 Toast</g-button>
</div>

new Vue({
    el: '#app',
    methods: {
        showToast() { 
            this.$toast('<strong>我是 Toast</strong>', {
                autoClose: false
            }) 
        }
    }
})
```

### Toast 添加 toastButton

```
<div id="app">
    <g-button @click="showToast">触发 Toast</g-button>
</div>

new Vue({
    el: '#app',
    methods: {
        showToast() { 
            this.$toast('我是 Toast', {
                autoClose: false,
                toastButton: {
                    text: "close", 
                    callback: alert('可执行回调函数')   
                }
            }) 
        }
    }
})
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| message | toast 文案 | String | ---- | ---- | 
| toastPosition | toast 定位 | String | top/bottom/middle | top | 
| enableHtml | toast 文案是否启用 HTML，例如`<strong></strong>` | Boolean | true/false | false | 
| autoClose | toast 是否自动关闭 | [Boolean, Number]  | ---- | 3 | 
| toastButton | toast 关闭按钮 | Object | ---- | {text: "关闭", callback: undefined} |

