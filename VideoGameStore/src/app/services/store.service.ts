import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { VideoGame } from '../shared/models/video-game.model';
import { Product } from '../shared/models/product.model';


@Injectable({
    providedIn: 'root'
})
export class StoreService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    private gameUrl = 'http://localhost:3000/videoGames';
    private accessoryUrl = 'http://localhost:3000/accessories';
    private electronicUrl = 'http://localhost:3000/electronics';
    private cartUrl = 'http://localhost:3000/cart';

    constructor(private http: HttpClient) { }
 
    getVideoGames(): Observable<Product[]> {
        return this.http.get<Product[]>(this.gameUrl).pipe(
            tap(data => console.log('All ')),
            catchError(this.handleError)
        );
    }

    getAccessories(): Observable<Product[]> {
        return this.http.get<Product[]>(this.accessoryUrl).pipe(
            tap(data => console.log('All ')),
            catchError(this.handleError)
        );
    }

    getElectronics(): Observable<Product[]> {
        return this.http.get<Product[]>(this.electronicUrl).pipe(
            tap(data => console.log('All ')),
            catchError(this.handleError)
        );
    }

    addToCart(product: Product): Observable<Product> {
        return this.http.post<Product>(this.cartUrl, product, this.httpOptions).pipe(
            tap(
              (car) =>{
                console.log("POST call successful value returned in body",
                catchError(this.handleError))
              }
            )
          );
    }
    
    getCart(): Observable<Product[]> {
        return this.http.get<Product[]>(this.cartUrl).pipe(
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