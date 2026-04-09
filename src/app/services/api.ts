import { Injectable } from '@angular/core';import { provideHttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class ApiService {

  private apiUrl = 'http://localhost/FoxgloveTome/api/test.php';

  constructor(private http: HttpClient) {}

  getTest() {
    return this.http.get(this.apiUrl);
  }
}
