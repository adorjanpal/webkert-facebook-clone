import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _currentHeader = signal('');

  constructor() { }

  get currentHeader() {
    return this._currentHeader();
  }

  set currentHeader(value: string) {
    this._currentHeader.set(value);
  }
}
