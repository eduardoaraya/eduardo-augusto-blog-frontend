import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading = new Subject<boolean>();

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  start() {
    this.loading.next(true);
  }

  stop() {
    this.loading.next(false);
  }
}
