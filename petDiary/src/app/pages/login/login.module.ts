
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login.component';
import { LoginPageRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatGridListModule,
        ReactiveFormsModule,
        LoginPageRoutingModule,
    ],
    declarations: [
      LoginComponent,
    ],
    exports: [LoginComponent],
})
export class LoginAccountModule {}