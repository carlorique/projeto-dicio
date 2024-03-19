import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  private apiUrl = 'http://localhost:3000'; // Assumindo que a rota está disponível no mesmo servidor

  constructor(private http: HttpClient) { }

  getWordOfTheDay(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/dia`).pipe(
      catchError(error => {
        console.error(error);
        return of('Erro ao obter a palavra do dia.');
      })
    );
  }
}