import { Component, OnInit } from '@angular/core';
import { travelentry } from '../travelentry';
import { CartService } from '../cart.service';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.sass']
})
export class TravelComponent implements OnInit {
	products = travelentry;
	product;
  quantity;
  constructor(private cartService: CartService) { }

addToCart(x) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(x);
 }

upQuantity(x) {x.quantity++;}

downQuantity(x) {
 if (x.quantity != 0) x.quantity--;
}

  ngOnInit() {
    this.quantity
  }

}