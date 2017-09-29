import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

@Injectable()
export class DishService {

  private _dishesUrl = './api/dishes.json'

  constructor(private _http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this._http.get<Dish[]>(this._dishesUrl)
      .do(data => console.log('Dishes:' + JSON.stringify(data)))
      .catch(this.handleError)
  }

  getDish(id: number): Observable<Dish> {
    return this.getDishes()
      .map((dishes: Dish[]) => dishes.find(d => d.id == id))
  }

  private handleError(err: HttpErrorResponse) {
    //Manage the error!!
    let errMessage = err.status
    console.log(errMessage)
    return Observable.throw("Recevived error:" + errMessage)
  }
}
