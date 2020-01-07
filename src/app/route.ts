import { Routes } from "@angular/router";
import { Error404Component } from './errors/404.component';

import {
  EventsListComponent, EventsDetailsComponent, CreateEventComponent,
  EventRouteActivator, EventsListResolver
} from './events/index';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactiveCreateEvent']
  },

  {
    path: 'events',
    component: EventsListComponent,
    resolve: {
      events: EventsListResolver
    }
  },

  {
    path: 'events/:id',
    component: EventsDetailsComponent,
    canActivate: [EventRouteActivator]
  },

  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Error404Component },

  {
    path: 'user',
    loadChildren: './users/user.module#UserModule'
  }
]
