import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/Categoria'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:3000/categorias';

  constructor(private http: HttpClient) {}

  list(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  add(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, categoria, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: string, categoria: Categoria): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, categoria);
  }
}
