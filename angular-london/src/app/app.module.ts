import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'presents',component:ChristmasListComponent
      },
      {
        path:'presents/:name',component:ChristmasPresentComponent
      },
      {
        path: '**', component: ChristmasListComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
