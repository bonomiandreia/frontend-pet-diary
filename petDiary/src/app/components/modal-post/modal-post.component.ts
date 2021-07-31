import { Component, HostListener, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Editor, toDoc, toHTML  } from 'ngx-editor';
import { MatDialogRef } from '@angular/material/dialog';
import { LayoutQuery } from '../../state/layout/layout.query';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent implements OnInit {

  form: FormGroup;
  editor: Editor;
  isMobile: boolean;

  

  constructor(private query: LayoutQuery, private fb: FormBuilder, public dialogRef: MatDialogRef<ModalPostComponent> ) {
    this.form = this.fb.group({
      editorNameForm: ['', Validators.compose([Validators.required])],
    });

    this.editor = new Editor();
    this.isMobile = this.query.getValue().isMobile;

  }
  ngOnInit(): void {}


  savePost(): void {
    if (this.form.invalid) {
      return;
    }

    this.dialogRef.close(this.form.get("editorNameForm")?.value);
  }

  closeModal(): void {
    this.dialogRef.close();
  }


}
