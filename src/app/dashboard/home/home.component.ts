import { Observable, of } from 'rxjs';
import { Hero } from '@shared/models/hero';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/models/appState';
import * as fromActions from '../store/actions/top-heroes.actions';
import * as fromStore from '../store';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'bcm-home',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {
    public heroes$: Observable<Hero[]>;
    public loading$: Observable<boolean> = of(false);

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.heroes$ = this.store.select(fromStore.selectTopHeroes);
        this.loading$ = this.store.select(fromStore.selectTopHeroesLoading).pipe(delay(0));
        this.store.dispatch(fromActions.Actions.getTopHeroes({}));
    }
}
