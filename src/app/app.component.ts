import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPatientId: any = false;
  examVisible: any = false;

  updatePatient(patient_id) {
    this.currentPatientId = patient_id;
  }

  showExam(data) {
    this.examVisible = data;
  }
}
