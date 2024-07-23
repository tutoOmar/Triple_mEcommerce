import { Component, Input, OnInit } from '@angular/core';
import { errorProduct } from 'src/app/models/error-product';
import { ProductInterface } from 'src/app/models/product.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  @Input() product$: ProductInterface = errorProduct;
  constructor() {}

  ngOnInit(): void {}
}
