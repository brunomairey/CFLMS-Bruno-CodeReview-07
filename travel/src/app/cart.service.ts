import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items = [];

  constructor() { }



addToCart(x) {
    if(x.quantity == 0){
      x.quantity = x.quantity;
     this.items.push(x);
     console.log("whaetever");
    } else {
      for(let item of this.items){
        (x.destination == item.destination) ? item.quantity++ : null ;
        console.log("toto");
      }
    }
    console.table(this.items);
  };

 getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   return this.items;
 }


}
