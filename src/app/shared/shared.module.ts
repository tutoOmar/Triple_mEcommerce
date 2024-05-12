import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSharedComponent } from './carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { ProductCardComponent } from './product-card/product-card.component';
@NgModule({
  declarations: [CarouselSharedComponent, ProductCardComponent],
  imports: [CommonModule, CarouselModule],
  exports: [CarouselSharedComponent, ProductCardComponent],
})
export class SharedModule {}
