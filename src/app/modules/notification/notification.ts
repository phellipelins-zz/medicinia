import { Patient } from "../patient/patient";

export class Notification {
  content: String;
  image_url: String;
  isArchived: Boolean;
  isFavorite: Boolean;
  patient_id: String;
  patient: Patient;
  scheduled_date: Date;
  type: String;
  _id: String;

  constructor (
    content: String,
    image_url: String,
    isArchived: Boolean,
    isFavorite: Boolean,
    scheduled_date: Date,
    type: String,
    patient_id: String,
    _id?: String,
    patient?: Patient,
  ) {
    this.content = content;
    this.image_url = image_url;
    this.isArchived = isArchived;
    this.isFavorite = isFavorite;
    this.patient_id = patient_id;
    this.scheduled_date = scheduled_date;
    this.type = type;
    this._id = _id;
    this.patient = patient;
  }
}
