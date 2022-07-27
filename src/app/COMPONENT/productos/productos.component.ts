import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Product, ProductsService } from 'src/app/SERVICE/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ListarProductos!: Product[];
  ListarProductos2!: Product[];

  constructor(private _CargaScripts:CargarScriptsService, private ProduService:ProductsService) {}

  ngOnInit(): void {
    this.listarProductos("Morral");
    this.listarProductos2("Pechera")
  }
  listarProductos(type:string){
    this.ProduService.getProductType(type).subscribe(
      res=>{
        console.log(res);
        this.ListarProductos =<any>res;
      },
      err=> console.log(err)
    )
  }
  listarProductos2(type:string){
    this.ProduService.getProductType(type).subscribe(
      res=>{
        console.log(res);
        this.ListarProductos2 =<any>res;
      },
      err=> console.log(err)
    )
  }
}
