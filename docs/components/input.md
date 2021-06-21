---
title: Input 输入框
---

# Input 输入框
> 通过鼠标或键盘输入字符
>
> 可通过 `input` 事件更新组件的绑定值，并支持 `v-model`

### 引用
```
import Vue from 'vue'
import {Input} from 'wheelhub'

new Vue({
    el: '#app',
    components: {
        'g-input': Input
    }
})
```

### 基础用法

<p></p>
<g-input-normal></g-input-normal>
<p></p>

```
<g-input></g-input>
```

### 禁用状态

<p></p>
<g-input-normal disabled placeholder="禁用状态"></g-input-normal>
<p></p>

```
<g-input disabled></g-input>
```

### 可读状态

<p></p>
<g-input-readonly readonly></g-input-readonly>
<p></p>

```
<g-input readonly></g-input>
```

### 错误状态

<p></p>
<g-input-error readonly></g-input-error>
<p></p>

```
<g-input error="error"></g-input>
```

### 事件监听

> 可监测 change/input/focus/blur 事件

<p></p>
<g-input-event></g-input-event>
<p></p>

```
<g-input @input="valueChange"></g-input>

<script>
    export default {
      method: {
        valueChange(){
            alert('input valueChange')
        }
      }
    }
</script>
```

### v-model 双向绑定

<p></p>
<g-input-model></g-input-model>
<p></p>

```
<g-input v-model="inputValue"></g-input>
<p>{{inputValue}}</p>

<script>
    export default {
      data() {
        return {
          inputValue: ''
        }
      }
    }
</script>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| value | 输入框值 | [String, Number] | ---- | ---- | 
| type | 输入框类型 | String | text / password / textarea | text |
| placeholder | 输入框占位符 | String | ---- | '请输入内容' | 
| disabled | 是否为"禁用"状态 | Boolean | true /false | false | 
| readonly | 是否为"可读"状态 | Boolean | true / false | false |
| error | 错误提示 | String | ---- | ---- |