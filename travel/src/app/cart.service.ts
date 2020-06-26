import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items = [];
  constructor() { }

addToCart(x) {
   this.items.push(x);
 }

 getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   return this.items;
 }

 calculatePrice(){
      let calcPrice: number = 0;
     for(let item of this.items){
        calcPrice += item.price;
      }
      return calcPrice;
      
    }
         
calculateDiscount(){
     let Discount: number= this.calculatePrice();
      if ( Discount >= 200 && Discount < 500) {Discount=Discount*0.1}
      else if ( Discount >= 500) {Discount=Discount*0.2} 
      else {Discount=0} 
      return Discount;}
 
 calculateTotalPrice(){
let Totalprice: number= this.calculatePrice()-this.calculateDiscount();
    return Totalprice;
 }

}
