import React from 'react';

import { Button, Col, Row } from 'antd';

import './index.less';

export default function CodeDemoItem(props) {
    const { data, tryDemo } = props;

    return (
        <div className="code-demo-item">
            <Row>
                <Col span={20}>
                    <div className="code">
                        <pre>
                            <p className="recommend">// {data.commend}</p>
                            <code>{data.code}</code>
                        </pre>
                    </div>

                    <div className="api">
                        {
                            data.assertionList.map((item, index) => {
                                return <Button type="primary" href={item.API} target="_blank"
                                               key={index}>{item.V}</Button>;
                            })
                        }
                    </div>
                </Col>
                <Col span={4}>

                    <div className="action">
                        <Button onClick={tryDemo.bind(this, data)}>试一试</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

