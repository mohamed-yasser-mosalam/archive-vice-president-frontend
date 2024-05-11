import {AuthenticationServiceService} from "./Services/Security/authentication-service.service";
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {AuthGuardService} from "./Services/guard/auth-guard.service";

export const CanActivate = () => {
  // const guard = inject(AuthGuardService)
  // const auth = inject(AuthenticationServiceService);
  // const router = inject(Router)
  // if (guard.checkTokenStatues() == 1)
  //   return true;
  // else {
  //   router.navigateByUrl('/login');
  //   return false;
  // }
}
