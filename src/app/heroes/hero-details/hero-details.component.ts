import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Hero } from '@shared/models/hero';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '@app/shared/models';
import { switchMap, delay } from 'rxjs/operators';
import { Actions } from '../store/actions/hero.actions';
import * as fromStore from '../store';

@Component({
    selector: 'bcm-hero-details',
    templateUrl: './hero-details.component.html',
    styleUrls: [
        './hero-details.component.scss'
    ]
})
export class HeroDetailsComponent implements OnInit {
    public hero$: Observable<Hero>;
    public loading$: Observable<boolean> = of(false);
    constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {}

    public ngOnInit(): void {
        this.loading$ = this.store.select(fromStore.selectHeroDetailsLoading).pipe(delay(0));

        this.hero$ = this.route.params.pipe(
            switchMap((p) => {
                const id = p['id'];
                this.store.dispatch(
                    Actions.getHeroById({
                        id: id
                    })
                );

                return this.store.select(fromStore.selectHeroDetailsHero);
            })
        );
    }

    public onCardActionClick(data: { type: 'edit' | 'view'; hero: Hero }) {
        if (data.type === 'edit') {
            this.router.navigate([
                'details',
                data.hero.id,
                'edit'
            ]);
        }
    }
}
