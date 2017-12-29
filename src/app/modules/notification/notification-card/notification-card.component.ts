import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  updatePatient(patient_id) {
    this.onPatientChange.emit(patient_id);
  }

}
