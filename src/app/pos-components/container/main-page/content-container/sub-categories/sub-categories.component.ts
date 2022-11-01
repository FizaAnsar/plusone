import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {

  constructor(private messenger: MessengerService, private food:FoodsDataService) { }
  subcategory:any
  mainMenu:any;
  ngOnInit(): void {
    this.messenger.receiveSubCategory().subscribe(subcatApi =>{
      console.log("subCategory successfully receive in sub category", subcatApi);
     
    
      this.subcategory= subcatApi;
      for(let i=0; i<= this.subcategory.length ; i++){
        this.food.getmainmenu(this.subcategory[i].categoryId).subscribe({
          next: (res) => {
            var btn = document.getElementsByClassName('category_item')[0]
            console.log(btn,"subcategry")
            // console.log(btn.nodeValue)
            var value = btn.attributes[2].value;
            console.log(value)
            let button;
            button =btn;
            if(this.subcategory[i].categoryId=='146'){
              button.style.background ='rgb(255,69,58)'
              button.style.color ='white'
            }
            else if(this.subcategory[i].categoryId=='147'){
              button.style.background ='rgb(255,149,0)'
              button.style.color ='white'
            }
            else if(this.subcategory[i].categoryId=='148'){
              button.style.background ='rgb(52,199,89)'
              button.style.color ='white'
            }
            else if(this.subcategory[i].categoryId=='149'){
              button.style.background ='rgb(0,199,190)'
              button.style.color ='white'
            }
            else if(this.subcategory[i].categoryId=='150'){
              button.style.background ='rgb(165, 137, 10)'
              button.style.color ='white'
            }
            else if(this.subcategory[i].categoryId=='151'){
              button.style.background ='rgb(50,173,230)'
              button.style.color ='white'
            }
            // console.log("main menu api:",res);
            this.mainMenu = res
    
            this.messenger.sendMenuCategory(this.mainMenu);
          },
          error: (err) => {
            console.log(err.message)
          }
        })
      console.log(this.subcategory[i].categoryId);
      break;

      }

    })
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  getSubCategoryId(subCat){
    this.food.getmainmenu(subCat).subscribe({
      next: (res) => {
        // console.log("main menu api:",res);
        this.mainMenu = res

        this.messenger.sendMenuCategory(this.mainMenu);
      },
      error: (err) => {
        alert(err.message)
      }
    })
  }
}
