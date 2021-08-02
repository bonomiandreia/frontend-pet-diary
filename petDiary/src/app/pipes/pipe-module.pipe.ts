import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer'
})
export class PipeModulePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer ) {}

  transform(obj: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(obj);
  }

}