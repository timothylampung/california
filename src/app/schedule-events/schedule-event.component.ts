import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ScheduleEventData} from './schedule-event.model';
import {ScheduleEventService} from '../service/schedule-event.service';

@Component({
    selector: 'app-schedule-event',
    templateUrl: './schedule-event.component.html',
    styleUrls: ['./schedule-event.component.css']
})
export class ScheduleEventComponent implements OnInit {

    cols: any[];
    scheduleEvents$: Observable<ScheduleEventData>;

    constructor(private scheduleEventService: ScheduleEventService) {
        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'title', header: 'TITLE'},
            {field: 'start', header: 'START'},
            {field: 'end', header: 'END'},
        ];
    }


    ngOnInit(): void {
        this.scheduleEvents$ = this.scheduleEventService.findScheduleEvents();
        this.scheduleEvents$.subscribe(data => {
            console.log(data);
        });

    }

}
