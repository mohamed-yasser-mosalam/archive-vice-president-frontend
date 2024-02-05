import {AuthenticationServiceService} from "./Services/Security/authentication-service.service";
import {inject} from "@angular/core";
import {Router} from "@angular/router";

export const  CanActivate=()=>{
    const  auth=inject(AuthenticationServiceService);
    const router=inject(Router)
   if(auth.getToken()){
     return true;
   }
   else {
     router.navigateByUrl('/login');
     return false;
   }
}
