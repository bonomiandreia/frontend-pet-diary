import { PipeModulePipe } from './pipe-module.pipe';

describe('PipeModulePipe', () => {
  it('create an instance', () => {
    const pipe = new PipeModulePipe();
    expect(pipe).toBeTruthy();
  });
});
