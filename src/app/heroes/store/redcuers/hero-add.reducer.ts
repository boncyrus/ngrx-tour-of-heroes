import { createReducer, on, Action } from '@ngrx/store';
import { Hero } from '@shared/models/hero';
import { Actions } from '../actions/hero.actions';

export interface HeroAddState {
    loading: boolean;
    hero?: Hero;
}

const initialState = {
    loading: false
};

export const heroAddReducer = createReducer(
    initialState,
    on(Actions.addHero, (state) => ({
        ...state,
        loading: true
    })),
    on(Actions.addHeroCompleted, (state, action) => ({
        ...state,
        loading: false,
        hero: action.data
    }))
);

export function reducer(state: HeroAddState, action: Action) {
    return heroAddReducer(state, action);
}

export const heroAddLoading = (state: HeroAddState) => state.loading;
export const heroAddHero = (state: HeroAddState) => state.hero;
