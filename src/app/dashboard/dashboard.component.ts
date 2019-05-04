import { Component, OnInit } from "@angular/core";
import { SuperShopService } from "../super-shop.service";
import { ShopList } from "../shop-list/shopList";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private superShopService: SuperShopService) {}
  shopLists: ShopList[] = [];
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.superShopService
      .getShopList()
      .subscribe(shoplist => (this.shopLists = shoplist));
  }
}
