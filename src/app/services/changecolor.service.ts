import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangecolorService {
  // This will get Categories Array
  categories = new Subject()
  constructor() { }
  getsections(Catarray){
    this.categories.next(Catarray)
    console.log(Catarray,"chagne color")
    for(let i = 0; i <= Catarray.length; i++){
      if (Catarray[0].sectionId == 24) {
        const btn = (document.getElementsByClassName('item')[0] as HTMLElement)
        console.log(btn,"btn")
        btn.style.borderTop = "10px solid rgb(255,69,58)"
      }
    
  }
  }
}
