import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const components = [];
const modules = [FormsModule, CommonModule];


@NgModule({
  declarations: [],
  imports: modules,
  exports: [...modules]
})
export class SharedModule { }
