import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { PipeModulePipe } from './pipe-module.pipe';
import { TestBed } from '@angular/core/testing';

describe('Pipe: SafeResourceUrl', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserModule],
    })
});

  it('should create an instance', () => {
    const domSanitizer = TestBed.get(DomSanitizer);
    
    const pipe = new PipeModulePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});