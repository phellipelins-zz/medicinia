import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientService } from '../../../services/patient/patient.service';
import { Patient } from '../../patient/patient';
import { Notification } from '../../notification/notification';

@Component({
  selector: 'notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnInit {
  @Input() notification: Notification;
  @Output() onPatientChange = new EventEmitter<any>();
  private patient: Patient = new Patient('...', new Date(Date.now()), 'female', '', {});
  typeTranslation: any = { 'consultation': 'Consulta',
                           'exam': 'Exame',
                           'surgery': 'Cirurgia' };

  constructor(protected patientService: PatientService) { }

  ngOnInit() {
    //TODO: make a 'populate' patient_id on parent component to stop request every init
    this.patientService.getById(this.notification.patient_id).subscribe(
      response => this.patient = response || this.patient,
      err => console.error(err)
    )
  }

  updatePatient(patient_id) {
    this.onPatientChange.emit(patient_id);
  }

}
