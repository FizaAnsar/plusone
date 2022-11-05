import { Component, HostListener, OnInit } from '@angular/core';
import { ChangecolorService } from 'src/app/services/changecolor.service';
import { FoodsDataService } from 'src/app/services/foods-data.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private food: FoodsDataService, private messenger: MessengerService, private Color: ChangecolorService) { }

  ngOnInit(): void {
    this.receiveCategories()
    // this.loadChangeColor()
  }
  categories: any;
  subCategory: any;
  categoryId: any;

  receiveCategories() {

    this.food.getCategories().subscribe({
      next: (res) => {
        this.categories = res;

        for (let i = 0; i <= this.categories.length; i++) {
          this.categories[0].hasMenus = true;
          this.food.getsubCategory(this.categories[0].sectionId).subscribe({
            next: (res) => {
              this.subCategory = res;
              // console.log("id receive without clicking on button", this.subCategory);
              // this.Color.subCatArray(this.subCategory)
              // here we snd subcategory api to the service
              this.messenger.sendSubCategory(this.subCategory);
            },
            error: (err) => {
              console.log('error');
              console.log(err.message)
            }
          })
          break;
        }
      },
      error: (err) => {
        console.log(err.message)
      }
    })
  }
  // loadChangeColor() {
  //   var eles = document.getElementsByClassName('slide_item');
  //   console.log(eles);
  //   console.log(eles.length);
  //   console.log(eles[0]);
  // }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  changeColor(category: any) {
    this.categoryId = category
    // if(this.categories)

    console.log(this.categoryId)
    this.categories.forEach(element => {
      if (element.sectionId == category) {
        element.hasMenus = true;
        this.food.getsubCategory(category).subscribe({
          next: (res) => {
            this.subCategory = res;
            // console.log("subactegories api", this.subCategory);
            // this.Color.subCatArray(this.subCategory)
            // here we snd subcategory api to the service
            this.messenger.sendSubCategory(this.subCategory);
          },
          error: (err) => {
            console.log('error');
            console.log(err.message)
          }
        })
        console.log(this.categories)
      } else {
        element.hasMenus = false;
      }

    })
    // this.Color.changingColors(category)

  }

  // here we get category Id when we click on button and by this id subcategory api receive

  // getCategoryId(data: string) {
  //   console.log('sub category', data)
  //   this.food.getsubCategory(data).subscribe({
  //     next: (res) => {
  //       this.subCategory = res;
  //       console.log("subactegories api",this.subCategory);
  //       this.Color.subCatArray(this.subCategory)
  //       // here we snd subcategory api to the service
  //       this.messenger.sendSubCategory(this.subCategory);
  //     },
  //     error: (err) => {
  //       console.log('error');
  //       console.log(err.message)
  //     }
  //   })

  // }


}