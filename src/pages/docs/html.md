# Mocha + Chai 在项目中的使用

## 1. 快速接入单元测试

第一步，需要在项目中引入 [mocha](https://www.npmjs.com/package/mocha) 和 [chai](https://www.npmjs.com/package/chai) 。

```bash
$ npm install mocha chai --save-dev
```

第二步，新建 `test`目录，并新增一个测试文件，例如 `xxx.test.js`，文件中增加测试代码：

```javascript
const expect = require('chai').expect;

describe('describe test suit', () => {
    it('4 + 5 should equal 9', () => {
        expect(4 + 5).to.equal(9);
    });
});
```

第三步，在 `package.json` 中增加 `scripts` 命令，例如：

```json
{
 "scripts": {
    "test": "node ./node_modules/mocha/bin/_mocha"
  }
}
```

最后，只需要执行测试命令即可

```bash
$ npm test
```

> 实际的项目中可能有更多的配置，请自行查询资料。

## 2. 参考资料

- chai API：http://www.chaijs.com/api/
- 中文 chai API：https://www.jianshu.com/p/f200a75a15d2