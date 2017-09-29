import { Injectable } from '@angular/core';
import { Dish } from './menu/dish';

@Injectable()
export class DataPersistanceService {
  dishes: Dish[]
}
