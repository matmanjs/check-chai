import React from 'react';

import { Button, Col, message, Row } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './index.less';

export default function CodeDemoItem(props) {
    const { data, tryDemo } = props;

    return (
        <div className="code-demo-item">
            <Row>
                <Col span={18}>
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
                <Col span={6}>

                    <div className="action">
                        <Button onClick={tryDemo.bind(this, data)} type="primary" ghost>试一试</Button>
                        <CopyToClipboard text={data.code}
                                         onCopy={() => {
                                             message.success('拷贝成功！' + data.code);
                                         }}>
                            <Button>拷贝代码</Button>
                        </CopyToClipboard>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

