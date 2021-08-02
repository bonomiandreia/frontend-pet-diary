import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../state/login/login.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  formCreate: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {

    this.formCreate = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit(): void {}


  backLogin(): void {
    this.router.navigate(['/login']);
  }

  displayCssFor(field: string): string {
    return (this.formCreate.get(field)?.invalid && (this.formCreate.get(field)?.touched || this.formCreate.get(field)?.dirty) ) ? 'border border-danger' : '';
  }

  create(): void {
    if (this.formCreate.invalid) {
      return;
    }

    let body = {
      email: this.formCreate.get('email')?.value,
      password: this.formCreate.get('password')?.value,
    }
    this.loginService.create(body);
  }

}
