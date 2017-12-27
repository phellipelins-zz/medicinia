import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { NotificationModule } from './modules/notification/notification.module';
import { NotificationComponent } from './modules/notification/notification.component';
import { NotificationCardComponent } from './modules/notification/notification-card/notification-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NotificationComponent,
    NotificationCardComponent
  ],
  imports: [
    BrowserModule,
    NotificationModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
