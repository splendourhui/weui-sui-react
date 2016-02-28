### SUIHeader

标题栏组件，可以自定义颜色、文案以及左右按钮和链接。

### 属性

属性名称  | 类型 | 默认值 | 是否必须提供 | 可选值 | 用途
------------- | ------------- | --------| ------------- | --------- | ------
title  | string | 无 | 是 | 不限制 | 标题
backgroundColor | string | #f7f7f8 | 不是 | 不限制 | 标题栏背景颜色
titleColor | string | #3d4145 | 不是 | 不限制  | 标题颜色
leftButton | object | {} | 不是 | 不限制 | 左边按钮
rightButton | object | {} | 不是 | 不限制 | 右边按钮
leftButtonWithIcon | object | {} | 不是 | 不限制 | 左边带图标按钮
rightButtonWithIcon | object | {} | 不是 | 不限制 | 右边带图标按钮

#### Button对象属性

属性名称 | 类型 | 是否必须提供 | 可选值 | 用途
------- | ------- | -------- | ------ | -----
title | string | 否 | 不限制 | 文字
extraClass | string | 否 | 不限制 | 按钮额外属性

#### ButtonWithIcon对象属性

属性名称 | 类型 | 是否必须提供 | 可选值 | 用途
------- | ------- | -------- | ------ | -----
title | string | 否 | 不限制 | 文字
icon | string | 否 | 见 `MSUI` 文档中的可选图标 | 按钮图标
color | string | 否 | 不限制 | 文字和图标的颜色
href | string | 否 | 不限制 | 点击后跳转的 URL
extraClass | string | 否 | 不限制 | 按钮额外属性

### 示例
``` JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { SUIHeader } from 'weui-sui-react';

ReactDOM.render((
  <SUIHeader
    title="IndexPage"
    backgroundColor="#04BE02"
    titleColor="#FFFFFF"
    leftButtonWithIcon={{
      title: '左按钮',
      icon: 'icon-left',
      color: '#FFF',
    }}
    rightButtonWithIcon={{
      title: '右按钮',
      icon: 'icon-right',
      color: '#FFF',
    }}
  />
), document.getElementById('container'));

```
