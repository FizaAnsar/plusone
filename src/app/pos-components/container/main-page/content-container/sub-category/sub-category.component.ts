import { Component, OnInit } from '@angular/core';
import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  constructor(private messenger:MessengerService) { }
  subcats:any;
  ngOnInit(): void {
    this.messenger.receiveSubCategory().subscribe(subcatApi =>{
      // console.log("subCategory successfully receive in sub category", subcatApi);
      this.subcats= subcatApi;
    })
  }


}
