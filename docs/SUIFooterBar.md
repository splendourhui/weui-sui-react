### SUIFooterBar

工具栏组件

### 属性

属性名称  | 类型 | 默认值 | 是否必须提供 | 可选值 | 用途
------------- | ------------- | --------| ------------- | --------- | ------
items  | array | 无 | 是 | 不限制 | 一个包含所有工具按钮信息的数组

#### 工具按钮属性

属性名称 | 类型 | 是否必须提供 | 可选值 | 用途
------- | ------- | -------- | ------ | -----
icon | string | 是 | 见 `MSUI` 文档中的可选图标 | 按钮图标
location | string | 是 | `pull-left` 或 `pull-right` | 是否激活标签
href | string | 否 | 不限制 | 点击后跳转的 URL
extraClass | string | 否 | 不限制 | 按钮额外属性

### 示例
``` JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { SUIFooterBar } from 'weui-sui-react';

const items = [
  {
    icon: 'icon-me',
    location: 'pull-left',
  },
  {
    icon: 'icon-star',
    location: 'pull-right',
  },
];

ReactDOM.render((
  <SUIFooterBar
    items = {items}
  />
), document.getElementById('container'));

```
