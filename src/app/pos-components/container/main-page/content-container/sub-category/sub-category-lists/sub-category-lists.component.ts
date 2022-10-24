import { Component, Input, OnInit } from '@angular/core';
import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-sub-category-lists',
  templateUrl: './sub-category-lists.component.html',
  styleUrls: ['./sub-category-lists.component.css']
})
export class SubCategoryListsComponent implements OnInit {
 @Input() subcategory:any;
  constructor(private food:FoodsDataService, private messenger:MessengerService) { }

  ngOnInit(): void {
    
  }
  mainMenu:any;
  getSubCategory(data:any){
  
  //  console.log("subCategoryId from sub category list",data);
    this.food.getmainmenu(data).subscribe({
      next:(res)=>{
        // console.log("main menu api:",res);
       this.mainMenu=res
        this.messenger.sendMenuCategory(this.mainMenu);
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }
}
