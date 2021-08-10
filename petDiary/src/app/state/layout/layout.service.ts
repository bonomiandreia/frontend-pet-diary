import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LayoutStore } from './layout.store';
import { LayoutQuery } from './layout.query';

/**
 * Layout service
 *
 * @export
 * @class LayoutService
 */
@Injectable({ providedIn: 'root' })
export class LayoutService {
  private renderer: Renderer2
  private colorTheme: string;

  constructor(private layoutStore: LayoutStore, private layoutQuery: LayoutQuery, private rendererFactory: RendererFactory2) { 
    this.renderer = this.rendererFactory.createRenderer(null, null)
  }

  initTheme(): void {
    this.colorTheme = this.layoutQuery.getValue().mode;
    this.renderer.addClass(document.body, this.colorTheme)
  }

  updateTheme(theme: string): void {
    this.setClassMode(theme);
    const previousTheme = (theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
    this.renderer.removeClass( document.body, previousTheme)
    this.renderer.addClass(document.body, theme);

  }

  setClassMode(theme: string): void {
    this.layoutStore.update({mode: theme})
  }


  updateScreen(data: boolean): void {
    this.layoutStore.update({isMobile: data});
  }
}
