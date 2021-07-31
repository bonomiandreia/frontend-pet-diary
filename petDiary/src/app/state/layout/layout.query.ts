import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { LayoutStore, LayoutState } from './layout.store';

/**
 * Layout query
 *
 * @export
 * @class LayoutQuery
 * @extends {Query<LayoutState>}
 */
@Injectable({ providedIn: 'root' })
export class LayoutQuery extends Query<LayoutState> {

  readonly isMobile$: Observable<boolean>;

  constructor(protected store: LayoutStore) {
    super(store);

    this.isMobile$ = this.select(state => state.isMobile);
  }

}
