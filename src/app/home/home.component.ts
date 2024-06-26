import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}
