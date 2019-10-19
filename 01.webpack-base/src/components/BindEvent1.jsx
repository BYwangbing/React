import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export default class BindEvent extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return <div>
            {/*事件的名称都是React的提供的，因此名称的首字母必须大写onClick、onMouseOver, 小骆驼峰命名*/}
            <button className="btn btn-success" onClick={
                function () {
                    console.log('斯人若彩虹，遇上方知有');
                }
            }>成功
            </button>
            &emsp;
            <button className="btn btn-info" onClick={this.myClickHandle}>点击</button>
            &emsp;
            <button className="btn btn-danger" onClick={
                () => this.myClickHandle()
            }>点击
            </button>
        </div>
    }

    myClickHandle = () => console.log('「今夜は月が绮丽ですね」');
}