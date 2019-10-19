import React from 'react'
import ReactDom from 'react-dom'


const myH3 = <h3>独自走在繁华的都市，擦身而过的是熙熙攘攘的人群。路灯拉长孤独的身影，热闹都是旁人的，你总是一个人...</h3>;

let num = 1997;
let str = "你好，BY&K";
let bool = true;
let title = 'This is a h3';
const arr = [
    <h3>斯人若彩虹，遇上方知有</h3>,
    <h3>管他熙熙攘攘阳关道，我偏一条独木桥走到黑</h3>
];
const arrStr = ['魏无羡', '蓝忘机', '舅舅', '师姐', '小天使', '夷陵老祖'];

// React中，需要把key添加給被forEach或map或for循坏直接控制的元素

const nameArr = [];
arrStr.forEach(item => {
    const temp = <h4 key={item}>{item}</h4>;
    nameArr.push(temp)
});

// 调用render函数渲染虚拟DOM元素
ReactDom.render(<div>
    {num + '1009'}
    <hr/>
    {str}
    <hr/>
    {bool.toString()}
    <hr/>
    {bool ? "条件为真" : "条件为假"}
    <hr/>
    <h3 title={title}>独自走在繁华的都市，擦身而过的是熙熙攘攘的人群。路灯拉长孤独的身影，热闹都是旁人的，你总是一个人...</h3>
    <hr/>
    {myH3}
    <hr/>
    {/*{arr}*/}
    {
        //    这是注释，你看不见我
    }
    <hr/>
    {nameArr}
    <hr/>
    {arrStr.map(item => <div key={item}><h5>{item}</h5></div>)}
</div>, document.getElementById('app'));