import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  cartItems = [];
  cartTotal = 0;
  constructor() { }

  cartTotals() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
 
  inc(cartItem) {
    if (cartItem.qty != 10) {
      cartItem.qty += 1;
   

    }
   
    this.cartTotals()
  }
  dec(cartItem) {
    if (cartItem.qty != 1) {
      cartItem.qty -= 1;
  

    }
   
    this.cartTotals()
  }
  removeItem(cartItem) {
    let removeConfirm = window.confirm("Are you sure you want to remove this item from the cart?");
    if (removeConfirm) {
      let index = this.cartItems.findIndex((item) => {
        return item.id === cartItem.id
      });
      this.cartItems.splice(index, 1);

    }
    this.cartTotals()
  }
}
