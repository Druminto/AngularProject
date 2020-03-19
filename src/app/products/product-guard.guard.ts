import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, onErrorResumeNext } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardGuard implements  CanActivate{

  constructor(private router: Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let id = +next.url[1].path;
    if (isNaN(id) || id < 1){
      alert("Invalid product id");
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
  
}
