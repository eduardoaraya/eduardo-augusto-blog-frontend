import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of, tap } from 'rxjs';
import { IAuthResponse } from '../../interfaces/auth.interface';
import { HttpAbstract } from '../http.abstract';

@Injectable()
export class AuthService extends HttpAbstract {
  private readonly KEY_TOKEN = '_token';

  constructor(http: HttpClient, private toastr: ToastrService) {
    super(http);
  }

  auth(email: string, password: string): Observable<IAuthResponse> {
    return this.post('backoffice/login', {
      email,
      password,
    }).pipe(
      catchError<any, Observable<IAuthResponse>>(({ error }) => {
        const errorMessage = error?.error ?? 'Invalid request!';
        this.toastr.error(errorMessage, 'Error');
        throw new Error('Invalid request!');
      }),
      tap((res) => {
        if (res?.token) {
          localStorage.setItem(this.KEY_TOKEN, res.token);
        }
      })
    );
  }

  getToken() {
    return localStorage.getItem(this.KEY_TOKEN);
  }

  invalidateToken() {
    localStorage.removeItem(this.KEY_TOKEN);
  }
}
