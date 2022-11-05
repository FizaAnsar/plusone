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


  allmenus: any;
  formGroup: FormGroup;
  filteredOptions;



  constructor(private messenger: MessengerService,
    private confirmService: NgConfirmService,
    private food: FoodsDataService,
    private fb: FormBuilder,

  ) {
    console.log(this.Cart, "constructor")

    // This function will get all the menu names 
    this.food.getMenuNames()


  }

  modifiers:any;
  ngOnInit(): void {
    this.messenger.receiveOrderMenu().subscribe(cart => {

      console.log("selectred items in Orders Components", cart)
      this.setInStorage(cart)
      this.addProductToCart(cart)
      this.messenger.receiveModifier().subscribe(Selectedmodifier=>{
        console.log("select", Selectedmodifier)
        // this.modifiers = Selectedmodifier;
        this.addModifierToCart(Selectedmodifier)
      })
      this.getfromStorage()
      this.cartTotals()

    })
    // for dropdown search
    this.initForm()
    this.getNames()

      // For Modifiers addition in cart Table
   

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
      this.modifiers.unshift({
        id: data.mId,
        name: data.mName,     
       price: data.mPrice
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
    this.filteredOptions = this.allmenus.filter(item => {
      return item.toLowerCase().indexOf(eneterdData.toLowerCase()) > -1
    })
  }

  products: any
  mainMenus = []
  getNames() {
    this.food.getallmenus().subscribe(response => {
      console.log(response, "data")
      this.allmenus = response;
      this.filteredOptions = response;
    })
    this.food.getMenuNames().subscribe({
      next: (res) => {
        // console.log(res,"Main Json")
        let Category;
        Category = res;
        for (let i = 0; i < Category.length; i++) {


          // console.log(i, Category[0], "Outer for Loop  by using break this will only get appitizer section and its only 46 subcategories no duplication occurs");


          // console.log(i, "This will get all 46 categories array of Appitizer section whose index is 0", Category[0].categoryDAOs);
          let subCategories;
          subCategories = Category[i].categoryDAOs;

          for (let n = 0; n < subCategories.length; n++) {
            let products;

            products = subCategories[n].menuDAOs;

            for (let k = 0; k < products.length; k++) {

              let array;
              array = products[k]
              // console.log(".....", array.menuName)

            }
          }
          break; //  by using break this will only get appitizer section and its only 46 subcategories no duplication occurs
        }
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

