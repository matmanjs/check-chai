import React, { Component } from 'react';

import { Alert, Button } from 'antd';

import chai from 'chai';

import './index.less';

// 将其挂载在全局
window.chai = chai;
window.expect = chai.expect;

export default class TryChaiExpect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkCode: 'expect(4 + 5).to.be.equal(9)',
            isSuccess: false,
            resultMsg: ''
        };
    }

    handleChange = (event) => {
        this.setState({ checkCode: event.target.value });
    };

    handleSubmit = () => {
        const { checkCode } = this.state;
        try {
            // eval('var expect = require("chai").expect; (' + checkCode + ')');
            eval('(' + checkCode + ')');

            this.setState({
                isSuccess: true,
                resultMsg: '校验通过！'
            });
        } catch (e) {
            console.log(e);

            let resultMsg = e.toString();

            if (resultMsg.match('AssertionError')) {
                resultMsg = `校验不通过：${e.message}`;
            } else if (resultMsg.match('TypeError')) {
                resultMsg = resultMsg.replace('TypeError:', '').replace('is not a function', '语法错误');
            } else if (resultMsg.match('Error: Invalid Chai property')) {
                resultMsg = resultMsg.replace('Error: Invalid Chai property:', '').replace('Did you mean', '不是Chai的API，你需要的是');
            }

            this.setState({
                isSuccess: false,
                resultMsg: resultMsg
            });
        }

    };

    render() {
        const { checkCode, isSuccess, resultMsg } = this.state;

        return (
            <div className="try-chai-expect">
                <h2>使用 chai 的 expect 断言语法测试</h2>

                <textarea rows={10} value={checkCode} onChange={this.handleChange} />
                <Button type="primary" onClick={this.handleSubmit}>开始测试</Button>

                {
                    isSuccess && resultMsg ? <Alert message={resultMsg} type="success" /> : null
                }

                {
                    !isSuccess && resultMsg ?
                        <Alert message={resultMsg + ' 【更多错误信息请打开 Console】'} type="error" /> : null
                }
            </div>
        );
    }
}
