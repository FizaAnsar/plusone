import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  Menus: any
  modifiers: any = [];
  menuItemClicked: any = [];
  selectedMenuItem: any = [];
  ordersDetails: any[];
  selectedModifier: any = [];
  modifierActive: boolean



  constructor(private messenger: MessengerService) { }

  ngOnInit(): void {
    this.messenger.receiveMenuMain().subscribe(menuApi => {

      console.log(menuApi, "All Array")
      // this.modifiers=menuApi.modifiers
      this.Menus = menuApi;
      // this.modifiers= this.Menus.modifiers

    })


  }

  MenuItemClicked(data: any) {
    let menus: any = []

    // this.messenger.sendOrderDetail(data)

    this.selectedMenuItem = data

    // if(this.selectedMenuItem.itemModifiers.length === 0){
    //   this.modifierActive=this.selectedMenuItem.modifierActive
    //   this.modifiers = []
    //   console.log( this.modifierActive)
    // }
    // else{
    //   this.modifierActive=this.selectedMenuItem.modifierActive=true
    //   this.modifiers = this.selectedMenuItem.itemModifiers
    //   console.log(this.modifierActive)
    // }

    this.modifiers = this.selectedMenuItem.itemModifiers
    if (this.selectedMenuItem.itemModifiers.length === 0) {
      this.modifierActive = this.selectedMenuItem.modifierActive
      this.messenger.sendOrderDetail(this.selectedMenuItem)
      console.log(this.selectedMenuItem,"selected menu item")
     

      //   let model;
      //  model= document.getElementById('modifierModel')
      //  model.style.display ='none'
      //  console.log(model)
      //  console.log(model.style.display)
      console.log(this.modifierActive)
    }
    else {
      this.selectedMenuItem.modifierActive = true;
      this.modifierActive = this.selectedMenuItem.modifierActive
      this.modifiers = this.selectedMenuItem.itemModifiers
      // console.log(this.modifiers)
    }


  }
  count: any = 0
  previous: any = 0;
  type: string = "add"

  calculation(type: string) {
    if (type == 'add') {
      this.previous++ == this.count++;
      // console.log("previousss", this.previous)
      this.messenger.receivecountadd().subscribe((countsadd: any) => {
        this.count = this.previous + countsadd;
        // this.previous=0;
        console.log("count", this.count)
      })

    }


  }
  // increment(data){
  //   data.qty= data.qty+1;
  //   console.log(data.qty)
  // }
  // addtocart(menu){
  //   console.log(menu,"main menu")


  //   this.messenger.sendOrderDetail(menu)
  // }

  sendSelectedModifiers(data) {
    data.selected = true;
    // this.selectedMenuItem.push(data)
    this.selectedModifier = []
    this.selectedModifier.unshift({
      modifierId: data.modifierId,
      modifierName: data.modifierName,
      modifierPrice: data.modifierPrice,
      modifierQuantity: 1
    })
    // this.selectedModifier=data
    // this.selectedMenuItem.concat(

    //   data
    // )

    // this.messenger.sendModifier(data)

    // console.log("selected menu Items", this.selectedMenuItem)
    // console.log("selected  modifiers", this.selectedModifier)
    // Object.assign(this.selectedMenuItem,this.selectedModifier)
    // console.log("After object . assign selected menu Items", this.selectedMenuItem)


    let orderss = {
      ...this.selectedMenuItem,
      ...this.selectedModifier
    }
    // console.log(orderss,"orderedddddddddddddddddddddddddddd")
    this.messenger.sendModifier(orderss)



  }
  orderDetails() {
  }


}
