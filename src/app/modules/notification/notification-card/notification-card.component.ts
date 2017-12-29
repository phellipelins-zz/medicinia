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
  typeTranslation: any = { 'consultation': 'Consulta',
                           'exam': 'Exame',
                           'surgery': 'Cirurgia' };

  constructor(protected patientService: PatientService) { }

  ngOnInit() {

  }

  updatePatient(patient_id) {
    this.onPatientChange.emit(patient_id);
  }

}
