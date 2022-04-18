import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../api-service.service";

@Component({
  selector: 'app-otp-validate',
  templateUrl: './otp-validate.component.html',
  styleUrls: ['./otp-validate.component.css']
})
export class OtpValidateComponent implements OnInit {
  validationStatus: string = ''
  digitCode: string = ''

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
  }

  validateOtp(): void {
    this.apiService.otpValidate({ otpCode: this.digitCode }).subscribe(res => {
      this.validationStatus = "Success";
    }, error => {
      this.validationStatus = "Invalid code";
    })
  }

}
