---
title: icon
---

# icon 图标

> icon 作为 WheelHub 最简单的组件，这样推荐使用 iconfont SVG

[iconfont 官网](https://www.iconfont.cn/)

### 全局引用

下载（你的项目）`iconfont.js` 后，需要在 `main.js`（或是其他入口 js 文件）引用

```
import "../iconfont.js";
```

### 展示

<icon></icon>

### 代码

```
<g-icon name='iconName'></g-icon>
// 更换 'iconName' 即可
```

### 默认样式(可自行调整)

```
$color: #1C1C1C;
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
| icon | 按钮图标 | String | iconfont 项目内 icon 名称 | ---- |