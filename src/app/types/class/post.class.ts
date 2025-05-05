import { User } from "./user.class";

export class Post {
    private _author: User;
    private _text: string;
    private _image: string;
    private _likers: Array<User>;
    private _comments: Array<Comment>;
    private _date: Date;

  constructor(author: User = new User(), text: string = '', image: string = '', likers: Array<User> = [], comments: Array<Comment> = [], date: Date = new Date()) {
    this._author = author;
    this._text = text;
    this._image = image;
    this._likers = likers;
    this._comments = comments;
    this._date = date;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
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

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get likers(): Array<User> {
    return this._likers;
  }

  set likers(value: Array<User>) {
    this._likers = value;
  }

  get comments(): Array<Comment> {
    return this._comments;
  }

  set comments(value: Array<Comment>) {
    this._comments = value;
  }
}

