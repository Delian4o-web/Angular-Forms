import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class CustomvalidationService {
  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp("/^+27/");
      const valid = regex.test(control.value);
      return valid ? null : { invalidPhoneNumber: true };
    };
  }
}