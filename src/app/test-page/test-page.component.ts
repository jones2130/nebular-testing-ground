import { Component, OnInit } from '@angular/core';

import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  private theme: string;

  constructor(private themeService: NbThemeService) {}

  ngOnInit() {
    this.theme = 'default';
  }
  
  toggleTheme() {
    if(this.theme === 'default') {
      this.theme = 'dark';
    } else {
      this.theme = 'default';
    }
    this.themeService.changeTheme(this.theme);
  }

}
