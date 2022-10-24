import { Component, OnInit } from '@angular/core';
import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private messenger: MessengerService) { }
  mainMenu: any;
  ngOnInit(): void {
    this.messenger.receiveMenuMain().subscribe(menuApi => {
     
      this.mainMenu = menuApi;
     
    
    })
  }
  

}

