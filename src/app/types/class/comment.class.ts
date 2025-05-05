import {User} from './user.class';

export class Comment {
  private _author: User;
  private _text: string;
  private _likers: Array<User>;
  private _date: Date;

  constructor(author: User = new User(), text: string = '', likers: Array<User> = [], date: Date = new Date()) {
    this._author = author;
    this._text = text;
    this._likers = likers;
    this._date = date;
  }

  get author(): User {
    return this._author;
  }

  set author(value: User) {
    this._author = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get likers(): Array<User> {
    return this._likers;
  }

  set likers(value: Array<User>) {
    this._likers = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
