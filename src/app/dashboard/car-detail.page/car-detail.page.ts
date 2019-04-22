import {Component, OnInit} from '@angular/core';
import {CarService} from '../../service/car.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Car} from '../car.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-car-detail',
    templateUrl: './car-detail.page.html',
    styleUrls: ['./car-detail.page.css']
})
export class CarDetailPage implements OnInit {

    car$: Observable<Car>;
    carForm: FormGroup;

    constructor(private carService: CarService,
                private fb: FormBuilder,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {

        this.carForm = this.fb.group({
            vin: [''],
            brand: [''],
            year: [0],
            color: ['']
        });

        this.route.params
            .subscribe((data: { vin: string }) => {
                this.car$ = this.carService
                    .findCarsByVin(data.vin);
            });


        this.car$.subscribe(data => {
            if (data) {
                this.carForm.patchValue(data);
            }
        });

    }
}



