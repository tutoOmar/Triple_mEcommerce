import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadProductComponent } from './upload-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [UploadProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    RouterModule.forChild([{ path: '', component: UploadProductComponent }]),
  ],
})
export class UploadProductModule {}
