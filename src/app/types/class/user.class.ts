export class User {
    private _email: string;
    private _password: string | null;
    private _firstName: string;
    private _lastName: string;
    private _followers: Array<User>;
    private _following: Array<User>;

  constructor(email: string = '', password: string = '', firstName: string = '', lastName: string = '', following: Array<User> = [], followers: Array<User> = []) {
        this._email = email;
        this._password = password;
        this._firstName = firstName;
        this._lastName = lastName;
        this._followers = followers;
        this._following = following;
    }

   
    toJSON(): object {
      return {
          email: this._email,
          firstName: this._firstName,
          lastName: this._lastName,
          followers: this._followers.map(user => user.toJSON ? user.toJSON() : user),
          following: this._following.map(user => user.toJSON ? user.toJSON() : user)
      };
    }
    
      
    

    get followers(): Array<User> {
      return this._followers;
    }

    set followers(value: Array<User>) {
      this._followers = value;
    }

    get following(): Array<User> {
      return this._following;
    }

    set following(value: Array<User>) {
      this._following = value;
    }

    get email() {
        return this._email;
    }

    set email(val: string) {
        this._email = val;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(val: string) {
        this._firstName = val;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(val: string) {
        this._lastName = val;
    }
}
