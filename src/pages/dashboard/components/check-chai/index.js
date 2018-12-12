import React, { Component } from 'react';

import { Col, Row } from 'antd';
import UseTips from './use-tips';
import TryChaiExpect from './try-chai-expect';

import './index.less';

export default class CheckChai extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="check-chai">
                <Row>
                    <Col span={24}>
                        <h2>2. 试一试</h2>
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
