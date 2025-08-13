import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = 'https://84.241.27.13:4433/api'; // ✅ Set your base URL here
  private http = inject(HttpClient);

  get<TResponse>(endpoint: string, params?: HttpParams): Observable<TResponse> {
    return this.http.get<TResponse>(`${this.baseUrl}${endpoint}`, { params });
  }

  post<TRequest, TResponse>(
    endpoint: string,
    body: TRequest,
    headers?: HttpHeaders,
  ): Observable<TResponse> {
    return this.http.post<TResponse>(`${this.baseUrl}${endpoint}`, body, {
      headers,
    });
  }

  put<TRequest, TResponse>(
    endpoint: string,
    body: TRequest,
    headers?: HttpHeaders,
  ): Observable<TResponse> {
    return this.http.put<TResponse>(`${this.baseUrl}${endpoint}`, body, {
      headers,
    });
  }

  delete<TResponse>(
    endpoint: string,
    headers?: HttpHeaders,
  ): Observable<TResponse> {
    return this.http.delete<TResponse>(`${this.baseUrl}${endpoint}`, {
      headers,
    });
  }
}
