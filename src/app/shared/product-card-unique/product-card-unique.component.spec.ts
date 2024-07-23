import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardUniqueComponent } from './product-card-unique.component';

describe('ProductCardUniqueComponent', () => {
  let component: ProductCardUniqueComponent;
  let fixture: ComponentFixture<ProductCardUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardUniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
