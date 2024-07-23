import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-card-unique',
  templateUrl: './product-card-unique.component.html',
  styleUrls: ['./product-card-unique.component.css'],
})
export class ProductCardUniqueComponent implements OnInit {
  @Input() listProducts: ProductInterface[] = [];
  mainImage!: string;
  productImages!: string[];
  /**
   *
   */
  product!: ProductInterface;
  ngOnInit() {
    if (this.listProducts && this.listProducts.length > 0) {
      this.mainImage = this.listProducts[0].url_img;
      this.product = this.listProducts[0];
      this.productImages = this.product.url_images;
      this.productImages.push(this.mainImage);

      // this.productImages = this.listProducts[0].url_images;
    }
  }
  /**
   *
   * @param image
   */
  changeMainImage(image: string) {
    this.mainImage = image;
  }
  /**
   *
   */
  goToBuy() {}
}
