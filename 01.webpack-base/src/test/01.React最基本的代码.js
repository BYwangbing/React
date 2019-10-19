import React from 'react'
import ReactDom from 'react-dom'

// 这是 创建虚拟DOM元素的 API
//  第一个参数： 字符串类型的参数，表示要创建的标签的名称
//  第二个参数：对象类型的参数， 表示 创建的元素的属性节点
//  第三个参数： 子节点
const myH3 = React.createElement('h3', {
    id: 'myh1',
    title: 'this is a h1'
}, '独自走在繁华的都市，擦身而过的是熙熙攘攘的人群。路灯拉长孤独的身影，热闹都是旁人的，你总是一个人...');

const myDiv = React.createElement('div', null, '今天也很爱你', myH3);

// 渲染：

// 3. 渲染虚拟DOM元素
// 参数1： 表示要渲染的虚拟DOM对象
// 参数2： 指定容器,注意：这里不能直接放 容器元素的Id字符串，需要放一个容器的DOM对象

ReactDom.render(myDiv, document.getElementById('app'));