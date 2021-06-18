---
title: icon
---

# icon 图标

> icon 作为 WheelHub 最简单的组件，推荐使用 iconfont SVG 利于维护，提高性能。

[iconfont 官网](https://www.iconfont.cn/)

## 全局引用

下载（你的项目）`iconfont.js` 后，需要在 `main.js`（或是其他入口 js 文件）引用

```
import "../iconfont.js";
```

### icon 展示

<p></p>
<icon name='setting'></icon>
<p></p>
<icon name='download'></icon>
<p></p>
<icon name='Tags'></icon>
<p></p>

### 使用

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
| icon | 图标名称(必填) | String | iconfont 项目内 icon 名称 | ---- |


