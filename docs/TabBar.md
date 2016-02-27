### TabBar

标签栏组件

### 属性

属性名称  | 类型 | 默认值 | 是否必须提供 | 可选值 | 用途
------------- | ------------- | --------| ------------- | --------- | ------
items  | array | 无 | 是 | 不限制 | 一个包含所有标签信息的数组

#### 标签属性

属性名称 | 类型 | 是否必须提供 | 可选值 | 用途
------- | ------- | -------- | ------ | -----
title | string | 否 | 不限制 | 文字
extraClass | string | 否 | 不限制 | 标签额外属性
icon | string | 否 | 见 `MSUI` 文档中的可选图标 | 标签图标
badge | string | 否 | 不限制 | 气泡显示内容
active | boolean | 否 | `true` 或 `false` | 是否激活标签
href | string | 否 | 不限制 | 点击后跳转的 URL

### 示例
``` JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { TabBar } from 'weui-sui-react';

const tabItems = [
  {
    icon: 'icon-me',
    title: '标签1',
    badge: '1',
    active: true,
  },
  {
    icon: 'icon-star',
    title: '标签2',
  },
];

ReactDOM.render((
  <TabBar
    items = {tabItems}
  />
), document.getElementById('container'));

```
