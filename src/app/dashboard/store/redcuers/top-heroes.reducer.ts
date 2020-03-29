import { Hero } from '@shared/models/hero';
import { createReducer, on } from '@ngrx/store';
import { Actions } from '../actions/top-heroes.actions';
import { AppState } from '@app/shared/models';

export interface DashboardState {
    loading: boolean;
    heroes: Hero[];
}

const initialState: DashboardState = {
    loading: false,
    heroes: []
};

const heroListReducer = createReducer(
    initialState,
    on(Actions.getTopHeroes, (state) => ({ ...state, loading: true })),
    on(Actions.getTopHeroesCompleted, (state, action) => ({
        ...state,
        loading: false,
        heroes: action.data
    }))
);

export function reducer(state: DashboardState, action) {
    return heroListReducer(state, action);
}

export const topHeroesLoading = (state: DashboardState) => state.loading;
export const topHeroes = (state: DashboardState) => state.heroes;
