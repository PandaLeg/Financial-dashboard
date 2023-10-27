import {Component} from '@angular/core';
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../../../assets/scss/icons.scss']
})
export class NavbarComponent {
  isOpen: boolean

  constructor(private readonly appService: AppService) {
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen
    const padding = this.isOpen ? '0 0 0 88px' : '0 0 0 250px'
    this.appService.broadcastStylesChanged({padding})
  }
}
