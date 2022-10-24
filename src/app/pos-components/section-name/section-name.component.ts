import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-name',
  templateUrl: './section-name.component.html',
  styleUrls: ['./section-name.component.css']
})
export class SectionNameComponent implements OnInit {
  sectionName: string ='Categories'
  constructor() { }

  ngOnInit(): void {
  }

}
