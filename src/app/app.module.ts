import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { HomeComponent } from './pages/home/home.component';
import { AdvantageComponent } from './shared/components/advantage/advantage.component';
import { AdvantageListComponent } from './shared/components/advantage-list/advantage-list.component';
import { PackagesComponent } from './shared/components/packages/packages.component';
import { PackageComponent } from './shared/components/package/package.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdvantageComponent,
    AdvantageListComponent,
    PackagesComponent,
    PackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    MessageModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
