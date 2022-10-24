import { Component, Input, OnInit } from '@angular/core';
import { FoodsDataService } from 'src/app/services/foods-data.service';

@Component({
  selector: 'app-categories-lists',
  templateUrl: './categories-lists.component.html',
  styleUrls: ['./categories-lists.component.css']
})
export class CategoriesListsComponent implements OnInit {
 @Input() categoryList:any;
  constructor(private category_item:FoodsDataService) { }
  ngOnInit(): void {
  console.log("Categories Lists", this.categoryList)
  // this.categoryList.getCategories();

  }
  // categoryId(data:string){
  //   console.log('category_lists', data)
  // }

}
