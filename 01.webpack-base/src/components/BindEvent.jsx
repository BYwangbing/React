import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export default class BindEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: '你看，城南的花都开了，该你熬的也都熬过来了，所也别不高兴了'
        }
    }

    render() {
        return <div>
            <button className="btn btn-info" onClick={
                () => this.show('王福坤')
            }>按钮
            </button>
            <h3>{this.state.msg}</h3>
            <input className="form-control" type="text" value={this.state.msg} readOnly/>
            <h3>获取input框中的值</h3>
            <br/>
            <h4>方案1： 通过 事件参数 e 来获取</h4>
            <input className="form-control" type="text" value={this.state.msg} onChange={
                (e) => this.txtChanged(e)
            }/>
            <h4>方案2： 通过 ref 来获取</h4>
            <input className="form-control" type="text" value={this.state.msg} ref="txt" onChange={
                () => this._txtChanged()
            }/>
        </div>
    }

    txtChanged = (e) => {
        const newVal = e.target.value;
        this.setState({
            msg: newVal
        })
    };

    _txtChanged = () => {
        const newVal = this.refs.txt.value;
        this.setState({
            msg: newVal
        })
    };

    show = (arg) => {
        console.log('「今夜は月が绮丽ですね」,' + ' ' + arg);
        // 在 React 中，推荐使用 this.setState({ }) 修改 状态值
        this.setState({
            // 在 setState ，只会把 对应的 state 状态更新，而不会 覆盖其它的 state 状态
            msg: '寒来暑往 秋收冬藏 希望我们来日方长'
        }, function () {  // 回调
            console.log(this.state.msg);
        })
    }
    // 注意： this.setState 方法的执行，是异步的；
    // 如果调用完 this.setState 之后，又想立即拿到 最新的 state 值，需要使用 this.setState({}, callback)
}

//#region

//#endregion