// src/app/services/entries/entries.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../api-endpoints';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class EntriesService {

  constructor(private http: HttpClient) {}

  getEntries() {
    // piped to return only the data property of the response
    // because the API response is wrapped in a data object 
    return this.http.get<any>(API.entries.read).pipe(
      map(data => data.data)
    )
  }

} 
