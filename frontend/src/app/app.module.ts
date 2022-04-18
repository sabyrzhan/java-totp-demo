import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpSecretComponent } from './otp-secret/otp-secret.component';
import { OtpValidateComponent } from './otp-validate/otp-validate.component';
import { NavComponent } from './nav/nav.component';
import {OtpSecretResolverService} from "./otp-secret-resolver.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    OtpSecretComponent,
    OtpValidateComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    OtpSecretResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
