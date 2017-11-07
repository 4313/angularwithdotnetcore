import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChristmasListComponent } from './christmasList/christmasList.component';
import { ChristmasPresentComponent } from './christmas-present/christmas-present.component';

@NgModule({
  declarations: [
    AppComponent,
    ChristmasListComponent,
    ChristmasPresentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
