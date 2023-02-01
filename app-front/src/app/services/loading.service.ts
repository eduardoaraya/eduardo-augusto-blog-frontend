import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading = new BehaviorSubject<boolean>(false);

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
