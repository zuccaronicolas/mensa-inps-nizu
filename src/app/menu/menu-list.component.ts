import { Component, OnInit } from "@angular/core";
import { Dish } from "./dish";
import { DishService } from "./dish.service";
import { DataPersistanceService } from "../data-persistance.service";

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})

export class MenuListComponent implements OnInit {
    /* Proprietà della classe */
    dietMessage: string;
    errorMessage: string;
    panelHeading = 'Menù della giornata'
    imageWidth = 100
    _totPrice: number = 0
    _numDish: number = 0

    get dishes() {
        return this._data.dishes
    }
    set dishes(dishes: Dish[]) {
        this._data.dishes = dishes
    }

    constructor(private _dishService: DishService,
        private _data: DataPersistanceService) { }

    get numDish(): number {
        this._numDish = 0
        // Lamda function ( => )
        this.dishes.forEach(dish => this._numDish += dish.counter)
        return this._numDish
    }

    get totPrice(): number {
        this._totPrice = 0
        this.dishes.forEach(dish => this._totPrice += (dish.price * dish.counter))
        return this._totPrice
    }

    set totPrice(value: number) {
        this._totPrice = value
    }

    incCounter(d: Dish) {
        d.counter = +d.counter + 1
    }

    decCounter(d: Dish) {
        if (d.counter > 0)
            d.counter = +d.counter - 1
    }

    reset() {
        this.dishes.forEach(x => x.counter = 0)
    }

    doOrder() {
        let totPrice = 0
        for (let dish of this.dishes) {
            if (dish.counter > 0) {

                console.log(`Hai ordinato ${dish.counter} ${(dish.counter > 1) ? 'porzioni' : 'porzione'} di ${dish.name}`)
            }
        }
        this.dishes.forEach(dish => totPrice += (dish.price * dish.counter))
        console.log(`Hai speso un totale di ${totPrice} euro`)
    }

    ngOnInit(): void {
        console.log('OnInit')
        if (!this.dishes) {
            this._dishService.getDishes()
                .subscribe(
                dishes => this.dishes = dishes,
                error => this.errorMessage = <any>error
                )
        }
    }

    onNotifyDiet(message: string) {
        this.dietMessage = message
    }
}