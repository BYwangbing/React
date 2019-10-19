import React from 'react';
// 如果在引用某个包的时候，这个包被安装到了 node_modules 目录中，
// 则，可以省略 node_modules 这一层目录，直接以包名开始引入自己的 模块 或 样式表
// 自己规定： 第三方的 样式表，都是以 .css 结尾， 这样，我们不要为 普通的 .css 启用模块化
//          自己的样式表，都要以 .scss 或 .less 结尾， 只为 .scss 或 .less 文件启用模块化
import cssObj from '@/css/cmtList.scss'

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import CmtItem from '@/components/CmtItem'

export default class CmtList extends React.Component {
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
        }
    }

    render() {
        return <div>
            <button className="btn btn-info">（一般信息）Info </button>
            &emsp;
            <button className="btn btn-success">（(成功）Success </button>
            &emsp;
            <button className="btn btn-danger">（(危险）Danger </button>
            <h2 className={[cssObj.title, 'test'].join(' ')}>这是评论列表组件</h2>
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}/>)}
        </div>
    }
}