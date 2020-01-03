import { Injectable } from "@angular/core";

declare let toastr;

Injectable()
export class ToastrService {
  // Toastr got 4 metthodes in it
  // let's redifine thoses methodes as our private services
  success(message: string, title?: string){
    toastr.success(message, title);
  }
  info(message: string, title?: string){
    toastr.success(message, title);
  }
  warning(message: string, title?: string){
    toastr.success(message, title);
  }
  error(message: string, title?: string){
    toastr.success(message, title);
  }
}
