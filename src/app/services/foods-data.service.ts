import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap, Observable, map, } from 'rxjs';
import { SignIn } from '../models/data-type';
import { config } from './config';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FoodsDataService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  responsedata: any;
  // user = new Subject<User>();
  constructor(private http:HttpClient, private router:Router) { }
  reloadUser() {
    // this function indicate that if user login it does not go back to signin and signup page.user will stay on dashboard(main) page
    if (localStorage.getItem('token')) {
      this.isUserLoggedIn.next(true)
      this.router.navigate(['dashboard'])
    }

  }

  deleteUser() {
    localStorage.clear();
  }

  userSignIn(data: SignIn) {
    this.http.get(`${config.server}${config.domain}user/login?username=${data.username}&password=${data.password}`)

      .subscribe({
        next: (res) => {
          console.log(res);
          this.responsedata = res;
          localStorage.setItem('token', this.responsedata.auth_token);
          localStorage.setItem('user',JSON.stringify(res));
          localStorage.setItem('user_name',data.username)
          this.router.navigate(['dashboard'])



        },
        error: (err) => {
          console.log(err.name);
          alert(err.error)
          alert(err.name)
        }
        
      })
  }
  getToken() {
    localStorage.getItem('token') || '';

  }

  getCategories() { 
    return this.http.get(`${config.server}${config.domain}sections`) 
  }
  getsubCategory(CategoryID:any){
    return this.http.get(`${config.server}${config.domain}categories/section/${CategoryID}`)
  }

  getmainmenu(subCategoryID:any): Observable<Product>{
    return this.http.get<Product>(`${config.server}${config.domain}menus/categories/${subCategoryID}`)
  }

  // get all menus
 getallmenus(){
  return this.http.get(`${config.server}${config.domain}sections/Category/menu/all`).pipe(
    map((resp:[])=> resp.map(item=> 

      item['sectionName']
    ))
  )
  
 }
   arr = Array() 

   getMenuNames(){
    return  this.http.get(`${config.server}${config.domain}sections/Category/menu/all`)
    
  // get all menus end
  }

}
