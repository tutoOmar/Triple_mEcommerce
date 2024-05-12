import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadProductComponent } from './upload-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UploadProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: UploadProductComponent }]),
  ],
})
export class UploadProductModule {}
