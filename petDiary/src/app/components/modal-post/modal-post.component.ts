import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Editor, toDoc, toHTML  } from 'ngx-editor';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent implements OnInit {

  form: FormGroup;
  editor: Editor;
  test: string;

  constructor(private fb: FormBuilder ) {
    this.form = this.fb.group({
      editorNameForm: ['', Validators.compose([Validators.required])],
    });

    this.editor = new Editor();

   }

    savePost(): void {
      console.log(this.form.get("editor")?.value);
    }

  ngOnInit(): void {}

}
