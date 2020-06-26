import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
items;
fullPrice;
Discount;
TotalPrice;
  constructor(private cartService: CartService) { }


  ngOnInit() {
  	this.items = this.cartService.getItems();
  	 this.fullPrice = this.cartService.calculatePrice();
  	 this.Discount = this.cartService.calculateDiscount();
  	 this.TotalPrice = this.cartService.calculateTotalPrice();
  }

}