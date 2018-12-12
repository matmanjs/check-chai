// https://github.com/markedjs/marked
// npm install -g marked
// marked html.md -o xxx.html

module.exports = `
    <h1 id="mocha-chai-">Mocha + Chai 在项目中的使用</h1>
<h2 id="1-">1. 快速接入单元测试</h2>
<p>第一步，需要在项目中引入 <a href="https://www.npmjs.com/package/mocha">mocha</a> 和 <a href="https://www.npmjs.com/package/chai">chai</a>
    。</p>
<pre><code class="language-bash">$ npm install mocha chai --save-dev</code></pre>
<p>第二步，新建 <code>test</code>目录，并新增一个测试文件，例如 <code>xxx.test.js</code>，文件中增加测试代码：</p>
<pre><code class="language-javascript">const expect = require(&#39;chai&#39;).expect;

describe(&#39;describe test suit&#39;, () =&gt; {
    it(&#39;4 + 5 should equal 9&#39;, () =&gt; {
        expect(4 + 5).to.equal(9);
    });
});</code></pre>
<p>第三步，在 <code>package.json</code> 中增加 <code>scripts</code> 命令，例如：</p>
<pre><code class="language-json">{
 &quot;scripts&quot;: {
    &quot;test&quot;: &quot;node ./node_modules/mocha/bin/_mocha&quot;
  }
}</code></pre>
<p>最后，只需要执行测试命令即可</p>
<pre><code class="language-bash">$ npm test</code></pre>
<blockquote>
    <p>实际的项目中可能有更多的配置，请自行查询资料。</p>
</blockquote>
<h2 id="2-">2. 参考资料</h2>
<ul>
    <li>chai API：<a href="http://www.chaijs.com/api/">http://www.chaijs.com/api/</a></li>
    <li>中文 chai API：<a href="https://www.jianshu.com/p/f200a75a15d2">https://www.jianshu.com/p/f200a75a15d2</a></li>
</ul>

    
    `;