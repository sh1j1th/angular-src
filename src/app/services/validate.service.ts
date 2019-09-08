import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateLearnerRegister(user) {
    if (user.firstName == undefined || user.lastName == undefined || user.email == undefined || user.contact == undefined || user.password == undefined || user.confPassword == undefined) {
      return false;
    } else
      return true;
  }
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validateTnC(tNc) {
    if (tNc == false || tNc == undefined) {
      return false;
    }
    else 
      return true;
  }
}
