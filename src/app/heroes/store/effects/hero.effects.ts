import { HeroService } from '@shared/services/hero.service';
import { Actions as HeroActions } from '../actions/hero.actions';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CompletionState } from '@shared/models/completionResponse';

@Injectable()
export class HeroEffects {
    constructor(private actions$: Actions, private heroService: HeroService) {}

    geHeroes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HeroActions.getAllHeroes),
            mergeMap(() =>
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
}
