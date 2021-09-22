import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MockModule } from 'ng-mocks';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutStore } from '../../state/layout/layout.store';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ PostsComponent, HeaderComponent],
        imports: [  FormsModule,
          ReactiveFormsModule,MatSlideToggleModule, RouterTestingModule, MockModule(MatCardModule), MockModule(MatIconModule), MockModule(MatSnackBarModule), HttpClientModule],
      providers: [
        HttpClientTestingModule, 
        MatSnackBar, 
        LayoutStore,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
