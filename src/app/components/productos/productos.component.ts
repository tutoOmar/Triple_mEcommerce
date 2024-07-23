import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInterface } from 'src/app/models/product.interface';
import { Product } from 'src/app/service/products.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  ListarProductos!: ProductInterface[];

  constructor(
    // private ProduService: ProductsService
    private listProductsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarProductos('Morral');
    // this.listarProductos2('Pechera');
  }
  /**
   *
   * @param type
   */
  listarProductos(type: string) {
    this.listProductsService.getProducts().subscribe(
      (product) => {
        console.log(product);
        this.ListarProductos = <any>product;
      },
      (err) => console.log(err)
    );
  }
  /**
   *
   */
  goToProduct(productId: number) {
    this.router.navigate(['/productUnique', productId]);
  }
}
