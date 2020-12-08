import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UploadComponent } from './feature/upload.component';
import { DataComponent } from './feature/data.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, UploadComponent, DataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
