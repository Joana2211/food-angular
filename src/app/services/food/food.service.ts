import { Injectable } from '@angular/core';
import { Food } from '../../models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAll(): Food[] {
    return [
      {
        name: 'Vegetables',
        price: 6,
        favorite: false,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image1.jpg',
      },
      {
        name: 'Vegetables',
        price: 6,
        favorite: false,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image2.jpg',
      },
      {
        name: 'Vegetables',
        price: 6,
        favorite: true,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image3.jpg',
      },
      {
        name: 'Vegetables',
        price: 6,
        favorite: true,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image4.webp',
      },
      {
        name: 'Vegetables',
        price: 6,
        favorite: false,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image5.webp',
      },
      {
        name: 'Vegetables',
        price: 6,
        favorite: true,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image6.webp',
      },
    ];
  }
}
