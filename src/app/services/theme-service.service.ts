import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme: Theme = {
    primary: 'indigo',
    accent: 'pink',
    themeUrl: '/assets/themes/indigo-pink.css'
  };

  get theme(): Theme {
    return this._theme;
  }

  setTheme(theme: Theme) {
    this._theme = theme;
    this.setThemeUrl(theme.themeUrl);
  }

  private setThemeUrl(url: string) {
    const themeLink = document.getElementsByTagName('link')[0];
    themeLink.href = url;
  }
}
export interface Theme {
  primary: string;
  accent: string;
  themeUrl: string;
}