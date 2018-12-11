import React, { Component } from 'react';

import { Col, Row } from 'antd';
import UseTips from './use-tips';
import TryChaiExpect from './try-chai-expect';

import './index.less';

export default class CheckChai extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="check-chai">
                <Row>
                    <Col span={24}>
                        <TryChaiExpect />
                    </Col>
                    <Col span={24}>
                        <UseTips />
                    </Col>
                </Row>
            </div>
        );
    }
}
