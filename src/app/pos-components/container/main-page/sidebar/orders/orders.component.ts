import { Component, HostListener, inject, OnChanges, OnInit } from '@angular/core';

import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgConfirmService } from 'ng-confirm-box';
import { BehaviorSubject, debounceTime, map } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  public isCollapsed = true;
  noteVAlue: string = '';
  changenotevalue(note) {
    // console.log(note)
    this.noteVAlue = '';
    this.noteVAlue = note;
  }
  cartItems = [];
  cartTotal = 0;
  Cart = []
  StorageItem: any
  modifiers: any = [];
  menuNames: any = [];



  allmenus: any;
  formGroup: FormGroup;
  filteredOptions;
  arr = Array();
  subArray = [];




  constructor(private messenger: MessengerService,
    private confirmService: NgConfirmService,
    private food: FoodsDataService,
    private fb: FormBuilder,

  ) {
    console.log(this.Cart, "constructor");
    console.log(this.subArray, "constructor sub Array ")

  }

  ngOnInit(): void {
    this.messenger.receiveOrderMenu().subscribe(cart => {

      console.log("selectred items in Orders Components", cart)
      this.setInStorage(cart)
      this.addProductToCart(cart)
      this.messenger.receiveModifier().subscribe(Selectedmodifier => {
        console.log("select", Selectedmodifier)
        // this.modifiers = Selectedmodifier;
        this.addModifierToCart(Selectedmodifier)
      })
      this.getfromStorage()
      this.cartTotals()

    })
    // for dropdown search
    this.initForm()
    this.getMenuNames()
   


  }

  //add products in cart
  addProductToCart(cart: any) {

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
      this.StorageItem = this.Cart


    }
    this.cartTotals()


  }
  addModifierToCart(data) {
    console.log("add modifier to cart", data)
    this.modifiers.unshift({
      modifierId: data.mId,
      modifierName: data.mName,
      modifierPrice: data.mPrice
    })
  }


  setInStorage(data: any) {
    localStorage.setItem('cart', JSON.stringify(data))

  }
  getfromStorage() {
    this.Cart = JSON.parse(localStorage.getItem('cart'))

  }

  @HostListener('window:load', ['$event'])
  onLoad(event: Event) {

    this.getfromStorage()
  }


  // count = 1;
  // countadd(count) {
  //   count = this.count++
  //   console.log(this.count)
  //   this.messenger.countadd(count)
  // }
  // countremove(count) {
  //   if (count != 1) {
  //     count = this.count--
  //     console.log(this.count)
  //   }
  // }

  /////////////////// Pricing section total increment, decrement, delete////////////////////
  cartTotals() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
      console.log("cart Total")
    })
  }
  inc(cartItem) {
    cartItem.qty += 1;
    this.cartTotals()
  }

  dec(cartItem) {
    if (cartItem.qty != 1) {
      cartItem.qty -= 1;
      this.cartTotals()

    }
  }

  removeItem(cartItem) {
    this.confirmService.showConfirm("Are you sure want to Delete?",
      () => {

        let index = this.Cart.findIndex((item) => {
          // localStorage.removeItem(item)

          return item.id === cartItem.id

        });
        this.Cart.splice(index, 1);
        this.cartTotals()
        // this.getfromStorage()
      },
      () => {

      })

  }
  // hideNote() {
  //   var btn = document.getElementsByClassName('note-collapse')[0]
  //   let ok;
  //   ok = btn;

  // }
  // showNote() {
  //   var btn = document.getElementsByClassName('note-collapse')[0]
  //   let pencil;
  //   pencil = btn;
  //   console.log(pencil)
  //   pencil.style.display = 'block !important'
  // }

  ///////////////////////Pricing section end//////////////


  /////search Functionality////////////////////////////

  initForm() {
    this.formGroup = this.fb.group({
      'menuItems': ['']
    })
    // .pipe(debounceTime(1000))
    this.formGroup.get('menuItems').valueChanges
      .subscribe(resp => {
        if (resp && resp.length) {

          this.filteredData(resp)
        } else {
          this.filteredOptions = []
        }
      })
  }
  filteredData(eneterdData) {

    this.filteredOptions = this.subArray.filter(item => {
      return item.toLowerCase().indexOf(eneterdData.toLowerCase()) > -1
    })
  }
  getMenuNames() {
    this.food.getMenuNames().subscribe({
      next: (res) => {

        let Category;
        Category = res;
        for (let i = 0; i < Category.length; i++) {
          let subCategories;
          subCategories = Category[i].categoryDAOs;
          for (let n = 0; n < subCategories.length; n++) {
            let products;
            products = subCategories[n].menuDAOs;
            for (let k = 0; k < products.length; k++) {
              let menus;
              menus = products[k]
              this.subArray.push(menus.menuName);
            }
          }
          break;
        }
        console.log(this.subArray);
      },
      error: (err) => {
        console.log(err.message)
      }
    }
    )
  }

  // /////search functionality////////////////////
  /////////////////////////////////////////////////////dropdown search functionality end
 
 
}

