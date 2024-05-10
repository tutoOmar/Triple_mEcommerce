import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselSharedComponent implements OnInit {
  @Input() imagesUrls: string[] = [];
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg',
    };
    this.slides[1] = {
      src: 'https://www.shutterstock.com/shutterstock/photos/2150378505/display_1500/stock-vector-multi-layers-color-texture-d-papercut-layers-in-gradient-vector-banner-carving-art-cover-layout-2150378505.jpg',
    };
    this.slides[2] = {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSk3Dem1wDIu7aSVnnqj1CAo30XSHte2amDlMhpTWA7qd2PNJX51w50VltfSZv_R1A7Kohttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSk3Dem1wDIu7aSVnnqj1CAo30XSHte2amDlMhpTWA7qd2PNJX51w50VltfSZv_R1A7Ko',
    };
  }
  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
