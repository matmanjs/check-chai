import React, { Component } from 'react';

import { Col, Radio, Row } from 'antd';

import './index.less';

const ACTION_TYPE = {
    EQUAL: 'equal',
    EQL: 'eql'
};

export default class CodeGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkValue: 'hello,world',
            actionType: ACTION_TYPE.EQUAL,
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
        this.setState({ actionType: e.target.value }, this.generateCode);
    };

    generateCode() {
        const { checkValue, actionType } = this.state;

        let codeShow = `${checkValue}---${actionType}`;

        switch (actionType) {
            case ACTION_TYPE.EQUAL:
                codeShow = `expect(value).to.equal(${checkValue})`;
                break;
            case ACTION_TYPE.EQL:
                codeShow = `expect(value).to.eql(${checkValue})`;
                break;
        }

        this.setState({
            codeShow: codeShow
        });
    }

    render() {
        const { checkValue, codeShow } = this.state;

        return (
            <div className="code-generator">
                <Row>
                    <Col span={24}>
                        <div className="choices">
                            <div className="check-value">
                                <Radio.Group defaultValue="hello,world" buttonStyle="solid"
                                             onChange={this.onChangeCheckValue}>
                                    <Radio.Button value={'hello,world'}>字符串："hello,world"</Radio.Button>
                                    <Radio.Button value={10086}>数字：10086</Radio.Button>
                                    <Radio.Button value={'[object]'}>对象：{`{name:'matman'}`}</Radio.Button>
                                    <Radio.Button
                                        value={'[array]'}>数组：{`[{name:'matman'},{name:'ivweb'}]`}</Radio.Button>
                                </Radio.Group>
                            </div>


                            <div className="action-type">
                                <Radio.Group defaultValue="equal" buttonStyle="solid"
                                             onChange={this.onChangeActionType}>
                                    <Radio.Button value="equal">判断"原始值"相等 equal</Radio.Button>
                                    <Radio.Button value="eql">判断"对象"相等 eql</Radio.Button>
                                </Radio.Group>
                            </div>


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
