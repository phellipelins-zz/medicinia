import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { NotificationModule } from './notification/notification.module';
import { NotificationComponent } from './notification/notification.component';
import { NotificationCardComponent } from './notification/notification-card/notification-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NotificationComponent,
    NotificationCardComponent
  ],
  imports: [
    BrowserModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
