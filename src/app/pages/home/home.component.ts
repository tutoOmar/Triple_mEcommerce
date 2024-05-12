import { Component, OnInit } from '@angular/core';
import { CarouselInterface } from 'src/app/models/carousel.iinterface';
import { ProductInterface } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: ProductInterface[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }

  carouselData: CarouselInterface[] = [
    {
      image: '../../../assets/images/slider/soldados1.webp',
      message: 'Siempre listos',
    },
    {
      image: '../../../assets/images/slider/soldados2.webp',
      message: 'Listo para librar tus batallas',
    },
    {
      image: '../../../assets/images/slider/soldados3.webp',
      message: 'Listo para defender tu patria',
    },
  ];
}
