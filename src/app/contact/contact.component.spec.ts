import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactComponent } from "./contact.component";
import { DebugElement } from "@angular/core";
import { BrowserModule, By } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { User } from "../models/user";

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactComponent);

        component = fixture.componentInstance;
        component.ngOnInit();

        de = fixture.debugElement.query(By.css("form"));
        el = de.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should call the onSubmit method", () => {
    spyOn(component, "onSubmit");
    el = fixture.debugElement.query(By.css("button")).nativeElement;
    el.click();

    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it("should test input errors", () => {
    const firstNameInput = component.registerForm.controls.firstName;
    expect(firstNameInput.errors.required).toBeTruthy();

    firstNameInput.setValue("John");
    expect(firstNameInput.errors).toBeNull();
  });

  it("email field validity", () => {
    let errors = {};
    let email = component.registerForm.controls["email"];
    expect(email.valid).toBeFalsy();

    errors = email.errors || {};
    expect(errors["required"]).toBeTruthy();

    email.setValue("Johnathan");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["pattern"]).toBeTruthy();

    email.setValue("dgueorguiev9@gmail.com");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["pattern"]).toBeFalsy();
  });

  it("phone number validity with custom validator", () => {
    let errors = {};
    let phoneNum = component.registerForm.controls["phoneNo"];
    expect(phoneNum.valid).toBeFalsy();

    errors = phoneNum.errors || {};
    expect(errors["required"]).toBeTruthy();

    phoneNum.setValue("635");
    errors = phoneNum.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["localPhoneNumber"]).toBeTruthy();

    phoneNum.setValue("+27611411010");
    errors = phoneNum.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["localPhoneNumber"]).toBeFalsy();
  });

  it("submitting a form should emit a user", () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls.firstName.setValue("Delyan");
    component.registerForm.controls.lastName.setValue("Georgiev");
    component.registerForm.controls.email.setValue("dgueorguiev9@gmail.com");
    component.registerForm.controls.phoneNo.setValue("+27611411010");

    let user: User;
    component.userInfo.subscribe((value) => (user = value));

    component.onSubmit();

    console.log(user);

    expect(user.firstName).toBe("Delyan");
    expect(user.lastName).toBe("Georgiev");
    expect(user.email).toBe("dgueorguiev9@gmail.com");
    expect(user.phoneNum).toBe("+27611411010");
  });

  it("form should be invalid when empty", () => {
    component.registerForm.controls.firstName.setValue("");
    component.registerForm.controls.lastName.setValue("");
    component.registerForm.controls.email.setValue("");
    component.registerForm.controls.phoneNo.setValue("");
    expect(component.registerForm.valid).toBeFalsy();
  });

  it("form should be valid with correct input", () => {
    component.registerForm.controls.firstName.setValue("Delyan");
    component.registerForm.controls.lastName.setValue("Georgiev");
    component.registerForm.controls.email.setValue("dgueorguiev9@gmail.com");
    component.registerForm.controls.phoneNo.setValue("+27611411010");
    expect(component.registerForm.valid).toBeTruthy();
  });
});
