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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth-components/login/login.component'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { OrdersComponent } from './pos-components/container/main-page/sidebar/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AuthInterceptorService } from './services/auth-interceptor.service';

import {MatDialogModule} from '@angular/material/dialog';
import {NgConfirmModule} from 'ng-confirm-box';
import { SubCategoriesComponent } from './pos-components/container/main-page/content-container/sub-categories/sub-categories.component';
import { MainMenuComponent } from './pos-components/container/main-page/content-container/main-menu/main-menu.component'; 


@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    MainPageComponent,
    SidebarComponent,
    ContentContainerComponent,
    CategoriesComponent,
  
    LoginComponent,
    ContainerComponent,
   
    OrdersComponent,
   
    SubCategoriesComponent,
    MainMenuComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    CarouselModule,
    NgConfirmModule
   
  ],
  providers: [
    
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
