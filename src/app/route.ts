import { Routes } from "@angular/router";
import { EventsListComponent } from './events/events-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactiveCreateEvent']
  },
  { path: 'events', component: EventsListComponent },
  {
    path: 'events/:id',
    component: EventsDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Error404Component }
]
