import { Component, OnInit,Input } from '@angular/core';
import {ShopList} from "../shop-list/shopList"

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  @Input() shopList : ShopList
  constructor() { }

  ngOnInit() {
  }

}
