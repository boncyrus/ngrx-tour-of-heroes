import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '@shared/models/hero';
import { Router } from '@angular/router';
import { AppState } from '@app/shared/models';
import { Actions } from '../store/actions/hero.actions';
import * as fromStore from '../store';

@Component({
    selector: 'bcm-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: [
        './hero-list.component.scss'
    ]
})
export class HeroListComponent implements OnInit {
    public heroes$: Observable<Hero[]> = of([]);

    constructor(private router: Router, private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.store.dispatch(Actions.getAllHeroes());
        this.heroes$ = this.store.select(fromStore.selectHeroListHeroes);
    }

    public onClick(hero: Hero): void {
        this.router.navigate([
            'details',
            hero.id
        ]);
    }

    public onAddClick() {
        this.router.navigate([
            'heroes',
            'add'
        ]);
    }
}
