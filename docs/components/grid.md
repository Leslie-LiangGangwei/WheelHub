---
title: Grid 栅格
---

# Grid 栅格
> 24 栅格系统

### 设计理念

> 布局的栅格化系统，我们是基于行 `row` 和列 `col` 来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

* 通过 `row` 在水平方向建立一组 `column`（简写 col）。

  * 你的内容应当放置于 `col` 内，并且，只有 `col` 可以作为 `row` 的直接元素。

  * 栅格系统中的列是指 `1 - 24` 的值来表示其跨越的范围。

* 我们的栅格化系统基于 Flex 布局

  * 允许子元素在父节点内的水平对齐方式 - 居左、居中、居右

### 引用

```
import Vue from 'vue'
import {Row, Col} from 'wheelhub'

new Vue({
    el: '#app',
    components: {
        'g-row': Row,
        'g-col': Col
    }
})
```

### 普通用法

<p></p>
<g-grid-normal></g-grid-normal>
<p></p>

```
<g-row class="demoRow">
  <g-col span="8"><div class="demoCol">8</div></g-col>
  <g-col span="8"><div class="demoCol">8</div></g-col>
  <g-col span="8"><div class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="6"><div class="demoCol">6</div></g-col>
  <g-col span="6"><div class="demoCol">6</div></g-col>
  <g-col span="6"><div class="demoCol">6</div></g-col>
  <g-col span="6"><div class="demoCol">6</div></g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
</g-row>
    
<style scoped>
    * { box-sizing: border-box; }

    .demoRow { margin: 10px 0; }

    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
```

### 适配 iPhone / iPad / PC

> iPhone 界面下，`g-col` 栅格空间为 4，
>
> iPad 界面下，`g-col` 栅格空间为 8，
>
> PC 界面下，`g-col` 栅格空间为 24。

<p></p>
<g-grid-media></g-grid-media>
<p></p>

```
<g-row class="demoRow">
    <g-col span="4" :ipad="{span:'8'}" :pc="{span: '24'}"><div class="demoCol">8</div></g-col>
    <g-col span="4" :ipad="{span:'8'}" :pc="{span: '24'}"><div class="demoCol">8</div></g-col>
    <g-col span="4" :ipad="{span:'8'}" :pc="{span: '24'}"><div class="demoCol">8</div></g-col>
    <g-col span="4" :ipad="{span:'8'}" :pc="{span: '24'}"><div class="demoCol">8</div></g-col>
</g-row>

<style scoped>
    * { box-sizing: border-box; }

    .demoRow { margin: 10px 0; }

    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
```

### 设置 gutter
#### gutter="16"

<p></p>
<g-grid-gutter></g-grid-gutter>
<p></p>

```
<g-row class="demoRow" gutter="16">
  <g-col span="8"><div class="demoCol">8</div></g-col>
  <g-col span="8"><div class="demoCol">8</div></g-col>
  <g-col span="8"><div class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow" gutter="16">
  <g-col span="6"><div class="demoCol">6</div></g-col>
  <g-col span="6"><div class="demoCol">6</div></g-col>
  <g-col span="6"><div class="demoCol">6</div></g-col>
  <g-col span="6"><div class="demoCol">6</div></g-col>
</g-row>
<g-row class="demoRow" gutter="16">
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
  <g-col span="4"><div class="demoCol">4</div></g-col>
</g-row>
<g-row class="demoRow" gutter="16">
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
  <g-col span="2"><div class="demoCol">2</div></g-col>
</g-row>

<style scoped>
    * { box-sizing: border-box; }

    .demoRow { margin: 10px 0; }

    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
```

#### gutter="{iphone:'0', ipad:'32', pc:'8'}"

> iPhone 界面下，`gutter` 为 0px，
>
> iPad 界面下，`gutter` 为 32px，
>
> PC 界面下，`gutter` 为 8px。


<p></p>
<g-grid-mediagutter></g-grid-mediagutter>
<p></p>

```
<g-row class="demoRow" :gutter="{iphone:'0', ipad:'32', pc:'8'}">
    <g-col span="24" :ipad="{span:'12'}" :pc="{span: '8'}"><div class="demoCol">8</div></g-col>
    <g-col span="24" :ipad="{span:'12'}" :pc="{span: '8'}"><div class="demoCol">8</div></g-col>
    <g-col span="24" :ipad="{span:'12'}" :pc="{span: '8'}"><div class="demoCol">8</div></g-col>
</g-row>

<style scoped>
    * { box-sizing: border-box; }

    .demoRow { margin: 10px 0; }

    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
```

### 设置 offset

<p></p>
<g-grid-offset></g-grid-offset>
<p></p>

```
<g-row class="demoRow">
  <g-col span="4" ><div class="demoCol">4</div></g-col>
  <g-col span="4" offset="4"><div class="demoCol">span="4" offset="4"</div></g-col>
  <g-col span="4" ><div class="demoCol">4</div></g-col>
  <g-col span="4" offset="4"><div class="demoCol">span="4" offset="4"</div></g-col>
  <g-col span="4" offset="4"><div class="demoCol">span="4" offset="4"</div></g-col>
  <g-col span="4" ><div class="demoCol">4</div></g-col>
  <g-col span="4" offset="4"><div class="demoCol">span="4" offset="4"</div></g-col>
  <g-col span="4" ><div class="demoCol">4</div></g-col>
</g-row>

<style scoped>
    * { box-sizing: border-box; }

    .demoRow { margin: 10px 0; }

    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
```

### Attributes

### Row

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| gutter | 栅格间隔 | [String, Number, Object] | 8 / {iphone:8, ipad:16, narrowPc:24, pc:32} 建议为 8 的倍数 | 0 | 
| justify | 水平排列方式     | String | left / right / center | center |

### Col

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| span | 栅格占位格数（默认为：iphone 尺寸 `<576px`) | [String, Number] | ---- | ---- |
| offset | 栅格左侧间隔格数（默认为：iphone 尺寸 `<576px`) | [String, Number] | ---- | ---- |
| ipad | 屏幕 >= `576px`，设置 `span`和`offset`的对象 | [Object] | ---- | ---- |
| pc | 屏幕 >= `992px`，设置 `span`和`offset`的对象 | [Object] | ---- | ---- |
| widePc | 屏幕 >= `1200px`，设置 `span`和`offset`的对象 | [Object] | ---- | ---- |
| biggestWidePc | 屏幕 >= `1600px`，设置 `span`和`offset`的对象 | [Object] | ---- | ---- |<script><script>
