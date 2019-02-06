import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PrevisaoserviceService} from './previsaoservice.service';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PrevisaoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
