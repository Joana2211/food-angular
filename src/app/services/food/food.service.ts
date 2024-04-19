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
        imgUrl: '/assets/images/foods/image11.avif',
      },
      {
        name: 'Vegetables',
        price: 6,
        favorite: false,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image22.avif',
      },
      {
        name: 'Vegetables',
        price: 6,
        favorite: true,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image33.avif',
      },
      {
        name: 'Vegetables',
        price: 6,
        favorite: true,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image44.jpg',
      },
      {
        name: 'Vegetables',
        price: 6,
        favorite: false,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image55.avif',
      },
      {
        name: 'Vegetables',
        price: 6,
        favorite: true,
        origins: ['Tirana', 'Shqiperi'],
        cookTime: '10',
        stars: 1,
        imgUrl: '/assets/images/foods/image66.avif',
      },
    ];
  }
}
