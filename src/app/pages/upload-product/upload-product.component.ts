import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.css'],
})
export class UploadProductComponent implements OnInit {
  /**
   *
   */
  selectedFile: File | null = null;
  /**
   *
   * @param serviceProducts
   */
  constructor(
    private serviceProducts: ProductsService,
    private fireStorage: AngularFireStorage
  ) {
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
  async onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      const pathImg = `product/${this.selectedFile.name}`;
      const uploadTask = await this.fireStorage.upload(
        pathImg,
        this.selectedFile
      );
      const url = await uploadTask.ref.getDownloadURL();
      console.log(url);
    }
  }
  /**
   *
   */
  async onSubmit() {
    console.log('Aqui llego');
    if (this.productForm.valid) {
      if (this.selectedFile) {
        const pathImg = `product/${this.selectedFile.name}`;
        const uploadTask = await this.fireStorage.upload(
          pathImg,
          this.selectedFile
        );
        const url = await uploadTask.ref.getDownloadURL();
        console.log(url);
        // const addProductResponse = await this.serviceProducts.addProduct(
        //   this.productForm.value
        // );
        // console.log(addProductResponse);
        // this.productForm.reset();
      }
    } else {
      console.log('Invalid');
    }
  }
}
