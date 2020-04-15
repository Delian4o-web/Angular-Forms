import { Component, OnInit } from "@angular/core";
import { Address } from "../models/address";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {
  address = new Address();
  provinces: string[] = [
    "Eastern Cape",
    "Free State",
    "Gauteng",
    "KwaZulu-Natal",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape",
    "Western Cape",
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form) {
    alert("Thanks for adding your address!");
    console.table(form.value);
  }
}
