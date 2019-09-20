# Angular Light Color Picker [![npm version](https://badge.fury.io/js/%40pixmama%2Fngx-light-color-picker.svg)](https://badge.fury.io/js/%40pixmama%2Fngx-light-color-picker)

Angular 7 Color Picker Component with no dependencies required.
This is a Color Picker Component for Angular 7.

## Installation

`npm i @pixmama/ngx-light-color-picker`

## Example
<a href="https://stackblitz.com/edit/ngx-light-color-picker" target='_blank'>StackBlitz Example</a>

## Usage

Use it inside your components, for example:

`<ngx-light-color-picker class="color-picker" [height]="300" [width]="300" (colorSelected)="onColorSelected($event)"></ngx-light-color-picker>`

- Add NgxLightColorPickerModule in your app.module.ts:

```
import {NgxLightColorPickerModule} from 'angular2-color-picker';
 
 @NgModule({
     ...
     imports: [NgxLightColorPickerModule]
 })
 ```
 
## Build
```
git clone https://github.com/pixmama/ngx-light-color-picker.git
npm install
cd ngx-light-color-picker
npm run build

```


## Optional parameters
```
  [height] = 300
  [width]  = 300
```
## Available events
(colorSelected) = onColorSelected($event)

```
  onColorSelected(e) {
    this.selectedColor = e.detail.hex;
  }
```
