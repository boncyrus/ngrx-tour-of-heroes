import { Store } from '@ngrx/store';
import { HeroService } from '@shared/services/hero.service';
import { Actions as HeroActions } from '../actions/hero.actions';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap, tap, combineAll, concatMap, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { CompletionState } from '@shared/models/completionResponse';
import { AppState } from '@app/shared/models';
import { MatSnackBar } from '@angular/material/snack-bar';

const snackbarClasses = [
    'bg-secondary',
    'text-light'
];

@Injectable()
export class HeroEffects {
    constructor(private actions$: Actions, private heroService: HeroService, private snackBar: MatSnackBar) {}

    geHeroes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HeroActions.getAllHeroes),
            switchMap(() =>
                this.heroService.getAll().pipe(
                    map((heroes) => {
                        return HeroActions.getAllHeroesCompleted({
                            state: CompletionState.Success,
                            data: heroes
                        });
                    }),
                    catchError((err) =>
                        of(
                            HeroActions.getAllHeroesCompleted({
                                state: CompletionState.Failure,
                                message: err
                            })
                        )
                    )
                )
            )
        )
    );

    getHeroById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HeroActions.getHeroById),
            mergeMap((data) => {
                return this.heroService.getById(data.id).pipe(
                    map((hero) => {
                        return HeroActions.getHeroByIdCompleted({
                            state: CompletionState.Success,
                            data: hero
                        });
                    }),
                    catchError((err) =>
                        of(
                            HeroActions.getHeroByIdCompleted({
                                state: CompletionState.Failure,
                                message: err
                            })
                        )
                    )
                );
            })
        )
    );

    updateHero$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HeroActions.updateHero),
            switchMap((data) => {
                return this.heroService.update(data.hero.id, data.hero).pipe(
                    map(() => {
                        return HeroActions.updateHeroCompleted({
                            state: CompletionState.Success,
                            data: data.hero
                        });
                    }),
                    catchError((err) =>
                        of(
                            HeroActions.updateHeroCompleted({
                                state: CompletionState.Failure,
                                message: err
                            })
                        )
                    )
                );
            })
        )
    );

    addHero$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HeroActions.addHero),
            switchMap((data) => {
                return this.heroService.create(data.hero).pipe(
                    map(() => {
                        return HeroActions.addHeroCompleted({
                            state: CompletionState.Success,
                            data: data.hero
                        });
                    }),
                    catchError((err) =>
                        of(
                            HeroActions.addHeroCompleted({
                                state: CompletionState.Failure,
                                message: err
                            })
                        )
                    )
                );
            })
        )
    );

    addHeroSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HeroActions.addHeroCompleted),
            filter((x) => x.state === CompletionState.Success),
            map((data) => {
                this.snackBar.open(`Hero ${data.data.name} added!`, '', {
                    duration: 2000,
                    panelClass: [
                        ...snackbarClasses
                    ]
                });

                return HeroActions.addHeroInit();
            })
        )
    );
}
