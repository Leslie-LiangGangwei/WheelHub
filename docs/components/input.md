---
title: Input
---

# Input 输入框

> 通过鼠标或键盘输入字符
>
> 通常情况下，通过 `input` 事件更新组件的绑定值，并支持 `v-model`

### 基础用法

```
<g-input></g-input>
```

### 禁用状态

```
<g-input disabled></g-input>
```

### 不可读状态

```
<g-input readonly></g-input>
```

### 错误状态

```
<g-input error="error"></g-input>
```

### 事件监听

> 可监测 change/input/focus/blur 事件

```
<g-input @input="valueChange"></g-input>

<script>
    export default {
      method: {
        valueChange(){
            alert('valueChange')
        }
      }
    }
</script>
```

### v-model 双向绑定

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

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| value | 输入框值 | [String, Number] | ---- | ---- | 
| type | 输入框类型 | String | text / password / textarea | text | 
| disabled | 是否为"可选"状态 | Boolean | true /false | false | 
| placeholder | 输入框占位符 | String | ---- | '请输入内容' | 
| readonly | 是否为"不可读"状态 | Boolean | true / false | false | 
| disabled | 是否为"可选"状态 | Boolean | true /false | false | 
| error | 错误提示 | String | ---- | ---- | 
