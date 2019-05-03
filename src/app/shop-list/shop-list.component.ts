import { Component, OnInit } from "@angular/core";
import { ShopList } from "./shopList";
import { SuperShopService } from "../super-shop.service";
import { timingSafeEqual } from "crypto";
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
  shopList: ShopList = {
    id: 15,
    name: "Liu-jq",
    meta: true
  };
  editName = "";
  subId = 0;
  handelClick(item): void {
    this.subId = item.id;
    this.shopList = item;
  }
  editId = "";

  toGet() {}
  addClick(): void {
    if (this.editName == "") {
      return;
    }
    function showBoolean() {
      return Math.random() > 0.5 ? false : true;
    }
    var show = showBoolean();

    this.shopLists.push({
      id: this.shopLists.length + 1,
      name: this.editName,
      meta: show
    });
    this.editName = "";
  }
}
