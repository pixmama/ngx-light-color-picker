# Angular Light Color Picker

Angular 2 Color Picker Directive/Component with no dependencies required.
This is a Color Picker Directive/Component for Angular 2.

## Installation

`npm i angular-light-color-picker`

## Usage

Use it inside your components, for example:

`<ngx-light-color-picker class="color-picker" [height]="300" [width]="300" (colorSelected)="onColorSelected($event)"></ngx-light-color-picker>`

- Add NgxLightColorPickerModule in your app.module.ts:

```import {NgxLightColorPickerModule} from 'angular2-color-picker';
 
 @NgModule({
     ...
     imports: [NgxLightColorPickerModule]
 })
 ```
 
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
