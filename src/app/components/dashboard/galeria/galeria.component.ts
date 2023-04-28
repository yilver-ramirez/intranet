import { Component } from '@angular/core';

import { Theme,ThemeService } from '../../../services/theme-service.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  selectedTheme: Theme;

  themes: Theme[] = [
    { primary: 'indigo', accent: 'pink', themeUrl: '/assets/themes/indigo-pink.css' },
    { primary: 'deeppurple', accent: 'amber', themeUrl: '/assets/themes/deeppurple-amber.css' },
    { primary: 'pink', accent: 'blue', themeUrl: '/assets/themes/pink-bluegrey.css' },
    { primary: 'purple', accent: 'green', themeUrl: '/assets/themes/purple-green.css' }
  ];

  constructor(private themeService: ThemeService) {
    this.selectedTheme = this.themes[0];
  }

  onThemeChange(event: any) {
    this.selectedTheme = event.value;
    this.themeService.setTheme(this.selectedTheme);
  }
}
