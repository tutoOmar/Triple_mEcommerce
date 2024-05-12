import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() listProducts: ProductInterface[] = [];
  constructor() {}

  ngOnInit(): void {}
}
