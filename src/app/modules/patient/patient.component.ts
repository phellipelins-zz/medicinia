import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { PatientService } from '../../services/patient/patient.service';
import { Patient } from './patient';
import { Observable } from 'rxjs/Observable';
import { NoteService } from '../../services/note/note.service';

@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit, OnChanges {
  @Input() currentPatientId: any;
  @Input() examVisible: any;
  @Output() onShowExam = new EventEmitter<any>();
  patient: Patient;

  constructor(
    private patientService: PatientService,
    private noteService: NoteService
  ) {

  }

  ngOnInit() {
    
  }

  getPatient(patient_id) {
    this.patientService.getById(patient_id).subscribe(
      response => {  this.patient = response },
      err => console.error(err)
    );
  }

  extractTags(tagsObj) {
    if (typeof tagsObj === 'object')
      return Object.values(tagsObj);

    return [tagsObj]
  }

  showExam() {
    this.onShowExam.emit(true);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      typeof changes.currentPatientId !== 'undefined' &&
      typeof changes.currentPatientId.previousValue !== 'undefined'
    ) {
      this.getPatient(changes.currentPatientId.currentValue);
    }
  }

}
