---
title: Collapse 折叠面板
---
# Collapse 折叠面板
> 可以折叠/展开的内容区域。

## 引用
```
import Vue from 'vue'
import {Collapse, CollapseItem} from 'wheelhub'

new Vue({
    el: '#app',
    components: {
        'g-collapse': Collapse
        'g-collapse-item': CollapseItem
    }
})
```

## 正常用法

<p></p>
<g-collapse></g-collapse>
<p></p>

```
<g-collapse>
    <g-collapse-item title="title 1" name="1">
        panel 1
    </g-collapse-item>
    <g-collapse-item title="title 2" name="2">
        panel 2
    </g-collapse-item>
    <g-collapse-item title="title 3" name="3">
        panel 3
    </g-collapse-item>
</g-collapse>
```

## 开启 single 模式
> 同一 Collapse 组件仅可展开一个 CollapseItem

<p></p>
<g-collapse-single></g-collapse-single>
<p></p>

```
<g-collapse single>
    <g-collapse-item title="title 1" name="1">
        panel 1
    </g-collapse-item>
    <g-collapse-item title="title 2" name="2">
        panel 2
    </g-collapse-item>
    <g-collapse-item title="title 3" name="3">
        panel 3
    </g-collapse-item>
</g-collapse>
```

## 设置默认展开项
> 默认展开"第一项"和"第二项" CollapseItem

<p></p>
<g-collapse-selected></g-collapse-selected>
<p></p>

```
<g-collapse :selected=["1", "2"]>
    <g-collapse-item title="title 1" name="1">
        panel 1
    </g-collapse-item>
    <g-collapse-item title="title 2" name="2">
        panel 2
    </g-collapse-item>
    <g-collapse-item title="title 3" name="3">
        panel 3
    </g-collapse-item>
</g-collapse>
```

## selected.sync
> 通过 selected.sync 实现数据双向绑定

<p></p>
<g-collapse-selected-sync></g-collapse-selected-sync>
<p></p>

```
<g-collapse :selected.sync=collapseSelected>
    <p>{{collapseSelected}}</p>

    <g-collapse-item title="title 1" name="1">
        panel 1
    </g-collapse-item>
    <g-collapse-item title="title 2" name="2">
        panel 2
    </g-collapse-item>
    <g-collapse-item title="title 3" name="3">
        panel 3
    </g-collapse-item>
</g-collapse>

new Vue({
    el: '#app',
    data: {
        collapseSelected: ['1', '2']
    },
})
```

## Attributes
### Collapse
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| single | 判断 Collapse-item 是否只展开"单个" | Boolean | true / false | false |
| selected | 设置 Collapse 默认展开项 | Array | ---- | [] |

### Collapse-item
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | Collapse-item 标题（必填项） | String | ---- | ---- |
| name | 对应 Selected（必填项） | String | ---- | ---- |