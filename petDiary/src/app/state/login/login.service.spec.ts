import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { LoginStore } from './login.store';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginService', () => {
    let loginService: LoginService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LoginService, LoginStore],
            imports: [HttpClientTestingModule, MatSnackBarModule, RouterModule, RouterTestingModule],
        });



        loginService = TestBed.inject(LoginService);
    });

    it('should be created', () => {
        expect(loginService).toBeDefined();
    });
});
