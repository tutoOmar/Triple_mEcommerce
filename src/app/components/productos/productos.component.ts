import { Component, OnInit } from '@angular/core';
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
    private listProductsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.listarProductos('Morral');
    // this.listarProductos2('Pechera');
  }
  listarProductos(type: string) {
    this.listProductsService.getProducts().subscribe(
      (product) => {
        console.log(product);
        this.ListarProductos = <any>product;
      },
      (err) => console.log(err)
    );
  }
  // listarProductos2(type: string) {
  //   this.ProduService.getProductType(type).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.ListarProductos2 = <any>res;
  //     },
  //     (err) => console.log(err)
  //   );
  // }
}
