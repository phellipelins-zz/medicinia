import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification/notification.service';
import { NotificationFilterPipe } from './notification-filter/notification-filter.pipe';
import { NotificationCardComponent } from './notification-card/notification-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NotificationCardComponent,
    NotificationFilterPipe
  ],
  declarations: [NotificationCardComponent, NotificationFilterPipe],
  providers: [NotificationService]
})
export class NotificationModule { }
