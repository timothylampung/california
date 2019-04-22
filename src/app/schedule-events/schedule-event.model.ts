export interface ScheduleEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
}

export interface ScheduleEventData {
    data: ScheduleEvent[];
}
