---
title: Button 按钮
---

# Button 按钮
> Button 作为较为常用的操作组件

## 引用
```
import Vue from 'vue'
import {Button} from 'wheelhub'

new Vue({
    el: '#app',
    components: {
        'g-button': Button
    }
})
```

## 基本用法
<p></p>
<g-button-normal></g-button-normal>
<p></p>

```
<g-button>基本用法</g-button>
```

## 禁用状态
> 当前状态下 Button 不可选中

<p></p>
<g-button-disabled disabled></g-button-disabled>
<p></p>

```
<g-button disabled>禁用状态</g-button>
```

## 图标按钮
> 可在 Button 上添加 icon 位置（默认）于左侧，也可设置在右侧

<p></p>
<g-button-icon icon="setting" iconPosition="left"></g-button-icon>
<p></p>
<p></p>
<g-button-icon icon="setting" iconPosition="right"></g-button-icon>
<p></p>

```
<g-button icon="setting">图标按钮</g-button>
<g-button icon="setting" icon-position="left">图标按钮</g-button>
<g-button icon="setting" icon-position="right">图标按钮</g-button>
```

## 加载中
<p></p>
<g-button-loading loading disabled></g-button-loading>
<p></p>

```
<g-button icon="loading" loading disabled>加载中</g-button>
```

## 按钮组
> 以按钮组的方式出现，常用于多项类似操作。

<g-button-group></g-button-group>

```
<g-button-group>
    <g-button icon-position="left" icon="left">上一页</g-button>
    <g-button icon-position="right" icon="right">下一页</g-button>
</g-button-group>
```

## 事件监听
> 可监测 click 事件，点击上传。

<g-button-click></g-button-click>

```
<g-button @click="submit" 
    :loading="buttonLoading" 
    :disabled="buttonDisabled">点击提交</g-button
>

<script>
    export default {
      data:{
        buttonLoading: false,
        buttonDisabled: false
      },
      methods: {
        submit() {
            this.buttonLoading = true
            if (this.buttonLoading) {
                this.buttonDisabled = true
            }
        }
      }
    }
</script>
```

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| icon | 按钮图标 | String | ---- | ---- | 
| iconPosition | 图片定位 | String | left / right | left | 
| loading | 是否为"loading"状态 | Boolean | true / false | false | 
| disabled | 是否为"不可选"状态 | Boolean | true / false | false |