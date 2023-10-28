import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { IpThemeService } from './ip-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ipThemeService: IpThemeService) { }
  title = 'ecommerce';
  faCartShopping = faCartShopping;

  ngOnInit() {
    this.ipThemeService.setTheme();
  }
}
