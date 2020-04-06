import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  profileForm = new FormGroup({
    title: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    phoneNo: new FormControl(""),
    email: new FormControl(""),
    gender: new FormControl(""),
  });

  ngOnInit(): void {}
}
