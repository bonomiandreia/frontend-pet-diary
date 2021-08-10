import { Component, OnInit } from '@angular/core';
import { resetStores } from '@datorama/akita';
import { Router } from '@angular/router';
import { LoginQuery } from '../../state/login/login.query';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email: string;
  eventMode: boolean;

  constructor(private query: LoginQuery, private router: Router) { }

  ngOnInit(): void {
    this.email = this.query.getValue().auth.email;
  }

  changeTheme(): void {
    console.log(this.eventMode)
  }

  logout(): void {
    resetStores(); 
    this.router.navigate(['/login']);
  }

}
