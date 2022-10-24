import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryListsComponent } from './sub-category-lists.component';

describe('SubCategoryListsComponent', () => {
  let component: SubCategoryListsComponent;
  let fixture: ComponentFixture<SubCategoryListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoryListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
