import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }
  /////////////////// send AND receive data from categories.ts to sub-category.ts////////////////////////

  // category id received in service 
  subject = new Subject();
  sendSubCategory(subCategory:[]){
    // console.log("Category Id is in Food Service: ",subCategory )
    this.subject.next(subCategory)
  }
  // send category id to sub category using observal
  receiveSubCategory(){
    return this.subject.asObservable();
  }
  // ////////////////////////////////////////////////////////////////////////////////////////////////////



  // ////////////////////send main products from sub-category-lists.ts to product.ts//////////////////////
  menuSubject= new Subject();
  // sub-category-lists (ID) receive in service file
  sendMenuCategory(menu:[]){
    // console.log("Recieve menu from sub caegory to service: ",menu )
    this.menuSubject.next(menu)
  }
  // send sub-category-lists to products.ts , product.ts receive this function
  receiveMenuMain(){
    return this.menuSubject.asObservable();
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////



    /////////////////send order details from product-lists.ts *to* orders.ts////////////////////////////////
    orderSubject = new Subject();
    cartItem:any
    // order details reveived (product-lists to messenger service)
    sendOrderDetail(data:any){
      // console.log(data);
      this.orderSubject.next( sessionStorage.setItem('cart',JSON.stringify(data)))
      //  sessionStorage.setItem('cart',JSON.stringify(data))
    }
    // order details send (messenger.service to orders.ts)
    receiveOrderMenu(){
      // console.log(this.cartItem,"gfyjutilh,kj")
      // this.cartItem = JSON.parse(sessionStorage.getItem('cart'))
      // return this.cartItem;
      return this.orderSubject.asObservable();
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    // add
    countsplus = new Subject();
    countadd(count){
      this.countsplus.next(count)
      console.log("Add",count)
    }
    receivecountadd(){
      return this.countsplus.asObservable()
    }
    // minus
    countsminus = new Subject();
    countminus(count){
      this.countsminus.next(count)
      console.log("Minus",count)
    }
   
    receivecountminus(){
      return this.countsminus.asObservable()
    }
    
}
