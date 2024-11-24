# Angular Forms
This project was generated with Angular CLI version 18.2.7.
## Angular Template-driven Form - Mutable Form
    <form #loginForm="ngForm">
## Angular Template-driven Form - Track control states
Properties of the control:
1-ng-untouched
2-ng-touched
3-ng-pristine: control value or data not changed 
4-ng-dirty
5-ng-valid: control status
6-ng-invalid

## Angular Template-driven Form - Show and hide validation error messages
Angular Template-driven Form - All Built-in Validators.
Understanding Angular Form onSubmit and ngSubmit.
Understanding Angular ngModelOptions and ngModelChange.
Angular Forms - Advanced ngModelOptions
Angular Forms - Understanding ngModel One Way and Bidirectional Data Binding

## Angular Reactive Form
- Introduction to Angular Reactive Form
- Reactive Form - Understanding Form Control
    1-Form Group 2-Form Array 3-Form Control 4-Form Record
- Form Control:
    1-Generic strong type FormControl<string>('')
    2-Initial value:
        1-FormControl<string>({value:'',disabled:false})
        2-FormControl<boolean>({value:true, disabled:false})
        3-FormControl<string>('',{updateOn:'blur'}), 
- Reactive Form - How can use Form Builder


tsconfig.json "noUnusedLocals": true // means anything not used must be removed.
tsconfig.app.json in compilerOptions "strictPropertyInitialization": false //means property initialization not required.