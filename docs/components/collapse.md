---
title: Collapse
---
# Collapse 折叠面板
> 可以折叠/展开的内容区域。

### 正常用法
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

### 开启 single 模式
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

### 设置 collapse 默认展开项
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

### 通过 selected.sync 实现数据双向绑定
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
| single | 判断 collapse 是否只展开"单个" | Boolean | true / false | false |
| selected | 设置 collapse 默认展开项 | Array | ---- | [] |

### Collapse-item
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | Collapse-item 标题（必填项） | String | ---- | ---- |
| name | 对应 selected（必填项） | String | ---- | ---- |