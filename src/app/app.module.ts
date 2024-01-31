import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient ,HttpHandler, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HcomponentComponent } from './hcomponent/hcomponent.component';
import { ConnectIconComponent } from './connect-icon/connect-icon.component';
import { LoginServiceService } from './login/login.service.service';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HcomponentComponent,
    ConnectIconComponent,
    ProductComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [LoginServiceService,HttpClientModule, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
