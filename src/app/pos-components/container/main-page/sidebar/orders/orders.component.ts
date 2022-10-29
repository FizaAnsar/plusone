import { Component, inject, OnChanges, OnInit } from '@angular/core';

import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  public isCollapsed = true;
  noteVAlue:string ='';
  changenotevalue(note){
    console.log(note)
    this.noteVAlue = note;
  }
  cartItems = [];
  cartTotal = 0;

  constructor(private messenger: MessengerService,private modalService: NgbModal) { }


  ngOnInit(): void {
    this.messenger.receiveOrderMenu().subscribe(cart => {
      console.log("selectred items in Orders Components", cart)

      this.addProductToCart(cart)
    })
  }
  addProductToCart(cart: any) {

    let menuExits = false


    for (let i in this.cartItems) {
      if (this.cartItems[i].id === cart.id) {
        this.cartItems[i].qty++;
        menuExits = true
        break;
      }
    }
    if (!menuExits) {
      this.cartItems.push({
        id: cart.id,
        name: cart.name,
        qty: 1,
        price: cart.price
      })

    }
    this.cartTotals()
  }
  cartTotals() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
  count = 1;
  countadd(count) {
    count = this.count++
    console.log(this.count)
    this.messenger.countadd(count)
  }
  countremove(count) {
    if (count != 1) {
      count = this.count--
      console.log(this.count)
    }
  }
  inc(cartItem) {
    cartItem.qty += 1;
    this.countadd(this.count)
    this.cartTotals()
  }

  dec(cartItem) {
    if (cartItem.qty != 1) {
      cartItem.qty -= 1;
    }
    this.countremove(this.count)
    this.cartTotals()
  }
  
  removeItem(cartItem) {
   
   
      let index = this.cartItems.findIndex((item) => {
        return item.id === cartItem.id
      });
      this.cartItems.splice(index, 1);

    
    this.cartTotals()
  }
}

