import React from 'react';

import CmtItem from '@/components/CmtItem1'

export default class CmtList extends React.Component {
    constructor() {
        super();
        this.state = {
            CommentList: [
                { id: 1, user: '大王福坤', content: '哈哈，沙发' },
                { id: 2, user: '二王福坤', content: '哈哈，板凳' },
                { id: 3, user: '三王福坤', content: '哈哈，凉席' },
                { id: 4, user: '四王福坤', content: '哈哈，砖头' },
                { id: 5, user: '小王福坤', content: '哈哈，楼下山炮' }
            ]
        }
    }
    render() {
        return <div>
            <h1 style={{ color: '#F00', fontSize: '25px', textAlign: 'center' }}>这是评论列表组件</h1>
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}/>)}
        </div>
    }
}