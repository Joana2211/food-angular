import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAll(): String[] {
    return [
      '/assets/images/foods/image1.jpg',
      '/assets/images/foods/image2.jpg',
      '/assets/images/foods/image3.jpg',
      '/assets/images/foods/image4.webp',
      '/assets/images/foods/image5.webp',
      '/assets/images/foods/image6.webp',
      '/assets/images/foods/image7.jpg',
    ];
  }
}
