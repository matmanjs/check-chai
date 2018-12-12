import React, { Component } from 'react';

import './index.less';

export default class PageDocs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-docs text-content">
                <h1>Mocha + Chai 在项目中的使用</h1>

                <section>
                    <h2 className="docs-title">1. 快速接入单元测试</h2>

                    <p>第一步，需要在项目中引入 mocha 和 chai</p>
                    <pre><code>
                        $ npm install mocha chai --save-dev
                    </code></pre>

                    <p>第二步，新建 <code>test</code> 目录，并新增一个测试文件，例如 <code>xxx.test.js</code> ，文件中增加测试代码：</p>
                    <pre><code>
                        const expect = require('chai').expect;


                        {/*describe('use expect: src/add.js', () => {*/}
                            {/*it('add(1,2) === 3', () => {*/}
                                {/*expect(4 + 5).to.equal(9);*/}
                            {/*});*/}
                        {/*});*/}
                    </code></pre>

                    <p>最后一步，在 <code>package.json</code> 增加 <code>scripts</code></p>
                </section>

                <section>
                    <h2 className="docs-title">2. 参考资料</h2>
                    <ul>
                        <li>chai API： <a href="http://www.chaijs.com/api/">http://www.chaijs.com/api/</a></li>
                        <li>中文 chai API: <a
                            href="https://www.jianshu.com/p/f200a75a15d2">https://www.jianshu.com/p/f200a75a15d2</a>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}
