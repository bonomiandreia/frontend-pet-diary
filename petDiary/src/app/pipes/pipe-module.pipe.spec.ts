import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { PipeModulePipe } from './pipe-module.pipe';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { SecurityContext } from '@angular/core';

describe('Pipe: SafeResourceUrl', () => {

  let domSanitizer: DomSanitizer;
  let pipe: PipeModulePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        MockProvider(DomSanitizer)
      ],
    })
  });

  beforeEach(() => {
    domSanitizer = TestBed.inject(DomSanitizer);
    pipe = new PipeModulePipe(domSanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  
});