import { Injectable } from "@angular/core";
import { ShopList } from "./shop-list/shopList";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
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
  shopLists: ShopList[] = [
    {
      shopid: 2019051301,
      title: "神州小本",
      subTitle: "神州小本，一人一本",
      price: 85.26,
      id: 100001
    },
    {
      shopid: 2019051302,
      title: "华为P30 pro",
      subTitle: "手机中的摄像机",
      price: 8858.26,
      id: 100002
    },
    {
      shopid: 2019051303,
      title: "小米MIX5 pro",
      subTitle: "小米公司匠心研究8年，最新产品",
      price: 85.26,
      id: 100001
    },
    {
      shopid: 2019051304,
      title: "一加 8 Plus",
      subTitle: "外国人都抢疯了",
      price: 8352.2,
      id: 100001
    },
    {
      shopid: 2019051305,
      title: "荣耀 X200",
      subTitle: "我用华为，我倍感荣耀",
      price: 2359.99,
      id: 100001
    }
  ];
  private heroesUrl = "http://localhost:8080/shops/list";
  getShopList(): Observable<ShopList[]> {
    return this.http.get<ShopList[]>(this.heroesUrl);
  }
  getShop(shopid: number): Observable<ShopList> {
    this.messageService.add(`商品ID=${shopid}`);
    return of(this.shopLists.find(shop => shop.shopid === shopid));
  }
}
