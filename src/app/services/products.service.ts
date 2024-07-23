import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  docData,
} from '@angular/fire/firestore';
import { ProductInterface } from '../models/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private fireStore: Firestore) {}
  /**
   *
   * @param product
   * @returns
   */
  addProduct(product: ProductInterface) {
    const productRef = collection(this.fireStore, 'product');
    return addDoc(productRef, product);
  }
  /**
   *
   * @returns
   */
  getProducts(): Observable<ProductInterface[]> {
    const productsRef = collection(this.fireStore, 'product');
    return collectionData(productsRef, { idField: 'id' }) as Observable<
      ProductInterface[]
    >;
  }
  /**
   *
   */
  getProduct(id: string): Observable<ProductInterface> {
    const productRef = doc(this.fireStore, `product/${id}`);
    return docData(productRef, {
      idField: 'id',
    }) as Observable<ProductInterface>;
  }
}
