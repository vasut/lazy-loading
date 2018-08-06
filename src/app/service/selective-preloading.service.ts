import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class SelectivePreloadingService implements PreloadingStrategy {
  constructor() { }
  preload(route: Route, load: () => Observable<any>): Observable <any> {
    return route && route.data && route.data.preload ? load() : of(null);
  }
}
