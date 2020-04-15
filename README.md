# Angular Reactive Forms vs Template Driven forms

This is a simple Angular application which shows the 2 ways to approach when using forms in Angular :

- Angular Reactive Forms
- Template Driven Forms

## Functionality

- Both forms made use of built-in Angular validators , as well as a custom validator for a phone number.
- Display Error messages correctly.
- Once the form is valid , display user information in the console.

## Unit Testing

Unit tests were also done in this application like :

- Contact Component should call the onSubmit() method.
- Making fields required.
- Email field validity
- Phone number validity with custom validator
- Form should be invalid when empty
- Form should be valid with correct input
