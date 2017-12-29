export class Exam {
  title: String;
  content: String;
  date: Date;

  constructor (
    title?: String,
    content?: String,
    date?: Date
  ) {
    this.title = title;
    this.content = content;
    this.date = date;
  }
}
