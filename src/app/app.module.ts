import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PhotoListComponent, PhotoComponent } from './photos';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    PhotoComponent,
    PhotoListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
