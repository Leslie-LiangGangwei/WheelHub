---
title: Tabs 标签页
---

# Tabs 标签页

> 选择标签切换内容。

### 引用

```
import Vue from 'vue'
import {Tabs, TabsNav, TabsItem, TabsBody, TabsPanel} from 'wheelhub'

new Vue({
    el: '#app',
    components: {
        'g-tabs': Tabs,
        'g-tabs-nav': TabsNav,
        'g-tabs-item': TabsItem,
        'g-tabs-body': TabsBody,
        'g-tabs-panel': TabsPanel
    }
})
```

### 正常使用

#### Tabs - row

> Tabs 默认为"列(横)"展示

<p></p>
<g-tabs-row></g-tabs-row>
<p></p>

```
<g-tabs selected='1'>
    <g-tabs-nav>
        <g-tabs-item name="1">item 1</g-tabs-item>
        <g-tabs-item name="2">item 2</g-tabs-item>
        <g-tabs-item name="3">item 3</g-tabs-item>
    </g-tabs-nav>
    <g-tabs-body>
        <g-tabs-panel name="1">panel 1</g-tabs-panel>
        <g-tabs-panel name="2">panel 2</g-tabs-panel>
        <g-tabs-panel name="3">panel 3</g-tabs-panel>
    </g-tabs-body>
</g-tabs>
```

#### Tabs - column

> 通过 `direction`，将 Tabs 以"栏(竖)"展示

<p></p>
<g-tabs-column></g-tabs-column>
<p></p>

```
<g-tabs selected='1' direction="column">
    <g-tabs-nav>
        <g-tabs-item name="1">item 1</g-tabs-item>
        <g-tabs-item name="2">item 2</g-tabs-item>
        <g-tabs-item name="3">item 3</g-tabs-item>
    </g-tabs-nav>
    <g-tabs-body>
        <g-tabs-panel name="1">panel 1</g-tabs-panel>
        <g-tabs-panel name="2">panel 2</g-tabs-panel>
        <g-tabs-panel name="3">panel 3</g-tabs-panel>
    </g-tabs-body>
</g-tabs>
```

### 存在 Tabs-item 不可选中

<p></p>
<g-tabs-row-disabled></g-tabs-row-disabled>
<p></p>

```
<g-tabs selected='1'>
    <g-tabs-nav>
        <g-tabs-item name="1">item 1</g-tabs-item>
        <g-tabs-item name="2" disabled>item 2</g-tabs-item>
        <g-tabs-item name="3">item 3</g-tabs-item>
    </g-tabs-nav>
    <g-tabs-body>
        <g-tabs-panel name="1">panel 1</g-tabs-panel>
        <g-tabs-panel name="2">panel 2</g-tabs-panel>
        <g-tabs-panel name="3">panel 3</g-tabs-panel>
    </g-tabs-body>
</g-tabs>
```

### Attributes

#### Tabs

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| selected | 默认选择 Tabs-item(必填)| String | ---- | ---- | 
| direction | Tabs 定位 | String | row / column | row | 

#### Tabs-item

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| disabled | Tabs-item 是否能点击 | Boolean | true / false | false | 
| name | 对应 selected(必填) | [String, Number] | ---- | ---- | 

#### Tabs-panel

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| name | 对应 selected(必填) | [String, Number] | ---- | ---- | 
