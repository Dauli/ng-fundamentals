import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string; // custom ID

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(){
    this.el.addEventListener('click', e => {
      /* previous use of original id
      this.$('#simple-modal').modal({});
      */

      // using custom ID
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
