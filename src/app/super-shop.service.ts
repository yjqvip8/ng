import { Injectable } from "@angular/core";
import { ShopList } from "./shop-list/shopList";
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class SuperShopService {
  constructor() {}
  shopLists: ShopList[] = [
    { id: 1, name: "小张", meta: true },
    { id: 2, name: "李磊", meta: false },
    { id: 3, name: "韩梅梅", meta: true },
    { id: 4, name: "嘉华", meta: false },
    { id: 5, name: "刘峰", meta: true },
    { id: 6, name: "金豆", meta: true }
  ];
  getShopList(): Observable<ShopList[]> {
    return of(this.shopLists);
  }
}
