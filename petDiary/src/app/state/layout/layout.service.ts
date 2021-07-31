import { Injectable } from '@angular/core';
import { LayoutStore } from './layout.store';

/**
 * Layout service
 *
 * @export
 * @class LayoutService
 */
@Injectable({ providedIn: 'root' })
export class LayoutService {

  constructor(private layoutStore: LayoutStore) { }

  updateScreen(data: boolean) {
    this.layoutStore.update({isMobile: data});
  }
}
