---
title: Tabs
---

# Tabs 标签页

> 选择标签切换内容。

### 正常使用

#### Tabs - row

> Tabs 默认为"列(横)"展示

```
<>
```

#### Tabs - column

> 通过 `direction`，将 Tabs 以"栏(竖)"展示

### 存在 Tabs-item 不可选中

## Attributes

### Tabs

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| selected | 默认选择 Tabs-item(必填)| String | ---- | ---- | 
| direction | Tabs 定位 | String | row / column | row | 

### Tabs-item

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| disabled | Tabs-item 是否能点击 | Boolean | true / false | false | 
| name | 对应 selected(必填) | [String, Number] | ---- | ---- | 

### Tabs-panel

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- | 
| name | 对应 selected(必填) | [String, Number] | ---- | ---- | 
