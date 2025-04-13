import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-svg',
    imports: [],
    templateUrl: './svg.component.html',
    styleUrl: './svg.component.scss'
})
export class SvgComponent {
  @HostBinding('style.-webkit-mask-image')
  private _path!: string;

  @Input()
  public set path(filePath: string) {
    this._path = `url("assets/images/${filePath}")`;
  }
}
