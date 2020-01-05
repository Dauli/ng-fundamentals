import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { ThumbnailComponent } from './events/thumbnail/thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './events/common/toastr.service';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    ThumbnailComponent,
    NavBarComponent,
    EventsDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
