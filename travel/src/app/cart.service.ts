import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
items = [];

  constructor() { }
addToCart(x) {
    if(!this.items.includes(x)){
      // x.quantity = x.quantity;
     this.items.push(x);
     console.log("whaetever");
    // } else {
    //   for(let item of this.items){
    //     (x.destination == item.destination ? item.quantity++ : null) ;
    //     console.log("toto");
    //   }
  } else if(this.items.includes(x)){
      x.quantity=x.quantity+x.quantity;
      console.log("ha")
  }else{
    console.log("bla")
  }
    console.table(this.items);
  };
 getItems() {
   return this.items;
 }
 getLength(){
return this.items.length;
 }
 clearCart() {
   this.items = [];
   return this.items;
 }
}

