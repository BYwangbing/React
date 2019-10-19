import React from 'react'
import ReactDom from 'react-dom'

// 导入Hello组件
import Hello from "@/components/Hello";

const myH3 = <h3>独自走在繁华的都市，擦身而过的是熙熙攘攘的人群。路灯拉长孤独的身影，热闹都是旁人的，你总是一个人...</h3>;

const dog = {
    name: '大黄',
    age: '3',
    gender: '雄'
};

// 调用render函数渲染虚拟DOM元素
ReactDom.render(<div>
    {myH3}
    <Hello name={dog.name} age={dog.age} gender={dog.gender}/>
    <Hello {...dog} />
</div>, document.getElementById('app'));