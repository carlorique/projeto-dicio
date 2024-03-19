import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRecentSearches(): Observable<{ recentSearches: { word: string; count: number }[] }> {
    return this.http.get<{ recentSearches: { word: string; count: number }[] }>(`${this.apiUrl}/recent-searches`);
  }
}
