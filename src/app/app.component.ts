import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { IpThemeService } from './ip-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  themeButtonText!: string;
  constructor(private ipThemeService: IpThemeService) { }
  title = 'ecommerce';
  faCartShopping = faCartShopping;

  ngOnInit() {
    this.ipThemeService.setTheme();
    this.setThemeButtonText();
  }
  toggleTheme() {
    this.ipThemeService.toggleTheme();
    this.setThemeButtonText();
  }
  private setThemeButtonText() {
    // Set the button text based on the current theme
    this.themeButtonText = this.ipThemeService.isDarkModeEnabled() ? 'Light Theme' : 'Dark Theme';
  }
}
