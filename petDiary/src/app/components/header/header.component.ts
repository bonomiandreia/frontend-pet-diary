import { Component, OnInit } from '@angular/core';
import { resetStores } from '@datorama/akita';
import { LoginService } from '../../state/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  logout(): void {
    resetStores(); 
  }

}
