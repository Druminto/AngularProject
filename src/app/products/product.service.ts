import { IProduct } from './product';
import {  Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    serverUrl = 'api/products/products.json';
    constructor(private http: HttpClient){

    }
    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.serverUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<IProduct>{
        
        return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            //A client side or network error ocurred
            errorMessage = 'An error ocurred ${err.error.message}';
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            errorMessage = 'Server returned code ${err.status}. error message is: ${err.message}';
        }
        console.error(errorMessage);
        return throwError(err.message);
    }
}