---
title: Layout 布局
---

# Layout 布局

### 设计建议

> 一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。

* 顶部导航（大部分系统）：一级导航高度 `64px`，二级导航 `48px`


* 顶部导航（展示类页面）：一级导航高度 `80px`，二级导航 `56px`


* 顶部导航高度的范围计算公式为：`48+8n`


* 侧边导航宽度的范围计算公式：`200+8n`

### 组件概述

> Layout 布局需要用到的组件
>
> `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。

* `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。


* `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。


* `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。


* `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

### 引用

```
import Vue from 'vue'
import {Layout, Header, Content, Footer, Sider} from 'wheelhub'

new Vue({
    el: '#app',
    components: {
        'g-layout': Layout,
        'g-header': Header,
        'g-content': Content,
        'g-footer': Footer,
        'g-sider': Sider
    }
})
```

### 组件展示

#### 上-中-下 布局

<p></p>
<g-layout-normal></g-layout-normal>
<p></p>

```
<g-layout style="color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
        content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
```

#### 顶部-侧边布局-通栏

<p></p>
<g-layout-normal-sider></g-layout-normal-sider>
<p></p>

```
<g-layout style="color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-layout style="color: white;">
        <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
            sider
        </g-sider>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
```

#### 侧边布局

<p></p>
<g-layout-sider-normal></g-layout-sider-normal>
<p></p>

```
<g-layout style="color: white; margin-bottom:50px;">
    <g-sider style="height: 200px; background:#ddd; width:200px; color: black;">
        sider
    </g-sider>
    <g-layout style="color: white;">
        <g-header style="height: 50px; background:lightskyblue;">
            header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
            footer
        </g-footer>
    </g-layout>
</g-layout>
```