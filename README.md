# TOTP demo in Java
TOTP generation and validation demo using Spring WebFlux and Angular

## Structure
* Main and backend project is `maven`
* `frontend` folder is the Angular project for UI

## Used frameworks
* Java 17
* Spring Boot Reactive dependencies:
  * `dev.samstevens.totp:totp` - for TOTP generation/validation
* Angular dependencies:
  * `qrcode`, `@types/qrcode` - for QR image generation
* Google Authenticator must be used for OTP generation

## Usage
* Run `JavaTotpDemoApplication` in IDEA for backend
* Run `npm run` inside `frontend` to run frontend. Goto `http://localhost:4200` to open main UI: 
  * Goto: `http://localhost:4200/otp-secret` - to generate QR code for Google Authenticator app
  * Goto: `http://localhost:4200/otp` - to check the OTP code