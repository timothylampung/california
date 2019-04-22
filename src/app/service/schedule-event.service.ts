import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ScheduleEventData} from '../schedule-events/schedule-event.model';


@Injectable()
export class ScheduleEventService {
    constructor(private http: HttpClient) {
    }

    findScheduleEvents(): Observable<ScheduleEventData> {
        return this.http
            .get<ScheduleEventData>('/assets/demo/data/scheduleevents.json');
    }
}
