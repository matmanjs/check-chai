import React, { Component } from 'react';

import { Button } from 'antd';

import './index.less';

export default class TryChaiExpect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkCode: 'expect(4 + 5).to.be.equal(9)'
        };
    }

    handleChange = (event) => {
        this.setState({ checkCode: event.target.value });
    };

    handleSubmit = () => {
        console.log(this.state.checkCode)
    };

    render() {
        const { checkCode } = this.state;

        return (
            <div className="try-chai-expect">
                <h2>使用 chai 的 expect 断言语法测试</h2>

                <textarea rows={10} value={checkCode} onChange={this.handleChange} />
                <Button type="primary" onClick={this.handleSubmit}>开始测试</Button>
            </div>
        );
    }
}
