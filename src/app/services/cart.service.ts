import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  carturl: 'http://localhost:3000/cart'
  constructor(private http: HttpClient) { }
  getCartItems(): Observable<any> {
    //TODO: Mapping the obtain result to our cart Items Properties (pipe() and map())
    return this.http.get<any>("http://localhost:3000/cart");
  }
  addProductToCart2(product:any){
    // console.log(this.http.post(this.carturl,{product}))
    //  sessionStorage.setItem('cart',JSON.stringify(product))
    // return this.http.post("http://localhost:3000/cart",{product})

  }
}
