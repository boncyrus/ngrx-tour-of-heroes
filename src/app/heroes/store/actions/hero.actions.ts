import { CompletionResponse } from '@shared/models/completionResponse';
import { Hero } from '@shared/models/hero';
import { createAction, props } from '@ngrx/store';

const getAllHeroes = createAction('[Hero] Get All', props<{}>());
const getAllHeroesCompleted = createAction('[Hero] Get All Completed', props<CompletionResponse<Array<Hero>>>());
const getHeroById = createAction('[Hero] Get By Id', props<{ id: number }>());
const getHeroByIdCompleted = createAction('[Hero] Get By Id Completed', props<CompletionResponse<Hero>>());
const updateHero = createAction('[Hero] Update Hero', props<{ id: number }>());
const updateHeroCompleted = createAction('[Hero] Update Hero Completed', props<CompletionResponse<Hero>>());

export const Actions = {
    getAllHeroes,
    getAllHeroesCompleted,
    getHeroById,
    getHeroByIdCompleted,
    updateHero,
    updateHeroCompleted
};
