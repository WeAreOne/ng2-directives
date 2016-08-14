import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AutoGrowDirective, UnlessDirective } from './shared';

@NgModule({
  declarations: [ AppComponent, AutoGrowDirective, UnlessDirective ],
  imports:      [ BrowserModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
