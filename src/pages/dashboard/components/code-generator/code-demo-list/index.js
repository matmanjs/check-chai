import React from 'react';

import CodeDemoItem from './code-demo-item';

import './index.less';

export default function CodeDemoList(props) {
    const { list, tryDemo } = props;

    return (
        <div className="code-demo-list">
            {
                list.map((item, index) => {
                    return <CodeDemoItem data={item} key={index} tryDemo={tryDemo} />;
                })
            }
        </div>
    );
}

