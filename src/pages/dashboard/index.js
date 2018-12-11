import React, { Component } from 'react';

import { Col, Row } from 'antd';

import CodeGenerator from './components/code-generator';
import CheckChai from './components/check-chai';

import './index.less';

export default class PageDashboard extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="page-dashboard text-content">
                <Row>
                    <Col span={12}>
                        <CodeGenerator/>
                    </Col>
                    <Col span={12}>
                        <CheckChai />
                    </Col>
                </Row>
            </div>
        );
    }
}
