import { Hero } from '@shared/models/hero';
import { Observable, of, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '@app/shared/models';
import { Actions } from '../store/actions/hero.actions';
import * as fromStore from '../store';
import { delay, filter } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
    selector: 'bcm-hero-add',
    templateUrl: './hero-add.component.html',
    styleUrls: [
        './hero-add.component.scss'
    ]
})
export class HeroAddComponent implements OnInit, OnDestroy {
    public loading$: Observable<boolean> = of(false);
    public subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>, private location: Location) {}

    public ngOnInit(): void {
        this.loading$ = this.store.select(fromStore.selectHeroAddLoading).pipe(delay(0));
        this.subscriptions.push(
            this.store.select(fromStore.selectHeroAddHero).pipe(filter((x) => !!x)).subscribe(() => {
                this.location.back();
            })
        );
    }

    public onSubmit(hero: Hero): void {
        this.store.dispatch(
            Actions.addHero({
                hero: hero
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.map((s) => s.unsubscribe());
    }
}
