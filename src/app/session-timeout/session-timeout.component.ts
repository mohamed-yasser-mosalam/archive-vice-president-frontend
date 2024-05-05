import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from "../Services/Security/authentication-service.service";
import baseUrl from "../url";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UpdateUserInformationService} from "../Services/updateUserInformation/update-user-information.service";

@Component({
  selector: 'app-session-timeout',
  templateUrl: './session-timeout.component.html',
  styleUrls: ['./session-timeout.component.css']
})
export class SessionTimeoutComponent{

}
