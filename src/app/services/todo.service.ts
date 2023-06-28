import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  public deleteTodo(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  public postTodo(title: string): Observable<{ id?: string }> {
    return this.http
      .post(this.apiUrl, title)
      .pipe(catchError(this.handleError));
  }

  public putCompletedTodo(isCompleted: boolean, id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .put(url, { completed: isCompleted })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    const errorMessage = 'Something went wrong. Please try again later.';
    return throwError(() => new Error(errorMessage));
  }
}
