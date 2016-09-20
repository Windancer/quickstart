/**
 * angular2 系统配置例子
 */
(function (global) {
  System.config({
    paths: {
      // npm作为node_modules/的别名, 其实也就是简写， 使用方式如下， 看map
      'npm:': 'node_modules/'
    },
    // map 告诉system loader去监测那些文件
    map: {
      // 我们的应用会在app文件夹下
      app: 'app',
      // angular 全家桶
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js', //ng2的核心模块
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js', //ng2的常用工具
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',//ng2的编译器
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js', //待定
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',//待定
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',//ng2的http异步请求模块, ajax
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js', //ng2的路由模块
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',//ng2的表单模块

      // 其他包
      'rxjs':                       'npm:rxjs', //一个观察者模式的数据流管理工具, 很强大.
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api', //用于模拟api服务器, 数据交互测试模块
    },
    // packages 告诉system loader如何加载当找不到文件名或者找不到后缀
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
