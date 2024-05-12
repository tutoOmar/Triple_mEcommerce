import { Component, Input, OnInit } from '@angular/core';
import { CarouselInterface } from 'src/app/models/carousel.iinterface';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselSharedComponent implements OnInit {
  @Input() carouselData: CarouselInterface[] = [];
  slides: CarouselInterface[] = [];

  ngOnInit(): void {
    this.slides = this.carouselData;
  }
}
