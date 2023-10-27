import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private readonly appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.stylesChanged$.subscribe((styles) => {
      console.log(styles)
      const page = document.querySelector('.page')
      if (page) {
        page.setAttribute('style', 'padding:' + styles.padding)
      }
    })
  }
}
