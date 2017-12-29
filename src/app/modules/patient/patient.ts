export class Patient {
  name: String;
  birthday: Date;
  gender: String;
  avatar_url: String;
  tags: Object;

  constructor(
    name: String,
    birthday: Date,
    gender: String,
    avatar_url: String,
    tags: Object
  ) {
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.avatar_url = avatar_url;
    this.tags = tags;
  }
}
