import { Component, inject, OnChanges, OnInit } from '@angular/core';

import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgConfirmService } from 'ng-confirm-box';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  public isCollapsed = true;
  noteVAlue: string = '';
  changenotevalue(note) {
    console.log(note)
    this.noteVAlue= '';
    this.noteVAlue = note;
  }
  cartItems = [];
  cartTotal = 0;
  cartItems2:any
  Cart =[]


  constructor(private messenger: MessengerService,
    private confirmService: NgConfirmService,
    private cart:CartService
  ) { console.log(this.Cart,"constructor")}


  ngOnInit(): void {
    this.messenger.receiveOrderMenu().subscribe(cart => {
      cart= JSON.parse(sessionStorage.getItem('cart'))
      console.log("selectred items in Orders Components", cart)

      this.addProductToCart(cart)
      this.getfromStorage()
      // this.cart.getCartItems().subscribe(res=>{
      //   console.log(res,"ho")
      // })
      // this.cart.addProductToCart2().subscribe()
    })
  }
  addProductToCart(cart: any) {
    // this.cart.addProductToCart2().subscribe()
    // this.cartItems2 = this.getfromStorage()
    let menuExits = false


    for (let i in this.cartItems) {
      if (this.cartItems[i].id === cart.id) {
        this.cartItems[i].qty++;
        menuExits = true
        this.setInStorage(this.cartItems)
        break;
      }
    }
    if (!menuExits) {
      this.cartItems.unshift({
        id: cart.id,
        name: cart.name,
        qty: 1,
        price: cart.price
      })
      this.setInStorage(this.cartItems)

    }
    this.cartTotals()
  }
  setInStorage(data:any){
    localStorage.setItem('cart',JSON.stringify(data))
    console.log('set successfully')
  }
  getfromStorage(){
    this.Cart= JSON.parse(localStorage.getItem('cart'))
    console.log(this.Cart,"Value getting from session storage")
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
    this.confirmService.showConfirm("Are you sure want to Delete?",
    () => {
     //your logic if Yes clicked
    //  console.log(cartItem)
     let index = this.cartItems.findIndex((item) => {
            return item.id === cartItem.id
          });
          this.cartItems.splice(index, 1);
          this.cartTotals()
   },
   () => {
     //yor logic if No clicked
   })
 
  }
  hideNote(){
   var btn = document.getElementsByClassName('note-collapse')[0]
   let ok;
   ok=btn;
 
  }
  showNote(){
    var btn = document.getElementsByClassName('note-collapse')[0]
    let pencil;
    pencil=btn;
    console.log(pencil)
    pencil.style.display='block !important'
  }
 
}

