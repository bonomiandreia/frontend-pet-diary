import { Component, HostListener } from '@angular/core';
import { LayoutState } from './state/layout/layout.store';
import { LayoutService } from './state/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'petDiary';
  isMobile: boolean;

  constructor(private layout: LayoutService, private serviceLayout: LayoutService) { 
    this.serviceLayout.initTheme();
  }


  @HostListener('window:resize', ['$event'])

  onResize() {
    window.innerWidth < 768 ? this.isMobile = true : this.isMobile = false;
    this.layout.updateScreen(this.isMobile)
  }
}
