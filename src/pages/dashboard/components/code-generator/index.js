import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Radio, Row } from 'antd';

import { getCodeDemoList } from './data';
import { VAR_TYPE } from './model';

import CodeDemoList from './code-demo-list';
import { setCodeDemo } from '../../data/data-code-demo';

import './index.less';

class CodeGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            varType: VAR_TYPE.STRING
        };
    }

    onChangeVarType = (e) => {
        this.setState({ varType: e.target.value });
    };

    handleTryDemo = (data) => {
        if (process.env.NODE_ENV !== 'production') {
            console.log('handleTryDemo(data)', data);
        }

        this.props.setCodeDemo(data.getCodeDemo());
    };

    render() {
        const { varType } = this.state;

        const list = getCodeDemoList(varType);

        return (
            <div className="code-generator">
                <Row>
                    <Col span={24}>
                        <div className="choices">
                            <div className="check-value">
                                <Radio.Group defaultValue={varType} buttonStyle="solid" onChange={this.onChangeVarType}>
                                    <Radio.Button value={VAR_TYPE.STRING}>字符串："matman"</Radio.Button>
                                    <Radio.Button value={VAR_TYPE.NUMBER}>数字：10086</Radio.Button>
                                </Radio.Group>
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="code">
                            <CodeDemoList list={list} tryDemo={this.handleTryDemo} />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        setCodeDemo(code) {
            return dispatch(setCodeDemo(code));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeGenerator);