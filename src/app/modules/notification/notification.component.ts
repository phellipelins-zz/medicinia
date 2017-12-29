import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { Notification } from './notification';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Output() onPatientChange = new EventEmitter<any>();
  protected notifications: Array<Notification>;
  public filterType: String = '';
  public filterArchived: Boolean = false;
  public filterFavorite: Boolean = false;

  constructor(
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.notificationService.getAll().subscribe(
      response => { this.notifications = response },
      err => console.error(err)
    );
  }

  updatePatient(patient_id) {
    this.onPatientChange.emit(patient_id);
  }
}
