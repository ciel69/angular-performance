import {NgZone} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

export function outsideZone<T>(zone: NgZone) {
  return (source: Observable<T>) => {
    return new Observable(observer => {
      let sub: Subscription;
      zone.runOutsideAngular(() => {
        sub = source.subscribe(observer);
      });

      return sub;
    });
  };
}
