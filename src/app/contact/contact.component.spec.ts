import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactComponent } from "./contact.component";
import { DebugElement } from "@angular/core";
import { BrowserModule, By } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    fixture.detectChanges();
    spyOn(component, "onSubmit");
    el = fixture.debugElement.query(By.css("button")).nativeElement;
    el.click();

    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it("form should be invalid when empty", () => {
    component.registerForm.controls.firstName.setValue("");
    component.registerForm.controls.lastName.setValue("");
    component.registerForm.controls.email.setValue("");
    component.registerForm.controls.phoneNo.setValue("");
    expect(component.registerForm.valid).toBeFalsy();
  });
});
