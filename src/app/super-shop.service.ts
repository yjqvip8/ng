import { Injectable } from "@angular/core";
import { ShopList } from "./shop-list/shopList";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class SuperShopService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private getShopListUrl = "http://localhost:8080/shops/";
  getShopList(): Observable<ShopList[]> {
    return this.http.get<ShopList[]>(`${this.getShopListUrl}list`).pipe(
      tap(_ => this.log("fetched heroes")),
      catchError(this.handleError<ShopList[]>("getHeroes", []))
    );
  }
  getShop(shopid: number): Observable<ShopList> {
    const url = `${this.getShopListUrl}shop?shopid=${shopid}`;
    return this.http.get<ShopList>(url).pipe(
      tap(_ => this.log(`fetched hero id=${shopid}`)),
      catchError(this.handleError<ShopList>(`getHero id=${shopid}`))
    );
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
