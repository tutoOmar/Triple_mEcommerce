import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url='/api';

  constructor(private http:HttpClient) { }

  //Obtener todos los productos
  getProducts(){
    return this.http.get(this.url);
  }
  //Obtener un producto unicamente
  getProduct(id:string){
    return this.http.get(this.url+'/'+id);
  }
  //Obtener productos por tipo
  getProductType(tipo:string){
    console.log(this.url+'/tipo/'+tipo);
    return this.http.get(this.url+'/tipo/'+tipo);
  }


}
export interface Product{
  id?:string;
  nombre_p?:string;
  url_img?:string;
  description_p?:string;
  tipo?:string;
  dato_add?:string;
  precio?:string;
  stock?:string;
}


