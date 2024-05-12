import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';
import { ProductInterface } from '../models/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private fireStore: Firestore) {}

  addProduct(product: ProductInterface) {
    const productRef = collection(this.fireStore, 'product');
    return addDoc(productRef, product);
  }
  getProducts(): Observable<ProductInterface[]> {
    const productRef = collection(this.fireStore, 'product');
    return collectionData(productRef, { idField: 'id' }) as Observable<
      ProductInterface[]
    >;
  }
}
