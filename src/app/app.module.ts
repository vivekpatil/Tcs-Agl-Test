import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent }  from './app.component';
import { GenderPipe } from './gender.pipe';
import { PetsPipe } from './pets.pipe';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    PetsPipe,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }