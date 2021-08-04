import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPostComponent } from './modal-post.component';
import { LayoutStore } from '../../state/layout/layout.store';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MockModule } from 'ng-mocks';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxEditorModule } from 'ngx-editor';

describe('ModalPostComponent', () => {
  let component: ModalPostComponent;
  let fixture: ComponentFixture<ModalPostComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule,
        FormsModule,
        MockModule(MatDialogModule),
        MockModule(NgxEditorModule),
      ],
      declarations: [ ModalPostComponent ],
      providers: [
        LayoutStore,
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPostComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
