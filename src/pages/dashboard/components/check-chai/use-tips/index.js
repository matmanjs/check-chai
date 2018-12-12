import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.less';

export default function CheckChaiUseTips() {
    return (
        <div className="check-chai-use-tips">
            <div className="docs">
                <h2 className="docs-title">使用说明</h2>
                <ul>
                    <li>根据要测试的值的类型进行选择，会出现常见的用法代码示例；</li>
                    <li>选择代码示例中的"试一试"按钮，可将代码样例复制到体验区；</li>
                    <li>点击体验区中的"开始测试"，则会对样例代码进行校验，并输出结果；</li>
                </ul>

                <h2 className="docs-title">相关链接</h2>
                <ul>
                    <li>chai API： <a href="http://www.chaijs.com/api/">http://www.chaijs.com/api/</a></li>
                    <li><NavLink to={`/docs`}> 更多文档说明 </NavLink></li>
                </ul>
            </div>
        </div>
    );
}
