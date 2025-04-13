export class User {
    private _email: string;
    private _password: string | null;
    private _firstName: string;
    private _lastName: string;

    constructor(email: string = '', password: string = '', firstName: string = '', lastName: string = '') {
        this._email = email;
        this._password = password;
        this._firstName = firstName;
        this._lastName = lastName;
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