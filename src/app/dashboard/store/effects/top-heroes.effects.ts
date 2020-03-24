import { mergeMap, map, catchError } from 'rxjs/operators';
import { HeroService } from '@shared/services/hero.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Actions as DashboardActions } from '../actions/top-heroes.actions';
import { CompletionState } from '@shared/models/completionResponse';
import { of } from 'rxjs';

@Injectable()
export class DashboardEffects {
    constructor(private actions$: Actions, private heroService: HeroService) {}

    geHeroes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.getTopHeroes),
            mergeMap(() =>
                this.heroService.getTopHeroes().pipe(
                    map((heroes) => {
                        return DashboardActions.getTopHeroesCompleted({
                            state: CompletionState.Success,
                            data: heroes
                        });
                    }),
                    catchError((err) =>
                        of(
                            DashboardActions.getTopHeroesCompleted({
                                state: CompletionState.Failure,
                                message: err
                            })
                        )
                    )
                )
            )
        )
    );
}
