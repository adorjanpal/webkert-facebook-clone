import { Component, inject, Input } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { SvgComponent } from "../svg/svg.component";

@Component({
  selector: 'app-snack-bar',
  imports: [MatSnackBarModule, SvgComponent],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss'
})
export class SnackBarComponent {
  message = inject(MAT_SNACK_BAR_DATA);
  snackBarRef = inject(MatSnackBarRef);
}
