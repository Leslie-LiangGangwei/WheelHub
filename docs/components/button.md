---
title: Button
---

# Button 按钮

> Button 作为最常用的操作组件。

### 基本用法

```
<g-button>基本用法</g-button>
```

### 禁用状态

> 当前状态下 Button 不可选中

```
<g-button disabled>禁用状态</g-button>
```

### 图标按钮

> 可在 Button 上添加 icon，也可设置 icon 位于左侧或是右侧

```
<g-button icon="setting">图标位于左</g-button>
<g-button icon="setting" icon-position="left">图标位于左</g-button>
<g-button icon="setting" icon-position="right">图标位于友</g-button>
```

### 加载中

```
<g-button icon="loading" loading>加载中</g-button>
```

### 按钮组

> 以按钮组的方式出现，常用于多项类似操作。

```
<g-button-group>
    <g-button icon-position="left" icon="left">上一页</g-button>
    <g-button icon-position="right" icon="right">下一页</g-button>
</g-button-group>
```

### 事件监听

> 可监测 click 事件

```
<g-button @click="submit" 
    :loading="buttonLoading" 
    :icon="buttonIcon" 
    :disabled="buttonDisabled">点击提交</g-button
>

<script>
    export default {
      data:{
        buttonLoading: false,
        buttonIcon: '',
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
| icon | 按钮图标 | String | iconfont 项目内 icon 名称 | ---- | 
| iconPosition | 图片定位 | String | left / right | left | 
| loading | 是否为"loading"状态 | Boolean | true / false | false | 
| disabled | 是否为"不可选"状态 | Boolean | true / false | false | 
