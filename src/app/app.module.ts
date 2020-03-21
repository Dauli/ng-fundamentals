import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToastrModule } from "ngx-toastr";

import {
  EventsListComponent, ThumbnailComponent, EventService,
  EventsDetailsComponent, CreateEventComponent, EventRouteActivator,
  EventsListResolver, CreateSessionComponent, SessionListComponent,
  DurationPipe, UpvoteComponent, VoterService
} from './events/index';

import { NavBarComponent } from './nav/nav-bar.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './users/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './events/common/collapsible-well.component';
import { JQ_TOKEN } from "./events/common/jquery.service";
import { SimpleModalComponent } from './events/common/simple-modal.component';
import { ModalTriggerDirective } from './events/common/modal-trigger.directive';

let jquery = window['$'];

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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    ToastrModule.forRoot()
  ],
  providers: [
    EventService,
    EventRouteActivator,
    { provide: 'canDeactiveCreateEvent', useValue: checkDirtyState },
    EventsListResolver,
    AuthService,
    { provide: JQ_TOKEN, useValue: jquery },
    VoterService
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
