import { Component, OnInit } from '@angular/core';
import { ChangecolorService } from 'src/app/services/changecolor.service';
import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private food: FoodsDataService, private messenger: MessengerService, private Color: ChangecolorService) { }

  ngOnInit(): void {
    this.receiveCategories()
  //  const btn= (document.getElementsByClassName('.item') as HTMLElement)

    // var script = document.getElementsByClassName('.item') as HTMLElementEventMap
    // console.log(script)
   
  
  

  }
  categories: any;
  subCategory: any;
  categoryId: any;

  receiveCategories() {
   
    this.food.getCategories().subscribe({
      next: (res) => {
        // console.log("categories",res)
        this.categories = res;
        // this.Color.getsections(res)
        for(let i = 0; i <= this.categories.length; i++){
          if (this.categories[0].sectionId == 24) {
            for(let i= 0; i<=this.categories.length; i++){
              // const item = (document.getElementsByClassName('.item') as HTMLElement)
              // console.log(item,"buttons")
              // console.log(this.categories,"in ")
              // item.style.borderTop="10px solid red"
            }
           

          }
        }

      },
      error: (err) => {
        console.log(err.message)

      }
    })
  }
  clicked:boolean= false;
  changeColor(category: any) {
    this.categoryId = category
     this.clicked = false;
    // console.log(category)
    console.log(this.categories)

    // for (let i = 0; i <= this.categories.length; i++) {
    //   if (category == this.categories[0].sectionId) {
    //     console.log(category)
    //     const btn = (document.getElementsByClassName('item')[0] as HTMLElement)
    //     btn.style.background = "rgb(255,69,58)"
    //     btn.style.color = "white"
       
    //     console.log(btn)
    //     this.clicked = true;
    //     break;
    //   }
    //   if (category == this.categories[1].sectionId) {
    //     console.log(category)
    //     const btn = (document.getElementsByClassName('item')[1] as HTMLElement)
    //     btn.style.background = "rgb(255,149,0)"
    //     btn.style.color = "white"
      
    //     console.log(btn)
    //     this.clicked = true;
    //     break;
    //   }
    //   if (category == this.categories[2].sectionId) {
    //     console.log(category)
    //     const btn = (document.getElementsByClassName('item')[2] as HTMLElement)
    //     btn.style.background = "rgb(52, 199, 89)"
    //     btn.style.color = "white"
       
    //     console.log(btn)
    //     this.clicked = true;
    //     break;
    //   }
    //   if (category == this.categories[3].sectionId) {
    //     console.log(category)
    //     const btn = (document.getElementsByClassName('item')[3] as HTMLElement)
    //     btn.style.background = "rgb(0, 199, 190)"
    //     btn.style.color = "white"
       
    //     console.log(btn)
    //     this.clicked = true;
    //     break;
    //   }
    //   if (category == this.categories[4].sectionId) {
    //     console.log(category)
    //     const btn = (document.getElementsByClassName('item')[4] as HTMLElement)
    //     btn.style.background = "rgb(48, 176, 199)"
    //     btn.style.color = "white"
        
    //     console.log(btn)
    //     this.clicked = true;
    //     break;
    //   }
      // if (category == this.categories[5].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[5] as HTMLElement)
      //   btn.style.background = "rgb(48,176,99)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(48,176,99)"
      //   console.log(btn)
      //   this.clicked = true;
      //   break;
      // }
      // if (category == this.categories[6].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[6] as HTMLElement)
      //   btn.style.background = "rgb(50,173,230)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(50,173,230)"
      //   console.log(btn)
      //   this.clicked = true;
      //   break;
      // }
      // if (category == this.categories[7].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[7] as HTMLElement)
      //   btn.style.background = "rgb(0,122,255)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(0,122,255)"
      //   console.log(btn)
      //   this.clicked = true;
      //   break;
      // }
      // if (category == this.categories[8].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[8] as HTMLElement)
      //   btn.style.background = "rgb(88,86,214)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(88,86,214)"
      //   console.log(btn)
      //   this.clicked = true;
      //   break;
      // }
      // if (category == this.categories[9].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[9] as HTMLElement)
      //   btn.style.background = "rgb(175,82,222)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(175,82,222)"
      //   console.log(btn)
      //   this.clicked = true;
      //   break;
      // }
      // if (category == this.categories[10].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[10] as HTMLElement)
      //   btn.style.background = "rgb(255,45,85)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(255,45,85)"
      //   this.clicked = true;
      //   console.log(btn)
      //   break;
      // }
      // if (category == this.categories[11].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[11] as HTMLElement)
      //   btn.style.background = "rgb(162,132,94)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(162,132,94)"
      //   console.log(btn)
      //   this.clicked = true;
      //   break;
      // }
      // if (category == this.categories[12].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[12] as HTMLElement)
      //   btn.style.background = "rgb(11,117,112)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(11,117,112)"
      //   console.log(btn)
      //   break;
      // }
      // if (category == this.categories[13].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[13] as HTMLElement)
      //   btn.style.background = "rgb(54,52,163)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(54,52,163)"
      //   console.log(btn)
      //   this.clicked = true;
      //   break;
      // }
      // if (category == this.categories[14].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[14] as HTMLElement)
      //   btn.style.background = "rgb(0,64,221)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(0,64,221)"
      //   console.log(btn)
      //   this.clicked = true;
      //   break;
      // }
      // if (category == this.categories[15].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[15] as HTMLElement)
      //   btn.style.background = "rgb(125,122,215)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(125,122,215)"
      //   console.log(btn)
      //   this.clicked = true;
      //   break;
      // }
      // if (category == this.categories[16].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[16] as HTMLElement)
      //   btn.style.background = "rgb(255,69,58)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(255,69,58)"
      //   console.log(btn)
      //   this.clicked = true;
      //   break;
      // }
      // if (category == this.categories[17].sectionId) {
      //   console.log(category)
      //   const btn = (document.getElementsByClassName('item')[17] as HTMLElement)
      //   btn.style.background = "rgb(205,69,8)"
      //   btn.style.color = "white"
      //   btn.style.borderTop = "10px solid rgb(205,69,8)"
      //   console.log(btn)
        
      //   break;
      // }
    //   break;

    // }
    // if(category == this.categories.sectionId){
    //   console.log(this.categories.sectionId,"hello")
    // }
    // console.log(category.sectionName)
    // const items = document.getElementsByClassName(
    //   'item',
    // ) as HTMLCollectionOf<HTMLElement>;
    // const arr = Array.from(items);
    // arr.forEach(item=>{
    //   console.log(item.attributes[2].nodeValue)
    // })
    // for(let i = 0; i<= items.length;i++){
    // console.log("button Elements",items[i])
    // .attributes[2].nodeValue

    // console.log(items[i].attributes[2].nodeValue)
    // let item : NodeListOf<Element> = document.getElementsByClassName("item");
    // let item = (document.getElementsByClassName('item')[i] as HTMLElement);
    // console.log(item);
    // if(item[i].value == category.sectionId){
    //   console.log("items",item[i].value)
    //   switch(category.sectionName){
    //     case "Pizza":
    //       console.log('color red')
    //         item.style.background = 'red'
    //   }
    // }

    // }
  }

  // here we get category Id when we click on button and by this id subcategory api receive

  getCategoryId(data: string) {
    console.log('sub category', data)
    this.food.getsubCategory(data).subscribe({
      next: (res) => {
        this.subCategory = res;
        // console.log("subactegories api",this.subCategory);
        // here we snd subcategory api to the service
        this.messenger.sendSubCategory(this.subCategory);
      },
      error: (err) => {
        console.log('error');
        console.log(err.message)
      }
    })
  }
}
