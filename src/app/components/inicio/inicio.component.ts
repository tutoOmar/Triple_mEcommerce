import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Product, ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  ListarProductos!: Product[];
  constructor(
    private _CargaScripts: CargarScriptsService,
    private ProduService: ProductsService
  ) {}

  ngOnInit(): void {
    this.listarProductos();
  }
  listarProductos() {
    console.log('holiwi');
    this.ProduService.getProducts().subscribe(
      (res) => {
        console.log(res);
        this.ListarProductos = <any>res;
      },
      (err) => console.log(err)
    );
  }
}
