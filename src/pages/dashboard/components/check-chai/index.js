import React, { Component } from 'react';

import { Col, Row } from 'antd';
import UseTips from './use-tips';

import './index.less';

export default class CheckChai extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="check-chai">
                <Row>
                    <Col span={24}>col-12</Col>
                    <Col span={24}>
                        <UseTips />
                    </Col>
                </Row>
            </div>
        );
    }
}
