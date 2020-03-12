import { Component, Input, Inject, ViewChild, ElementRef } from "@angular/core";
import { $ } from 'protractor';
import { JQ_TOKEN } from "./jquery.service";

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{elementId}}" #modalContainer class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-body {
      height: 250px;
      overflow-y: scroll;
    }
  `]
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;

  // Uses of ViewChild to close Modal dialogue
  @ViewChild('modalContainer') containerEl: ElementRef;

  // Inject jquery in constructor
  constructor(@Inject(JQ_TOKEN) private $: any) {}

  // Close modal function when click search result
  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}
