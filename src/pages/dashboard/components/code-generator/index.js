import React, { Component } from 'react';

import { Col, Input, Radio, Row } from 'antd';

import './index.less';

export default class CodeGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkValue: 'checkValue',
            actionType: 'equal',
            codeShow: ''
        };

    }

    componentDidMount() {
        this.generateCode();
    }

    onChangeCheckValue = (e) => {
        this.setState({ checkValue: e.target.value }, this.generateCode);
    };

    onChangeActionType = (e) => {
        this.setState({
            actionType: e.target.value
        }, this.generateCode);
    };

    generateCode() {
        const { checkValue, actionType } = this.state;
        this.setState({
            codeShow: `${checkValue}---${actionType}`
        });
    }

    render() {
        const { checkValue, codeShow } = this.state;

        return (
            <div className="code-generator">
                <Row>
                    <Col span={24}>
                        <div className="choices">
                            <Input size="large" value={checkValue} placeholder="请输入要验证的值"
                                   onChange={this.onChangeCheckValue} />

                            <Radio.Group defaultValue="equal" buttonStyle="solid" onChange={this.onChangeActionType}>
                                <Radio.Button value="equal">判断"原始值"相等 equal</Radio.Button>
                                <Radio.Button value="eql">判断"对象"相等 eql</Radio.Button>
                            </Radio.Group>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="code">
                            已输入值：{checkValue}
                            <textarea rows={30} value={codeShow} readOnly />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
