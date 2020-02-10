import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import {
  EventsListComponent, ThumbnailComponent, EventService,
  EventsDetailsComponent, CreateEventComponent, EventRouteActivator,
  EventsListResolver, CreateSessionComponent, SessionListComponent, DurationPipe
} from './events/index';

import { NavBarComponent } from './nav/nav-bar.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './users/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './events/common/collapsible-well.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    ThumbnailComponent,
    NavBarComponent,
    EventsDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    { provide: 'canDeactiveCreateEvent', useValue: checkDirtyState },
    EventsListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm(
      'You have not seved this event, do you really want to leave?'
    );
  } else {
    return true;
  }
}
