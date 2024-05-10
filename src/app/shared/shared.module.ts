import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSharedComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [CarouselSharedComponent],
  imports: [CommonModule],
  exports: [CarouselSharedComponent],
})
export class SharedModule {}
