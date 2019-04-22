import {Component, OnInit} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {Car, CarData} from './car.model';
import {CarService} from '../service/car.service';
import {map, retry, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    cols: any[];
    cars$: Observable<Car[]>;
    car: Car;
    filter = '';

    constructor(private carService: CarService,
                private router: Router) {
        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }

    view() {
        this.router.navigate(['/car', this.car.vin]);
    }

    ngOnInit(): void {
        this.search();
    }

    search() {
        if (this.filter == undefined) {
            this.filter = '';
        }
        console.log(this.filter)
        this.cars$ = this.carService.findCars()
            .pipe(retry(3),
                map((n: CarData) =>
                    n.data.filter(data =>
                        ((data.brand.toUpperCase().includes(this.filter.toUpperCase())) ||
                            (data.color.toUpperCase().includes(this.filter.toUpperCase()) ||
                                (data.vin.toUpperCase().includes(this.filter.toUpperCase())))
                        )
                    )));
    }

}



