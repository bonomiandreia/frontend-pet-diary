import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
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

  login(): void {
    //
  }

}
