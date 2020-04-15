import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { AddressComponent } from "./address/address.component";

const routes: Routes = [
  { path: "contact", component: ContactComponent },
  { path: "address", component: AddressComponent },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "contact",
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "contact",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
