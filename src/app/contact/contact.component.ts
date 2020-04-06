import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { CustomvalidationService } from "../services/customvalidation.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: [""],
      email: ["", [Validators.required, Validators.email]],
      phoneNo: [
        "",
        [Validators.required, this.customValidator.patternValidator()],
      ],
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert("Thank you for registering");
      console.table(this.registerForm.value);
    }
  }
}
