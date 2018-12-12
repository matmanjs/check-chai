import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Alert, Button } from 'antd';

import { executeCode, setCodeDemo } from '../../../data/data-code-demo';

import './index.less';

class TryChaiExpect extends Component {
    handleChange = (event) => {
        this.props.setCodeDemo(event.target.value);
    };

    handleSubmit = () => {
        this.props.executeCode(this.props.code);
    };

    render() {
        const { code, isSuccess, resultMsg } = this.props;

        return (
            <div className="try-chai-expect">
                <h2>使用 chai 的 expect 断言语法测试</h2>

                <textarea rows={10} value={code} onChange={this.handleChange} />
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

function mapStateToProps(state) {
    const { codeDemoInfo } = state;

    return {
        code: codeDemoInfo.code,
        isSuccess: codeDemoInfo.isSuccess,
        resultMsg: codeDemoInfo.resultMsg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setCodeDemo(code) {
            return dispatch(setCodeDemo(code));
        },

        executeCode(code) {
            return dispatch(executeCode(code));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TryChaiExpect);
