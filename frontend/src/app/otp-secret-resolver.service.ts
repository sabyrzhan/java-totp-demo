import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ApiServiceService} from "./api-service.service";

@Injectable({
  providedIn: 'root'
})
export class OtpSecretResolverService implements Resolve<any>{
  constructor(private apiService: ApiServiceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.apiService.otpSecret();
  }
}
