import React from 'react'
import ReactDom from 'react-dom'

const myH3 = <h3>独自走在繁华的都市，擦身而过的是熙熙攘攘的人群。路灯拉长孤独的身影，热闹都是旁人的，你总是一个人...</h3>;

// class关键字创建组件
class Item extends React.Component {
    // 构造器
    constructor() {
        // 由于 Item 组件，继承了 React.Component 这个父类，所以，自定义的构造器中，必须 调用 super()
        super();
        // 只有调用了 super() 以后，才能使用 this 关键字
        this.state = {
            // 这个 this.state = {} 就相当于 Vue 中的 data() { return { } }
            msg: '斯人若彩虹，遇上方知有'
        }
    }

    //render函数的作用，是渲染当前组件所对应的虚拟DOM元素
    render() {
        // 在 class 创建的组件中， this.state 上的数据，都是可读可写的！
        // this.state.msg = 'msg的值被我修改了！';

        // 注意：不论是 class 还是普通 function 创建的组件，它们的 props 都是只读的；
        return <div>
            <h3>活着就应该听听甜甜的歌， 听听甜甜的故事， 变成甜甜的人</h3>
            {/* 在 class 关键字创建的组件中，如果想使用 外界传递过来的 props 参数，不需接收，直接通过 this.props.*** 访问即可 */}
            {/* 注意：在 class 组件内部，this 表示 当前组件的实例对象 */}
            <h3>{this.props.name}-----{this.props.age}------{this.props.gender}</h3>
            <h3>{this.state.msg}</h3>
        </div>
    }
}

const dog = {
    name: '大黄',
    age: '3',
    gender: '雄'
};

// 调用render函数渲染虚拟DOM元素
ReactDom.render(<div>
    {myH3}
    <Item name={dog.name} age={dog.age} gender={dog.gender}/>
    <Item {...dog} />
</div>, document.getElementById('app'));