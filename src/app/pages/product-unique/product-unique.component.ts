import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { errorProduct } from 'src/app/models/error-product';
import { ProductInterface } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-unique',
  templateUrl: './product-unique.component.html',
  styleUrls: ['./product-unique.component.css'],
})
export class ProductUniqueComponent implements OnInit {
  product$!: Observable<ProductInterface>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        if (id) {
          return this.productService.getProduct(id);
        }
        return of(errorProduct);
      }),
      tap((res) => console.log(res))
    );
  }
}
