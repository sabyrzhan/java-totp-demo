import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OtpSecretComponent} from "./otp-secret/otp-secret.component";
import {OtpValidateComponent} from "./otp-validate/otp-validate.component";
import {OtpSecretResolverService} from "./otp-secret-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: OtpSecretComponent
  },
  {
    path: "otp-secret",
    component: OtpSecretComponent,
    resolve: { secret: OtpSecretResolverService }
  },
  {
    path: "otp",
    component: OtpValidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
