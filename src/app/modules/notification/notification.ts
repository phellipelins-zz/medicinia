export class Notification {
  content: String;
  image_url: String;
  isArchived: Boolean;
  isFavorite: Boolean;
  patient_id: String;
  scheduled_date: Date;
  type: String;
  _id: String;

  constructor (
    content: String,
    image_url: String,
    isArchived: Boolean,
    isFavorite: Boolean,
    patient_id: String,
    scheduled_date: Date,
    type: String,
    _id?: String,
  ) {
    this.content = content;
    this.image_url = image_url;
    this.isArchived = isArchived;
    this.isFavorite = isFavorite;
    this.patient_id = patient_id;
    this.scheduled_date = scheduled_date;
    this.type = type;
    this._id = _id;
  }
}
