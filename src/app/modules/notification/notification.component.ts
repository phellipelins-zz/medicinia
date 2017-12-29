import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { PatientService } from '../../services/patient/patient.service';
import { Notification } from './notification';
import { Patient } from '../patient/patient';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Output() onPatientChange = new EventEmitter<any>();
  protected notifications: Array<Notification>;
  private patients: Array<Patient>;
  public filterType: String = '';
  public filterArchived: Boolean = false;
  public filterFavorite: Boolean = false;

  constructor(
    private notificationService: NotificationService,
    private patientService: PatientService
  ) {
  }

  ngOnInit() {
    this.notificationService.getAll().subscribe(
      response => { 
        this.notifications = <Notification[]>response;

        // populate patient_id with each name
        this.patientService.getAll().subscribe(
          response => {
            this.notifications = <Notification[]>this.notifications.map((notification) => {
              notification.patient = response.filter((patient) => {
                return patient._id === notification.patient_id;
              })[0]
              return notification;
            })
          },
          err => console.error(err)
        );
        
      },
      err => console.error(err)
    );
  }

  updatePatient(patient_id) {
    this.onPatientChange.emit(patient_id);
  }
}
