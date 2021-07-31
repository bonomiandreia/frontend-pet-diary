import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'petDiary';
  isMobile: boolean;

  @HostListener('window:resize', ['$event'])

  onResize(event) {
    event?.target?.innerWidth < 768 ? this.isMobile = true : this.isMobile = false;
    console.log(this.isMobile)
  }
}
