import { Component, OnInit } from '@angular/core';
import { resetStores } from '@datorama/akita';
import { LoginService } from '../../state/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    resetStores(); 
    this.router.navigate(['/login']);
  }

}
