import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Hero } from '@shared/models/hero';
import { Component, OnInit, Input } from '@angular/core';
import { AppState } from '@app/shared/models';
import * as fromStore from '../store';
import { delay, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Actions } from '../store/actions/hero.actions';

@Component({
    selector: 'bcm-hero-edit',
    templateUrl: './hero-edit.component.html',
    styleUrls: [
        './hero-edit.component.scss'
    ]
})
export class HeroEditComponent implements OnInit {
    @Input() public hero$: Observable<Hero>;
    public loading$: Observable<boolean> = of(false);
    constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

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

    public onHeroSave(hero: Hero): void {
        this.store.dispatch(
            Actions.updateHero({
                hero: hero
            })
        );
    }
}
