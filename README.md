# TOTP demo in Java
TOTP generation and validation demo using Spring WebFlux and Angular

## Structure
* Main and backend project is `maven`
* `frontend` folder is the Angular project for UI

## Used frameworks
* Spring Boot Reactive dependencies:
  * `dev.samstevens.totp:totp` - for TOTP generation/validation
* Angular dependencies:
  * `qrcode`, `@types/qrcode` - for QR image generation