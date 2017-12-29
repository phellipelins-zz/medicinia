import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NotificationModule } from './modules/notification/notification.module';
import { PatientModule } from './modules/patient/patient.module';

import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { NotificationComponent } from './modules/notification/notification.component';
import { PatientComponent } from './modules/patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NotificationComponent,
    PatientComponent,
  ],
  imports: [
    BrowserModule,
    NotificationModule,
    PatientModule,
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
