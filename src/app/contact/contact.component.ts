import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  titles = ["Mr.", "Ms.", "Mrs.", "Dr.", "Prof."];
  contactForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      title: new FormControl(""),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl(""),
      phoneNo: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      gender: new FormControl(""),
    });
  }

  revert() {
    this.contactForm.reset();
  }

  onSubmit() {}

  constructor() {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {}
}
