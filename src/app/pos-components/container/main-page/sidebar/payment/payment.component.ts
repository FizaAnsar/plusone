import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
arrays(){
  // var feed = {created_at: "Fiza", entry_id: 19, field1: "SE", field2: "ielts", field3: "Mujhy neend aa rhi h"};

  // var data = [];
  // data.push(feed);
  
  // console.log(data,"feed");
  
  // var my_json = {created_at: "Ranya", entry_id: '20Nov', field1: "SE", field2: "Makeup", field3: "chay peeny chly"};
  
  
  // for(var i in my_json) {
  //     data.push(my_json[i]);
  // }
  
  // console.log(data,"myjson");
  var Obj = {             
    arrayOne: [],
    arrayTwo: []
};
  
// Array to be inserted
var arraynew = ['Geeks', 'for', 'Geeks'];
  
// Push an array to object
Obj.arrayOne.push(arraynew);     
  
console.log(Obj.arrayOne);
  
}
  

}
