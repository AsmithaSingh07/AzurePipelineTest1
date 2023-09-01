import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demonstration1Component } from './demonstration1/demonstration1.component';
import { Demonstration1Module } from './demonstration1/demonstration1.module';
import { WelcomeComponent } from './Welcome/Welcome.component';
import { ByeComponent } from './Bye/Bye.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [			
    AppComponent,
      Demo1Component,
      WelcomeComponent,
      ByeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,Demonstration1Module,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
