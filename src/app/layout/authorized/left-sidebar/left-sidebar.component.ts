import { Component } from '@angular/core';
import { SvgComponent } from "../../../shared/svg/svg.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {

}
