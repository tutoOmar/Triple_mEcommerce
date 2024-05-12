import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.css'],
})
export class UploadProductComponent implements OnInit {
  /**
   *
   * @param serviceProducts
   */
  constructor(private serviceProducts: ProductsService) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      url_img: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
      liter: new FormControl(0, [Validators.required, Validators.min(0)]),
      state: new FormControl('', Validators.required),
      type: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  /** */
  productForm!: FormGroup;
  /**
   *
   */
  async onSubmit() {
    if (this.productForm.valid) {
      const addProductResponse = await this.serviceProducts.addProduct(
        this.productForm.value
      );
      console.log(addProductResponse);
      this.productForm.reset();
    } else {
      console.log('Invalid');
    }
  }
}
