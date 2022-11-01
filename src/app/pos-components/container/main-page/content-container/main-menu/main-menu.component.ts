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
  Menus:any
  constructor(private messenger:MessengerService, private cart:CartService) { }

  ngOnInit(): void {
    this.messenger.receiveMenuMain().subscribe(menuApi => {
     
      this.Menus = menuApi;
    
    })
  }
  MenuItemClicked(data: any) {
    // this.cart.addProductToCart2(data)
    this.messenger.sendOrderDetail(data)

    // this.messenger.sendOrderDetail(data)
    // this.messenger.sendSubCategory(data)

    console.log('product-list data', data)
  }
  count: any = 0
  previous: any =0;
  type:string="add"

  calculation(type:string) {
    if(type =='add'){
      this.previous++ == this.count++;
      console.log("previousss", this.previous)
      this.messenger.receivecountadd().subscribe((countsadd:any) => {
        this.count=this.previous+countsadd;
        // this.previous=0;
        console.log("count", this.count)
      })
  
    }
  

  }
  increment(data){
    data.qty= data.qty+1;
    console.log(data.qty)
  }

}
