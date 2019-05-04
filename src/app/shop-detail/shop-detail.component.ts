import { Component, OnInit, Input } from "@angular/core";
import { ShopList } from "../shop-list/shopList";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { SuperShopService } from "../super-shop.service";

@Component({
  selector: "app-shop-detail",
  templateUrl: "./shop-detail.component.html",
  styleUrls: ["./shop-detail.component.css"]
})
export class ShopDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private superShopService: SuperShopService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getShop()
  }
  shop:ShopList
  getShop(): void {
    const shopid = +this.route.snapshot.paramMap.get("shopid");
    this.superShopService
      .getShop(shopid)
      .subscribe(item => (this.shop = item));
  }
  goBack(): void {
    this.location.back();
  }
}
