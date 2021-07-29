import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../state/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit(): void {
  }

  displayCssFor(field: string): string {
    return (this.form.get(field)?.invalid && (this.form.get(field)?.touched || this.form.get(field)?.dirty) ) ? 'border border-danger' : '';
  }

  createNewAccount(): void {
    this.router.navigate(['/create-account']);
  }

  login(): void {
    if (this.form.invalid) {
      return;
    }

    let body = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    }

    this.loginService.login(body);

    
  }

}
