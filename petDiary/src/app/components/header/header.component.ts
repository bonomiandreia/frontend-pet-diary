import { Component, OnInit } from '@angular/core';
import { resetStores } from '@datorama/akita';
import { LoginService } from '../../state/login/login.service';
import { Router } from '@angular/router';
import { LoginQuery } from '../../state/login/login.query';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email: string

  constructor(private query: LoginQuery, private router: Router) { }

  ngOnInit(): void {
    this.email = this.query.getValue().auth.email;
  }

  logout(): void {
    resetStores(); 
    this.router.navigate(['/login']);
  }

}
