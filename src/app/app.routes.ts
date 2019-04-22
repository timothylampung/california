import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ScheduleEventComponent} from './schedule-events/schedule-event.component';
import {CarDetailPage} from './dashboard/car-detail.page/car-detail.page';


export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'events', component: ScheduleEventComponent },
    { path: 'car/:vin', component: CarDetailPage },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
