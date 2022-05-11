import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMentionsModule } from 'projects/ngx-mentions/src/lib/ngx-mentions.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMentionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
