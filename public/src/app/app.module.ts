import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CakeService } from './cake.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CakeComponent } from './cake/cake.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
