import React from 'react'
import ReactDom from 'react-dom'


const myH3 = <h3>独自走在繁华的都市，擦身而过的是熙熙攘攘的人群。路灯拉长孤独的身影，热闹都是旁人的，你总是一个人...</h3>;

const dog = {
    name: '大黄',
    age: '3',
    gender: '雄'
};

function Hello(props) {
    console.log(props);
    return <div>这是 Hello 组件 --- {props.name} --- {props.age} --- {props.gender}</div>
}

// 调用render函数渲染虚拟DOM元素
ReactDom.render(<div>
    {myH3}
    <Hello name={dog.name} age={dog.age} gender={dog.gender}/>
    <Hello {...dog} />
</div>, document.getElementById('app'));