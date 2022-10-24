import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListsComponent } from './categories-lists.component';

describe('CategoriesListsComponent', () => {
  let component: CategoriesListsComponent;
  let fixture: ComponentFixture<CategoriesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
