import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './pos-components/container/container.component';
import { HeaderComponent } from './pos-components/container/header/header.component';
import { MainPageComponent } from './pos-components/container/main-page/main-page.component';
import { SidebarComponent } from './pos-components/container/main-page/sidebar/sidebar.component';
import { ContentContainerComponent } from './pos-components/container/main-page/content-container/content-container.component';
import { CategoriesComponent } from './pos-components/container/main-page/content-container/categories/categories.component';
import { CategoriesListsComponent } from './pos-components/container/main-page/content-container/categories/categories-lists/categories-lists.component';
import { SubCategoryComponent } from './pos-components/container/main-page/content-container/sub-category/sub-category.component';
import { SubCategoryListsComponent } from './pos-components/container/main-page/content-container/sub-category/sub-category-lists/sub-category-lists.component';
import { ProductComponent } from './pos-components/container/main-page/content-container/product/product.component';
import { ProductListsComponent } from './pos-components/container/main-page/content-container/product/product-lists/product-lists.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth-components/login/login.component'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';
import { SectionNameComponent } from './pos-components/section-name/section-name.component';
import { OrdersComponent } from './pos-components/container/main-page/sidebar/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { PromptComponent } from './utilities/prompt/prompt.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    MainPageComponent,
    SidebarComponent,
    ContentContainerComponent,
    CategoriesComponent,
    CategoriesListsComponent,
    SubCategoryComponent,
    SubCategoryListsComponent,
    ProductComponent,
    ProductListsComponent,
    LoginComponent,
    NextDirective,
    PrevDirective,
    SectionNameComponent,
    OrdersComponent,
    PromptComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    CarouselModule
   
  ],
  providers: [
    
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
