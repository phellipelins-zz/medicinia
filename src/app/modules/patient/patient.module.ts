import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient/patient.service';
import { NoteService } from '../../services/note/note.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PatientService, NoteService]
})
export class PatientModule { }
