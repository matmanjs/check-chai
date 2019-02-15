# 单元测试代码生成工具

本项目是一个代码生成工具，使用 Mocha + Chai.js 来做单元测试。

> 后续会增加其他类型的单元测试代码生成。

## 如何使用

首先安装依赖：

```bash
npm install
```

然后执行启动项目命令：

```bash
npm start
```

启动完成之后打开： http://localhost:3000/dashboard 即可。

## 如何部署到 GitHub Pages 

我们将样例部署到了 [GitHub Pages](https://pages.github.com/) ，地址为： https://matmanjs.github.io/code-generator-for-unit-testing/ 。

需要先运行以下命令构建到 `docs` 文件夹下。

```bash
npm run deploy
```

构建完成之后，将构建结果提交到 git 仓库中，会自动完成部署。