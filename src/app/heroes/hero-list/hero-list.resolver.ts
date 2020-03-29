import { Hero } from '@app/shared/models/hero';
import { Observable, of } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { heroList } from '@app/shared/data/fakeData';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroListResolver implements Resolve<Observable<Hero[]>> {
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero[]> {
        return of(heroList);
    }
}
