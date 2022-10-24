import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
const headers = new HttpHeaders()
.set('content-type', 'application/json')
.set('user_name', 'admin')
.set('auth_token', '183a96b2-0970-40fa-b62b-59a3172d2cdb')
@Injectable({
  providedIn: 'root'
})
export class FoodsDataService {

  constructor(private http:HttpClient) { }
  getCategories() {
    return this.http.get('http://192.168.10.215:8080/handi-ear/api/sections', {'headers':headers })
      
  }
  getsubCategory(CategoryID:any){
    return this.http.get(`http://192.168.10.215:8080/handi-ear/api/categories/section/${CategoryID}`, {'headers':headers })
  }

  getmainmenu(subCategoryID:any){
    return this.http.get(`http://192.168.10.215:8080/handi-ear/api/menus/categories/${subCategoryID}`, {'headers':headers })
  }
  // /////send order details from product-lists.ts *to* orders.ts
  orderSubject = new Subject();
  // order details reveived (product-lists to messenger service)
  sendOrderDetail(data:any){
    // console.log(data);
    this.orderSubject.next(data)
  }
  // order details send (messenger.service to orders.ts)
  receiveOrderMenu(){
    return this.orderSubject.asObservable();
  }

}
