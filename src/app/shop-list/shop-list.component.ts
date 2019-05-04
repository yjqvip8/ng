import { Component, OnInit } from "@angular/core";
import { ShopList } from "./shopList";
import { SuperShopService } from "../super-shop.service";
@Component({
  selector: "app-shop-list",
  templateUrl: "./shop-list.component.html",
  styleUrls: ["./shop-list.component.css"]
})
export class ShopListComponent implements OnInit {
  constructor(private shopListServer: SuperShopService) {}
  ngOnInit() {
    // 初始化之后进行的钩子函数
    this.getShopList();
  }
  shopLists: ShopList[];
  getShopList(): void {
    this.shopListServer
      .getShopList()
      .subscribe(shopLists => (this.shopLists = shopLists));
  }
  editName: string = "";
  addClick(): void {
    if (this.editName == "") {
      return;
    }
    this.shopLists.push({
      shopid:this.shopLists.length+1,
      title: this.editName+"title",
      subTitle: "sub title string",
      price: 85.2,
      id: 100001
    });
    this.editName = "";
  }
}
