import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSharedComponent } from './carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCardUniqueComponent } from './product-card-unique/product-card-unique.component';
@NgModule({
  declarations: [
    CarouselSharedComponent,
    ProductCardComponent,
    ProductCardUniqueComponent,
  ],
  imports: [CommonModule, CarouselModule],
  exports: [
    CarouselSharedComponent,
    ProductCardComponent,
    ProductCardUniqueComponent,
  ],
})
export class SharedModule {}
