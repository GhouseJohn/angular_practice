import{CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router'
import { Observable, from } from 'rxjs';
import{Injectable} from '@angular/core'

@Injectable()
export class employeeGuard implements CanActivate{

    constructor( private _router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    let Role="Admin";
     console.log(route);
    const user={
        role:"Admin",
    }
       
        if(user.role==Role){
        return true;
        }
this._router.navigate(['/Login']);
        return false;
    };
}