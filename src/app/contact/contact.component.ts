import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { CustomvalidationService } from "../services/customvalidation.service";
import { User } from "../models/user";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  @Output() userInfo = new EventEmitter<User>();

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
