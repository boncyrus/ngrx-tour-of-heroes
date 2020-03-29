import { on, Action } from '@ngrx/store';
import { Hero, emptyHero } from '@shared/models/hero';
import { createReducer } from '@ngrx/store';
import { Actions } from '../actions/hero.actions';

export interface HeroDetailsState {
    loading: boolean;
    hero: Hero;
}

const initialState: HeroDetailsState = {
    loading: false,
    hero: emptyHero
};

const heroDetailsReducer = createReducer(
    initialState,
    on(Actions.getHeroById, (state) => ({ ...state, loading: true })),
    on(Actions.getHeroByIdCompleted, (state, action) => ({ ...state, hero: action.data, loading: false })),
    on(Actions.updateHero, (state) => ({ ...state, loading: true })),
    on(Actions.updateHeroCompleted, (state, action) => ({ ...state, hero: action.data, loading: false }))
);

export function reducer(state: HeroDetailsState, action: Action) {
    return heroDetailsReducer(state, action);
}

export const heroDetailsHero = (state: HeroDetailsState) => state.hero;
export const heroDetailsLoading = (state: HeroDetailsState) => state.loading;
