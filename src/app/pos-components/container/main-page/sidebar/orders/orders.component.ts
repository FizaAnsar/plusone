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
  dropdownvalue: any;


  modifiers: any = [];
  menuNames: any = [];
  searchQuantity: any;



  allmenus: any;
  formGroup: FormGroup;
  filteredOptions;
  arr = Array();
  menuNameArray = [];
  menuArray = [];
  menuCodeName;
  searchCart: any = [];
  orderData: any = [];
  allModifiers: any = [];
  selectedModifier: any;
  selectedModifierArray: any[];
  withoutModifiers: any[];




  constructor(private messenger: MessengerService,
    private confirmService: NgConfirmService,
    private food: FoodsDataService,
    private fb: FormBuilder,

  ) {
    console.log(this.Cart, "constructor");
    console.log(this.menuNameArray, "constructor sub Array ")

  }

  ngOnInit(): void {
    this.messenger.receiveModifier().subscribe(cart => {


      this.addProductToCart(cart)



      // for getting items from local storage
      this.getfromStorage()
      this.getTotalfromLS()
    })
    this.messenger.receiveOrderMenu().subscribe(withoutModifier => {
      // this.addProductToCartWithoutModifiers(withoutModifier)
    })
    // for dropdown search
    this.initForm()
    this.getMenuNames()


  }
  // addProductToCartWithoutModifiers(withoutModifier) {

  // for (let i in this.withoutModifiers) {
  //   if (this.withoutModifiers[i].menuId === withoutModifier.itemId) {
  //     this.withoutModifiers[i].menuQty++;

  //   }

  // }



  //   for (let i = 0; i <= this.withoutModifiers.length; i++) {
  //     this.withoutModifiers.unshift({
  //       menuId: withoutModifier.itemId,
  //       menuName: withoutModifier.itemName,
  //       menuQty: withoutModifier.itemQuantity + 1,
  //       menuPrice: withoutModifier.itemPrice,
  //     })
  //   }

  // }
  //add products in cart
  addProductToCart(cart: any) {
    console.log(cart, "in add product to cart")
    // this.allModifiers= cart.itemModifiers;
    // console.log(this.allModifiers,"ALL MODIFIERS")
    // for(let i = 0; i<=this.allModifiers.length;i++){
    //   if(this.allModifiers[i].selected==true){
    //     console.log(this.allModifiers[i],"selected Modifier in order.js")
    //     this.selectedModifier=this.allModifiers[i]
    //     let menuExits = false
    //     for (let i in this.cartItems) {
    //       if (this.cartItems[i].menuId === cart.itemId) {
    //         this.cartItems[i].menuQty++;

    //         menuExits = true

    //         break;
    //       }
    //     }
    //     if (!menuExits) {
    //       this.cartItems.unshift({
    //         menuId: cart.itemId,
    //         menuName: cart.itemName,
    //         menuQty: cart.itemQuantity + 1,
    //         menuPrice: cart.itemPrice,


    //       })
    //       console.log(this.cartItems,"cartItems")
    //       // this.modifiers.unshift({
    //       //   mId:this.selectedModifier.modifierId
    //       // })
    //       // this.modifiers=this.cartItems[i].modifiers
    //       // this.selectedModifier.selected = false
    //     }
    //     console.log(this.modifiers,"cartItemsbModifiersss")

    //   // break;
    //   // console.log(this.allModifiers,"after for loop")
    // }



    // }



    // for (let i in this.cartItems) {
    //   if (this.cartItems[i].menuId === cart.itemId) {
    //     this.cartItems[i].menuQty++;
    //     if (this.cartItems[i].modifierId === cart.modifierId) {
    //       this.cartItems[i].modifierQuantity++;
    //     }
    //     menuExits = true

    //     break;
    //   }
    // }
    // if (!menuExits) {
    // console.log("cart items outside of if whose length is 0", this.cartItems);
    // if (this.cartItems.length == 0) {
    //   this.cartItems.unshift({
    //     menuId: cart.itemId,
    //     menuName: cart.itemName,
    //     menuQty: cart.itemQuantity + 1,
    //     menuPrice: cart.itemPrice,
    //     modifierId: cart[0].modifierId,
    //     modifierName: cart[0].modifierName,
    //     modifierPrice: cart[0].modifierPrice,
    //     modifierQuantity: 1,
    //   })
    // }
    // else {
    let menuExits = false


    for (let i in this.cartItems) {
      if (this.cartItems[i].menuId === cart.itemId) {
        // this.cartItems[i].menuQty = 1;

        if (this.cartItems[i].modifierId === cart[0].modifierId) {
          console.log('inside of modifier compare')
          this.cartItems[i].modifierQuantity++;
          menuExits = true;
        }
        // this.cartItems[i].menuQty++;


        // break;

      }

    }
    console.log(this.cartItems, "outside of for statement ");
    this.setInStorage(this.cartItems)
    if (!menuExits) {

      for (let i = 0; i <= this.cartItems.length; i++) {
        this.cartItems.unshift({
          menuId: cart.itemId,
          menuName: cart.itemName,
          menuQty: cart.itemQuantity + 1,
          menuPrice: cart.itemPrice,
          modifierId: cart[i].modifierId,
          modifierName: cart[i].modifierName,
          modifierPrice: cart[i].modifierPrice,
          modifierQuantity: 1,

        })
        // console.log(this.cartItems, "inside of for statement");
        // this.setInStorage(this.cartItems)
        // }
        // }

      }
    }

    // console.log(this.cartItems, "cartItems")


    // this.getfromStorage()
    this.cartTotals()


  }
  // addModifierToCart(data) {
  //   console.log(data,"add modifier to cart")
  //   let modifierExit = false;
  //   for (let i in this.modifiers) {
  //     if (this.modifiers[i].mId === data.modifierId) {
  //       this.modifiers[i].mQty++;
  //       modifierExit = true
  //     }
  //     console.log("add modifier to cart", data)

  //   }
  //   if (!modifierExit) {
  //     this.modifiers.unshift({
  //       mId: data.modifierId,
  //       mName: data.modifierName,
  //       mPrice: data.modifierPrice,
  //       mQty: 1
  //     })
  //   }
  //   console.log("this.modifiers", this.modifiers)
  //   // this.menuAndModifiers()
  // }

  // menuAndModifiers() {
  //   console.log(this.Cart, "hjh")
  //   console.log(this.modifiers, "yfui")
  //   let menuItem = this.Cart;
  //   let modifierItem = this.modifiers;
  //   this.orderData.unshift(menuItem);
  //   for (let i in modifierItem) {
  //     this.orderData.unshift(modifierItem[i])
  //   }
  //   console.log(this.orderData)

  // }
  setInStorage(data: any) {
    localStorage.setItem('cart', JSON.stringify(data))

  }
  getfromStorage() {
    this.Cart = JSON.parse(localStorage.getItem('cart'))

  }

  @HostListener('window:load', ['$event'])
  onLoad(event: Event) {

    this.getfromStorage()
    this.getTotalfromLS()
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
    let cart_Total = 0;
    this.cartItems.forEach(item => {
      cart_Total += (item.menuQty * item.menuPrice) + (item.modifierQuantity * item.modifierPrice)
      // console.log("cart Total")
      this.storeTotalinLS(cart_Total)
      this.getTotalfromLS()

    })
  }
  storeTotalinLS(cart_Total) {
    localStorage.setItem('cart_Total', JSON.stringify(cart_Total))
  }
  getTotalfromLS() {
    this.cartTotal = JSON.parse(localStorage.getItem('cart_Total'))
  }
  menuInc(cartItem) {
    cartItem.menuQty += 1;
    this.cartTotals()
  }

  menuDec(cartItem) {
    if (cartItem.menuQty != 1) {
      cartItem.menuQty -= 1;
      this.cartTotals()

    }
  }
  modInc(cartItem) {
    cartItem.modifierQuantity += 1
    this.cartTotals()
  }
  modDec(cartItem) {
    if (cartItem.modifierQuantity != 1) {
      cartItem.modifierQuantity -= 1;
      this.cartTotals()

    }
  }
  removeMenuItem(cartItem) {
    this.confirmService.showConfirm("Are you sure want to Delete?",
      () => {

        let index = this.cartItems.findIndex((item) => {
          // localStorage.removeItem(item)

          return item.menuId === cartItem.menuId

        });
        this.Cart.splice(index, 1);
        // this.setInStorage(this.Cart)
        this.cartTotals()
        if (this.cartItems.length === 0) {

          this.cartTotal = 0
          this.storeTotalinLS(this.cartTotal)
        }


        // this.getfromStorage()
      },
      () => {

      })

  }
  removeModifierItem(cartItem) {
    this.confirmService.showConfirm("Are you sure want to Delete?",
      () => {

        let index = this.cartItems.findIndex((item) => {
          // localStorage.removeItem(item)

          return item.modifierId === cartItem.modifierId

        });
        this.Cart.splice(index, 1);
        // this.setInStorage(this.Cart)
        this.cartTotals()
        if (this.cartItems.length === 0) {

          this.cartTotal = 0
          this.storeTotalinLS(this.cartTotal)
        }


        // this.getfromStorage()
      },
      () => {

      })
  }    // hideNote() {
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
  isdisabled: boolean = false;
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


    this.filteredOptions = this.menuNameArray.filter(item => {
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
              // console.log("all menus in orders", menus)
              this.menuNameArray.push(menus.menuName);
              this.menuArray.push(menus)

            }
          }
          break;
        }
        console.log(this.menuNameArray);
        console.log("whole menu array", this.menuArray)
      },
      error: (err) => {
        console.log(err.message)

      }
    }
    )
  }


  getMenuCode(e) {
    //  console.log(e)
    for (let i = 0; i <= this.menuArray.length; i++) {
      // console.log(this.menuArray[i].menuCode)
      if (this.menuArray[i].menuCode === e) {
        this.menuCodeName = this.menuArray[i].menuName
        console.log(this.menuCodeName)
      }
    }
  }
  getQuantityofSearch(value) {
    this.searchQuantity = value
  }
  handleKeyUpforMenuCode(e, Code) {
    // console.log(e)
    if (e.key === 'Enter' || e.keyCode === 13) {
      //  console.log(nextButtons ,"button")
      document.getElementById('3').focus()
      for (let i = 0; i <= this.menuArray.length; i++) {
        // console.log(this.menuArray[i].menuCode)
        if (this.menuArray[i].menuCode === Code) {
          this.menuCodeName = this.menuArray[i].menuName
          console.log(this.menuCodeName)
        }
      }

      console.log(e)
      this.addSearchItemstoCart()
    }
  }

  handlekeyuponDropdownforInput(event) {
    console.log("for selection change", event)
    if (event.key === 'Enter' || event.keyCode === 13) {
      document.getElementById('3').focus()
      this.menuCodeName = this.dropdownvalue;
      // console.log(event)
      // this.addSearchItemstoCart()
    }
  }
  handlekeyuponDropdown(selectedVal) {
    this.dropdownvalue = selectedVal
  }

  addSearchItemstoCart() {
    this.searchCart.unshift({
      searchName: this.menuCodeName,
      searchQty: this.searchQuantity
    })
    console.log(this.searchCart, "search Item")
  }

  handleKeyUpforaddSearchItemsinCart(e, val) {
    this.searchQuantity = val
    if (e.key === 'Enter' || e.keyCode === 13) {

      console.log(e)
      this.addSearchItemstoCart()


    }
  }
  // /////search functionality////////////////////
  /////////////////////////////////////////////////////dropdown search functionality end

}

