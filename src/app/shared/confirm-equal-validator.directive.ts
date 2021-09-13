import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {

  @Input()
  appConfirmEqualValidator!: string;

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null { // key-value pair, key is string, but value can be any
    const controlToCompare = control.parent?.get(this.appConfirmEqualValidator); // control is the confirmPasswordField, and parent is the form, and ?. is used for Optional Chaining for catching null value
  
    if(controlToCompare && controlToCompare.value !== control.value) {
      return {'notEqual': true};
    }

    return null;
  }
}