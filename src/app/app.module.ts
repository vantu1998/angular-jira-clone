import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {layoutReducer} from './components/layout/store/layout.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({layoutState: layoutReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
