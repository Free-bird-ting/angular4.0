// 使用什么模块来启动服务
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 关闭开发者模式
import { enableProdMode } from '@angular/core';
// 环境配置
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
