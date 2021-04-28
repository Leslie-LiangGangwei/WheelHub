# WheelHub Vue UI 组件库

[![Build Status](https://travis-ci.com/Leslie-LiangGangwei/WheelHub.svg?branch=main)](https://travis-ci.com/Leslie-LiangGangwei/WheelHub)
![npm](https://img.shields.io/npm/v/wheelhub)

## 介绍

这是我在学习 Vue 过程中做的 UI 框架，希望能帮到你

## 开始使用

1. 添加 CSS 样式 使用该框架前，需要将 CSS 设置

    ```
    *, *::before, *::after{ box-sizing: border-box; }
    ```

   你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: #fff;                
        --button-hover-bg: #666;
        --border-color-active: #eee;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
    }
    ```
   IE 15 及以上浏览器都支持此样式

2. 安装 WheelHub
    ```
    yarn wheelhub
    ```

3. 引用 WheelHub

   ```
   import { Button, ButtonGroup, Icon } from "wheelhub";
   import 'wheelhub/dist/index.css'
   
   Vue.component("g-button", Button);
   Vue.component("g-button-group", ButtonGroup);
   Vue.component("g-icon", Icon);
   ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
