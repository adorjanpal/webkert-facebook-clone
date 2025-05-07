import { Component, inject } from '@angular/core';
import { HeaderService } from '../../../services/header/header.service';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { SearchModalComponent } from '../../../shared/search-modal/search-modal.component';


@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected headerService = inject(HeaderService);

  private modal = inject(MatDialog);

  openSearch() {
    const modalRef = this.modal.open(SearchModalComponent, {
          width: '400px',
          data: {},
        });
    
        modalRef.afterClosed().subscribe((result: any) => {
            console.log(result);
            
        })
  }
}
