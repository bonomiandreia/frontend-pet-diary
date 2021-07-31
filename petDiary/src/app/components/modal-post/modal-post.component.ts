import { Component, HostListener, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Editor, toDoc, toHTML  } from 'ngx-editor';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent implements OnInit {

  form: FormGroup;
  editor: Editor;
  isMobile: boolean;

  

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ModalPostComponent> ) {
    this.form = this.fb.group({
      editorNameForm: ['', Validators.compose([Validators.required])],
    });

    this.editor = new Editor();

  }

  @HostListener('window:resize', ['$event'])
  
  onResize(event) {
    event?.target?.innerWidth < 768 ? this.isMobile = true : this.isMobile = false
    if (this.isMobile) {
      this.form.controls.editorNameForm.setValue(null);
    }
  }


  savePost(): void {
    console.log(this.form.get("editorNameForm")?.value);
    this.dialogRef.close(this.form.get("editorNameForm")?.value);
  }

  ngOnInit(): void {}

}
