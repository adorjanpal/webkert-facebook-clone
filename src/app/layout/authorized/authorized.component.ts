import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AuthComponent } from "../../pages/auth/auth.component";
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";
import { RightSidebarComponent } from "./right-sidebar/right-sidebar.component";
import { BottombarComponent } from "./bottombar/bottombar.component";
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-authorized',
  imports: [HeaderComponent, RouterModule, LeftSidebarComponent, RightSidebarComponent, BottombarComponent],
  templateUrl: './authorized.component.html',
  styleUrl: './authorized.component.scss'
})
export class AuthorizedComponent {
}
