---
title: icon 图标
---

# icon 图标

> icon 作为 WheelHub 最简单的组件，推荐使用 iconfont SVG 利于维护，提高性能。

## 引用

### iconfont.js 引用

> 在 [iconfont 官网](https://www.iconfont.cn/) 下载（你的项目文件）`iconfont.js` 后

1. 需要在 `main.js`（或是其他入口 js 文件）引用

```
import "../iconfont.js";
```

2. 或者在 `index.html`

```
<script src="./src/icon/iconfont.js"></script>
```

#### 组件引用

```
import Vue from 'vue'
import {Icon} from 'wheelhub'

new Vue({
    el: '#app',
    components: {
        'g-icon': Icon
    }
})
```

## icon 展示
<p></p>
<g-icon name='setting'></g-icon>
<p></p>
<g-icon name='download'></g-icon>
<p></p>
<g-icon name='Tags'></g-icon>
<p></p>

## 使用
```
<g-icon name='iconName'></g-icon>
// 更换 'iconName' 即可
```

### 默认样式(可自行调整)
```
$color: #1c1c1c;
.g-icon {
  width: 1em;
  height: 1em;
  margin-right: .2em;
  fill: $color;
}
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| name | 图标名称(必填) | String | ---- | ---- |


