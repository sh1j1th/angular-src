import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { HttpClient } from '@angular/common/http';
import { NgFlashMessageService } from 'ng-flash-messages';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-trainer-register',
  templateUrl: './trainer-register.component.html',
  styleUrls: ['./trainer-register.component.scss']
})
export class TrainerRegisterComponent implements OnInit {
  firstName: String;
  lastName: String;
  contact: Number;
  linkedInId: String;
  email: String;
  password: String;
  confPassword: String;
  tNc: boolean;
//there is more to add here, ask abt how to deal with the arrays

  constructor(private validateService: ValidateService,
    private flashMessage: NgFlashMessageService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  onTrainerRegisterSubmit(trainer) {
    console.log(trainer.value)

    var body = "firstName=" + trainer.firstName
      + "&lastName=" + trainer.lastName
      + "&contact=" + trainer.contact;

    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    this.http.post('http://localhost:3000/api/trainerRegister', body,
      { headers: headers, responseType: 'text' }).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )

    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      contact: this.contact,
      linkedInId: this.linkedInId,
      email: this.email,
      password: this.password,
      confPassword: this.confPassword,
      tNc: this.tNc
    }
    //Required Fields
    if (this.validateService.validateTrainerRegister(user)) {
      this.flashMessage.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please fill in all the fields"],
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true,
        // Time after which the flash disappears defaults to 2000ms
        timeout: 5000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
    }

    //Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please fill in a valid email"],
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true,
        // Time after which the flash disappears defaults to 2000ms
        timeout: true,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
    }

    //validate Terms and conditions
    if (!this.validateService.validateTnC(user.tNc)) {
      this.flashMessage.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please agree to our tnc"],
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true,
        // Time after which the flash disappears defaults to 2000ms
        timeout: true,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
    }
  }

} 
