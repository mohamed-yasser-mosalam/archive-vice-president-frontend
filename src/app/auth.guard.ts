import {AuthenticationServiceService} from "./Services/Security/authentication-service.service";
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {AuthGuardService} from "./Services/guard/auth-guard.service";

export const CanActivate = () => {
  const guard = inject(AuthGuardService)
  const auth = inject(AuthenticationServiceService);
  const router = inject(Router)
  if (auth.getToken() && guard.check())
    return true;
   else {
    router.navigateByUrl('/login');
    return false;
  }
}
