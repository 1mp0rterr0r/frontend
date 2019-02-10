import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './Service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovedGuard implements CanActivate {

  constructor(private authService: AuthenticateService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot): boolean {
    if (this.authService.currentUser().status === 'approved') {
      return true;
    } else {
      this.authService.logout();
      this.router.navigate(['/product/beneficiary'], { queryParams: { returnUrl: state.url } })
      return false;
    }
  }
}
