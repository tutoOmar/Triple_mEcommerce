import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUniqueComponent } from './product-unique.component';

describe('ProductUniqueComponent', () => {
  let component: ProductUniqueComponent;
  let fixture: ComponentFixture<ProductUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
