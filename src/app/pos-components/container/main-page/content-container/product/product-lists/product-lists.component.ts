import { Component, Input, OnInit } from '@angular/core';

import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {
  @Input() ProductItem: any;
  constructor(private messenger: MessengerService) { }

  ngOnInit(): void {
  }
  MenuItemClicked(data: any) {

    this.messenger.sendOrderDetail(data)
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
