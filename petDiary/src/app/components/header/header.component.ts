import { Component, OnInit } from '@angular/core';
import { resetStores } from '@datorama/akita';
import { Router } from '@angular/router';
import { LoginQuery } from '../../state/login/login.query';
import { LayoutService } from '../../state/layout/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email: string;
  eventMode: boolean;

  constructor(private query: LoginQuery, private router: Router, private serviceLayout: LayoutService) { 
    this.eventMode = false;
    this.serviceLayout.initTheme();
  }

  ngOnInit(): void {
    this.email = this.query.getValue().auth.email;
  }

  changeTheme(): void {
    this.eventMode ? this.serviceLayout.updateTheme('dark-mode') : this.serviceLayout.updateTheme('light-mode');
  }

  logout(): void {
    resetStores(); 
    this.router.navigate(['/login']);
  }

}
