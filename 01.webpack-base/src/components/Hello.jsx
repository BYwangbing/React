import React from 'react'

// 第一种创建组件的方式
export default function Hello(props) {
    console.log(props);
    // Read only
    return <div>这是 Hello 组件 --- {props.name} --- {props.age} --- {props.gender}</div>
}