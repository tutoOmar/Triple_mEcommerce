import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInterface } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() listProducts: ProductInterface[] = [];
  constructor(private router: Router) {}
  /**
   *
   */
  goToProduct(productId: string) {
    this.router.navigate(['/productUnique', productId]);
  }
  /**
   *
   */
  ngOnInit(): void {}
}
