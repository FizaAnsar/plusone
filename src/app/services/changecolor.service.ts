import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangecolorService {
  // This will get Categories Array
  constructor() { }

  categories = new Subject()
  categoryArray: any;
  getsections(Catarray) {
    this.categories.next(Catarray)

    this.categoryArray = Catarray
    console.log(Catarray,"categories")
  }

  colorSubject = new Subject()
  categoryId:any;
  changingColors(sectionId) {
    this.colorSubject.next(sectionId)
    this.categoryId = sectionId
    // console.log('cahnging colors category id:', sectionId)
    // console.log(this.categoryArray,"in category id array")
    // for (let i = 0; i <= this.categoryArray.length; i++) {
    //   if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[0] as HTMLElement)
    //     btn.style.background = "rgb(255,69,58)"
    //     btn.style.color = "white"
    //     break;

    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[1] as HTMLElement)
    //     btn.style.background = "rgb(255,149,0)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[2] as HTMLElement)
    //     btn.style.background = "rgb(52,199,89)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[3] as HTMLElement)
    //     btn.style.background = "rgb(0,199,190)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[4] as HTMLElement)
    //     btn.style.background = "rgb(48,176,199)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[5] as HTMLElement)
    //     btn.style.background = "rgb(50,173,230)"
    //     btn.style.color = "white"
    //     break;

    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[6] as HTMLElement)
    //     btn.style.background = "rgb(255,204,0)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[7] as HTMLElement)
    //     btn.style.background = "rgb(0,122,255)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[8] as HTMLElement)
    //     btn.style.background = "rgb(88,86,214)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[9] as HTMLElement)
    //     btn.style.background = "rgb(175,82,222)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[10] as HTMLElement)
    //     btn.style.background = "rgb(162,132,94)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[11] as HTMLElement)
    //     btn.style.background = "rgb(7, 135, 118)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[12] as HTMLElement)
    //     btn.style.background = "rgb(233, 150, 122)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[13] as HTMLElement)
    //     btn.style.background = "rgb(240, 128, 128)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[14] as HTMLElement)
    //     btn.style.background = "rgb(255, 0, 255)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[15] as HTMLElement)
    //     btn.style.background = "rgb(218, 247, 166)"
    //     btn.style.color = "white"
    //     break;
    //   }
    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[16] as HTMLElement)
    //     btn.style.background = "rgb(87, 0, 128)"
    //     btn.style.color = "white"
    //     break;
    //   }

    //   else if (this.categoryArray[i].sectionId == sectionId) {
    //     console.log(sectionId, "logics");
    //     const btn = (document.getElementsByClassName('item')[17] as HTMLElement)
    //     btn.style.background = "rgb(128, 0, 0)"
    //     btn.style.color = "white"
    //     break;

    //   }
    //   break;
    // }
    if(this.categoryId == this.subcatId){
      console.log("same")
    }

  }

  subCatSubject = new Subject()
  subCategoryArray:any
  subcatId:any;
  subCatArray(subCatArray){
    this.subCatSubject.next(subCatArray)
    this.subCategoryArray= subCatArray
    for(let i=0 ;i<=subCatArray.length; i++){
      console.log(subCatArray[i].sectionId,'subcatid')
      this.subcatId=subCatArray[i].sectionId;
    }
    console.log(subCatArray,"subcategories")
  }

  changeColorOfSubCat(){
   
    if(this.categoryId == this.subcatId){
      console.log("same")
    }
   
  }
}
