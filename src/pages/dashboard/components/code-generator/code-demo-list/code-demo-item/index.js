import React from 'react';

import { Button } from 'antd';

import './index.less';

export default function CodeDemoItem(props) {
    const { data } = props;

    return (
        <div className="code-demo-item">
            <p className="recommend">// {data.commend}</p>
            <div className="code">
                <pre><code>{data.code}</code></pre>
            </div>
            <div className="api">
                参考 API: <Button type="primary" href={data.assertion.API} target="_blank">{data.assertion.V}</Button></div>
        </div>
    );
}

