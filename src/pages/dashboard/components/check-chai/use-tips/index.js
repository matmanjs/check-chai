import React from 'react';

import './index.less';

export default function CheckChaiUseTips() {
    return (
        <div className="check-chai-use-tips">
            <div className="docs">
                <h2 className="docs-title">文档</h2>
                <dl>
                    <dt>官网</dt>
                    <dd><a href="http://www.chaijs.com/">http://www.chaijs.com/</a></dd>
                </dl>
                <dl>
                    <dt>API</dt>
                    <dd><a href="http://www.chaijs.com/api/">http://www.chaijs.com/api/</a></dd>
                </dl>
                <dl>
                    <dt>中文API</dt>
                    <dd><a href="https://www.jianshu.com/p/f200a75a15d2">https://www.jianshu.com/p/f200a75a15d2</a></dd>
                </dl>
            </div>

            <div className="docs">
                <h2 className="docs-title">使用规范</h2>
                <p><code>chai.js</code> 是一套TDD(测试驱动开发)/BDD(行为驱动开发)的断言库。</p>
                <p><code>BDD</code>，行为驱动开发（注重测试逻辑），<code>TDD</code>是测试驱动开发（注重输出结果）。</p>

                <p>使用时需要先引入断言库：</p>
                <p><code>var expect = require('chai').expect;</code></p>
                <p><code>expect</code>断言的写法都是一样的。</p>
                <p>头部是<code>expect</code>方法，尾部是断言方法，比如<code>equal、a/an、ok、match</code>等。两者之间使用<code>to</code>或<code>to.be</code>连接
                </p>
                <p>例如：</p>
                <p><code>expect(4 + 5).to.equal(9);</code> // 4加5应该等于9</p>
            </div>
        </div>
    );
}
