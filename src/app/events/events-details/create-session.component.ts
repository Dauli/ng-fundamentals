import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared';
import { restrictedWords } from "../shared/index";

@Component({
  templateUrl: './create-session.component.html',
  styles: [`
    button { margin-left: 10px; }
    em {
      float: right;
      color: #E05C65;
      padding: 10px;
    }
    .error input, .error select, .error textarea { background-color: #E3C3C5; }
    .error::webkit-input-placeholder { color: #999; }
    .error::-moz-placeholder { color: #999; }
    .error:-moz-placeholder { color: #999; }
    .error:ms-input-placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit(){
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    // custom validators has been added bellow
    this.abstract = new FormControl('',
      [Validators.required, Validators.maxLength(400),
      restrictedWords(['foo', 'bar'])] // this. has been remove in case of import funct.
    );

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  // save our session when we submit the form
  // Make sure it match our model
  saveSession(formValues) {
    let session: ISession = {
      id: undefined, // its added to match our model
      name: formValues.name,
      duration: +formValues.duration, // casted to number
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: [] // its added to match our model
    }
    console.log(session);
  }

  /**
   * Some customs validators functions
   * That work fine.
   * But let's make it's own function file to import it here
   * and it will be a reusable restricted words
   * in shared/restricted-words.validators.ts

  private restrictedWords(words) {
    return (control: FormControl): { [key:string]: any } => {
      if(!words) return null;
      var invalidWords = words
        .map( w => control.value.includes(w) ? w : null)
        .filter( w => w != null);

      return invalidWords && invalidWords.length > 0 ? {'restrictedWords' : invalidWords
        .join(', ')} : null;
    }
  }
  */
}
