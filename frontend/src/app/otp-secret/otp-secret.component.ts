import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import * as qrcode from 'qrcode';

@Component({
  selector: 'app-otp-secret',
  templateUrl: './otp-secret.component.html',
  styleUrls: ['./otp-secret.component.css']
})
export class OtpSecretComponent implements OnInit {
  otpUrl: string = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      qrcode.toDataURL(data.secret.otpUrl, (err: any, img: string) => {
        this.otpUrl = img;
      });
    })
  }
}
