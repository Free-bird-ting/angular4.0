import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StartComponent } from './start/start.component';

@NgModule({
  // 声明组件 管道 指令
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StartComponent
  ],
  imports: [
    // 浏览器
    BrowserModule,
    // 表单
    FormsModule,
    //
    HttpModule
  ],
  // 模块用的什么服务
  providers: [],
  // 模块的主组件
  bootstrap: [AppComponent]
})
export class AppModule { }
