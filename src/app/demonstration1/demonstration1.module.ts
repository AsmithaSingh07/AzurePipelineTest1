import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demonstration1Component } from './demonstration1.component';
import { Demonstation2Module } from '../demonstation2/demonstation2.module';

@NgModule({
  imports: [
    CommonModule,
    Demonstation2Module
  ],
  declarations: [Demonstration1Component],
  exports: [Demonstration1Component]
})

export class Demonstration1Module { }
