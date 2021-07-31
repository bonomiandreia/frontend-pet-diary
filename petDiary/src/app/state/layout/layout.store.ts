import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface LayoutState {
  isMobile: boolean;

}
/**
 * Create initial state
 */
export function createInitialState(): LayoutState {
  return {
    isMobile: false,
  }
}


/**
 * Layout store
 *
 * @export
 * @class LayoutStore
 * @extends {Store<LayoutState>}
 */
//@Injectable()
@StoreConfig({ name: 'layout', resettable: true })
export class LayoutStore extends Store<LayoutState> {

  constructor() {
    super(createInitialState());
  }

  updateScreen(data: boolean) {
    this.update({isMobile: data});
  }
}
