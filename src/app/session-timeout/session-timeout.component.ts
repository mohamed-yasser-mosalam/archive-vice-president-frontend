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

import jwt from 'jsonwebtoken';

interface TokenPayload {
  username: string;
  // other fields you may have in your token
}

class TokenService {
  static getUsernameFromToken(token: string): string | null {
    try {
      const decodedToken = jwt.verify(token, 'your-secret-key-here') as TokenPayload;
      return decodedToken.username;
    } catch (error) {
      // Token is invalid or expired
      console.error('Error decoding token:', error);
      return null;
    }
  }

}
