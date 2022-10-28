import { Component, Input, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ChangecolorService } from 'src/app/services/changecolor.service';
import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-categories-lists',
  templateUrl: './categories-lists.component.html',
  styleUrls: ['./categories-lists.component.css']
})
export class CategoriesListsComponent implements OnInit {
 @Input() categoryList:any;
 subCategory:any;
  constructor(private food:FoodsDataService, private messenger:MessengerService, private Color:ChangecolorService) { }
  ngOnInit(): void {
  console.log("Categories Lists", this.categoryList)
  // this.categoryList.getCategories();

  }
  // categoryId(data:string){
  //   console.log('category_lists', data)
  // }
  // changeColor(category: any) {
  //   this.categoryId = category
  //   console.log(this.categoryId)
  //   this.categories.forEach(element=>{
  //     if(element.sectionId == category){
  //      element.hasMenus = true;
  //       console.log(this.categories)
  //     }else{
  //       element.hasMenus = false;
  //     }

  //   })
  //   // this.Color.changingColors(category)
   
  // }

  // here we get category Id when we click on button and by this id subcategory api receive
categories:any
  getCategoryId(data: string) {
    console.log('sub category', data)
    this.food.getsubCategory(data).subscribe({
      next: (res) => {
        this.subCategory = res;
        console.log("subactegories api",this.subCategory);
        // this.Color.subCatArray(this.subCategory)
        // here we snd subcategory api to the service
       this.categories= this.Color.receiveCategories()
        this.messenger.sendSubCategory(this.subCategory);
        if(this.subCategory[0].sectionId== this.categories[0].sectionId){
          console.log('hello')
        }
      },
      error: (err) => {
        console.log('error');
        console.log(err.message)
      }
    })
    
  }
}
