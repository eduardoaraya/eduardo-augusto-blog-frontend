import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class HttpAbstract {
  private readonly API_URL = environment.api;

  constructor(private readonly http: HttpClient) {}

  protected post<Request, Response>(path: string, data: Request) {
    return this.http.post<Response>(this.getURL(path), data);
  }

  protected get<Response>(path: string) {
    return this.http.get<Response>(this.getURL(path));
  }

  protected put<Request, Response>(path: string, data: Request) {
    return this.http.put<Response>(this.getURL(path), data);
  }

  protected delete<Response>(path: string) {
    return this.http.delete<Response>(this.getURL(path));
  }

  getURL(path: string) {
    return `${this.API_URL}${path}`;
  }
}
