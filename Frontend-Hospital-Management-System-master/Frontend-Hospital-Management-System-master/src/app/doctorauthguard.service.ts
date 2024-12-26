import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DocauthService } from './docauth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorauthguardService  implements CanActivate{

  constructor(private docauthService:DocauthService,private router:Router) { }

    canActivate() {
      
      if(this.docauthService.isUserLoggedIn()){

         return true;
      }else{

        this.router.navigate(['doclogin'])
        return false;
          
      }
        
    }
}
