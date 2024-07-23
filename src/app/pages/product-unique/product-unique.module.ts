import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductUniqueComponent } from './product-unique.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ProductUniqueComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: ProductUniqueComponent }]),
    SharedModule,
  ],
})
export class ProductUniqueModule {}
