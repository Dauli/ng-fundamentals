import { Routes } from "@angular/router";
import { EventsListComponent } from './events/events-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventsDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Error404Component }
]
