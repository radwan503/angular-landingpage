import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class IpThemeService {
  constructor() { }

  setTheme() {
    const themeLink = document.querySelector('#theme-link');
    if (themeLink) {
      themeLink.remove();
    }

    const linkElement = document.createElement('link');
    linkElement.id = 'theme-link';
    linkElement.rel = 'stylesheet';

    if (window.location.hostname === 'localhost') {
      console.log(window.location.hostname)
      linkElement.href = 'assets/light-theme.css'; // Set the theme for localhost
    } else {
      linkElement.href = 'assets/dark-theme.css'; // Set the theme for other IP addresses
    }

    document.head.appendChild(linkElement);
  }
}
