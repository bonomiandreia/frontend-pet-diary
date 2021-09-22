import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from '../../state/login/login.service';
import { LayoutStore } from '../../state/layout/layout.store';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterModule,
        RouterTestingModule,
        MatIconModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        LoginService,
        LayoutStore,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
