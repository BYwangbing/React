import React from 'react'
import ReactDom from 'react-dom'

const myH3 = <h3>独自走在繁华的都市，擦身而过的是熙熙攘攘的人群。路灯拉长孤独的身影，热闹都是旁人的，你总是一个人...</h3>;

function CmtItem(props) {
    return <div>
        <h2>评论人： {props.user}</h2>
        <h3>评论内容： {props.content}</h3>
    </div>
}

class CmtList extends React.Component {
    constructor() {
        super();
        this.state = {
            CommentList: [
                {id: 1, user: '大王福坤', content: '哈哈，沙发'},
                {id: 2, user: '二王福坤', content: '哈哈，板凳'},
                {id: 3, user: '三王福坤', content: '哈哈，凉席'},
                {id: 4, user: '四王福坤', content: '哈哈，砖头'},
                {id: 5, user: '小王福坤', content: '哈哈，楼下山炮'}
            ]
        };
    }

    render() {
        return <div>
            <h1>这是评论列表组件</h1>
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}/>)}
        </div>
    }
}

// 调用render函数渲染虚拟DOM元素
ReactDom.render(<div>
    {myH3}
    <CmtList/>
</div>, document.getElementById('app'));