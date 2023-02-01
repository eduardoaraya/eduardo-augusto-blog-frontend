import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap, Observable, catchError, of, throwError } from 'rxjs';
import { AuthService } from '../http/services/admin/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authHeader = request.headers.set(
      'Authorization',
      `Bearer ${this.authService.getToken()}`
    );
    const reqClone = request.clone({
      headers: authHeader,
    });
    return next.handle(reqClone).pipe(
      catchError((res) => {
        if (res instanceof HttpErrorResponse && res.status === 401) {
          this.authService.invalidateToken();
          this.router.navigate(['/admin/login']);
        }
        console.log(res);
        throw new Error(res);
      })
    );
  }
}
