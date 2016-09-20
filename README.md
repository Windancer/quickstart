# Angular 2 快速撸起
[![Build Status][travis-badge]][travis-badge-url]

这个库是来源于 [quickstart](https://github.com/angular/quickstart). 

中秋angular2正式上线, 由于群友需求, 自己也想简单上个手, 所以重新fork了一下，响应群友的需求.

后期有时间会继续学习一下angular2, 希望也会给我新的想法和设计思路, 我也会提供更多实用例子, 所有例子会提供详细中文翻译, 方便更多人上手.

这个库基于[angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html)的Typescript展示最基本的Angular2文案案例, 这会是一个非常好的上手应用.

同时该库支持单元测试, 这使得你可以快速写一些单元测试.

**这并不是一个最完美的脚手架, 也并不是为了使用它来做产品. 这主要是提供一个让你能快速上手学习Angular2**

## 准备工作

Node.js 和 npm 是必备的.
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Node安装地址</a>
 
**请确保你的Node版本是`v4.x.x`, NPM版本是`3.x.x`**
可以在命令行使用`node -v`和`npm -v`, 注意低版本会导致错误. 推荐使用[nvm](https://github.com/creationix/nvm)去管理多个Node版本和NPM版本

## 快速开始

```bash
git clone  https://github.com/angular/quickstart  my-proj
cd my-proj
```

如果有个人开发需求, 删除拉取后的.git文件夹,
```bash
rm -rf .git  # 非window版本命令
rd .git /S/Q # window版本命令
```

## 安装NPM包

确定你处在my-proj的文件目录下, 执行以下命令:

**注意要在管理员模式下运行**.

```bash
npm install
npm start
```

> 如果此刻项目没有找到`typings`文件夹执行下面命令手动安装:

> `npm run typings -- install`

`npm start` 命令会编译(准确来说是Transpile, 后续所有的编译不是指真正的编译, 理解成转换更为准确) 应用, 然后同时会启动一个`lite-server` (轻量级服务器), 所有的文件变动会被该服务器监听并实时更新.

如果需要停止运行, 在命令行执行Ctrl+C即可.

### npm scripts

大部分使用的命令都已经以自定义脚本的形式定义在`package.json`中:

* `npm start` - 执行编译工作同时启动服务器, 两者都将处在 "监听模式".
* `npm run tsc` - 运行单次Typescript编译.
* `npm run tsc:w` - 运行Typescript编译器并让编译器处于监听模式; 若任何ts文件被修改, 编译器会触发并重新编译.
* `npm run lite` - 启动一个服务器 [lite-server](https://www.npmjs.com/package/lite-server), 一个轻量级轻量级静态资源服务器. 该服务器也服务于Angular的路由.
* `npm run typings` - 执行Typings, Typescript的接口定义文件的包管理工具.
* `npm run postinstall` - 执行于install之后. 这个脚本会安装Typescript接口定义文件
以下是单元测试脚本:
* `npm test` - 编译, 运行且监听 karma 单元测试
* `npm run e2e` - 执行 protractor e2e 测试

### 单元测试
Typesript单元测试通常在`app`文件夹下. 他们会有`.spec`作为文件标识.

例如: `app/app.component.spec.ts`.

你可以根据自己需求新增单元测试文件, 但是请以`.spec.ts`结尾吗, 我们已经根据这个标识配置了karma.

执行 `npm test` 能够测试你新增的单元测试文件

单元测试的Runner会把输出结果输出在控制台.
我们可以实时去编写我们的单元测试, Karma会试试监听修改并自动重新执行.

一份`HTML-Reporter`单元测试报告会被生成: `~_test-output/tests.html`;

### e2e(端对端)测试

E2E的测试文件在`e2e`文件夹中, 他们必须以`.e2e-spec.ts`命名结束.

更多请参考例子`e2e/app.e2e-spec.ts`.

同样的你可以在该文件夹目录下添加更多的E2E测试文件, 我们的protractor会监听他们.

添加后执行`npm run e2e`.

执行后默认会在`localhost:8080`并执行protractor.

测试结果会出现在控制台下. 一份测试报告(看配置文件 `protractor.config.js`)会生成`./_test-output/protractor-results.txt`

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart
