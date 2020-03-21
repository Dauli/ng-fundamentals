import { Component, Input, Output, EventEmitter } from "@angular/core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  faHeart = faHeart;
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();

  // handle event click
  onClick() {
    this.vote.emit({});
  }
}
