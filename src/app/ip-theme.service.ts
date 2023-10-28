import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class IpThemeService {
  private darkModeEnabled = false;
  constructor() { }

  setTheme() {
    const themeLink = document.querySelector('#theme-link');
    const toggleBtn = document.querySelector("#toggle-btn");

    console.log(toggleBtn?.textContent)
    if (themeLink) {
      themeLink.remove();
    }

    const linkElement = document.createElement('link');
    linkElement.id = 'theme-link';
    linkElement.rel = 'stylesheet';

    if (window.location.hostname === 'localhost') {
      console.log("1")
      if (this.darkModeEnabled) {
        console.log("2")
        linkElement.href = 'assets/dark-theme.css';

      } else {
        console.log("3")
        linkElement.href = 'assets/light-theme.css';
      }

    } else {
      if (window.location.hostname === "radwan503.github.io") {
        linkElement.href = 'assets/dark-theme.css';
      } else {
        if (this.darkModeEnabled) {
          console.log("5")
          linkElement.href = 'assets/dark-theme.css';
        } else {
          console.log("6")
          linkElement.href = 'assets/light-theme.css';
        }
      }

    }

    document.head.appendChild(linkElement);
  }
  toggleTheme() {
    this.darkModeEnabled = !this.darkModeEnabled;
    this.setTheme();
  }
  isDarkModeEnabled(): boolean {
    return this.darkModeEnabled;
  }
}
