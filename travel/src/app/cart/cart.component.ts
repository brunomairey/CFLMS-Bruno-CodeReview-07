import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


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
quantity;
  constructor(private cartService: CartService) { }


  ngOnInit() {
  	this.items = this.cartService.getItems();
  	  this.fullPrice = this.calculatePrice();
  	  this.Discount = this.calculateDiscount();
  	  this.TotalPrice = this.calculateTotalPrice();
     };

upQuantity(item) {item.quantity++;
this.calculatePrice();
 this.calculateDiscount();
 this.calculateTotalPrice();}

downQuantity(item) {
 if (item.quantity != 0) item.quantity--;
 this.calculatePrice();

}



calculatePrice(){
      let calcPrice: number = 0;
      let quantity: number= 0;
     for(let item of this.items){
        calcPrice += item.price*item.quantity;
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


youorder(){
  console.log("toto");
      document.getElementById("yourorder").innerHTML="Your order for a price of " + this.TotalPrice + " $ has been submitted";
      document.getElementById("displaycards").innerHTML="";
   }

}
