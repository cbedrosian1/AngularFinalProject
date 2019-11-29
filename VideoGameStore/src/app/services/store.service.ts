import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { VideoGame } from '../shared/models/video-game.model';


@Injectable({
    providedIn: 'root'
})
export class StoreService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    private url = 'http://localhost:3000/videoGames';

    constructor(private http: HttpClient) { }
 
    getVideoGames(): Observable<VideoGame[]> {
        return this.http.get<VideoGame[]>(this.url).pipe(
            tap(data => console.log('All ')),
            catchError(this.handleError)
        );
    }
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    };
}