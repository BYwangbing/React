import React from 'react'
import ReactDom from 'react-dom'

// 创建虚拟DOM元素的
// const myH3= React.createElement('h3', {id: 'myh3', title: 'this is a h3'}, '独自走在繁华的都市，擦身而过的是熙熙攘攘的人群。路灯拉长孤独的身影，热闹都是旁人的，你总是一个人...');

const myH3 = <h3>独自走在繁华的都市，擦身而过的是熙熙攘攘的人群。路灯拉长孤独的身影，热闹都是旁人的，你总是一个人...</h3>;

// 调用render函数渲染虚拟DOM元素

ReactDom.render(myH3, document.getElementById('app'));