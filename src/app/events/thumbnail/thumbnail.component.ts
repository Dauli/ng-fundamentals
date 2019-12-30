import { Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event.name}}</h2>
  <div>Date: {{event.date}}</div>
  <div>Time: {{event.time}}</div>
  <div>Price: \${{event.price}}</div>
  <div>
    <span>Location: {{event.location.address}}</span>
    <span>&nbsp;</span>
    <span>{{event.location.city}}, {{event.location.country}}</span>
  </div>

  <button class="btn btn-primary" (click)="clickMeFunc()">
    Click Me</button>
</div>
  `
})
export class ThumbnailComponent {
  @Input() event: any
  @Output() eventClick = new EventEmitter()

  clickMeFunc() {
    this.eventClick.emit('Thank you Alex for making the WEB so easier');
  }
}
