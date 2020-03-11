import { Hero } from "../../../shared/models/hero";
import { on, createReducer, Action } from "@ngrx/store";
import { Actions } from "../actions/hero.actions";

export interface HeroState {
  loading: boolean;
  heroes: Hero[];
}

const initialState: HeroState = {
  loading: false,
  heroes: []
};

const heroListReducer = createReducer(
  initialState,
  on(Actions.getAllHeroes, state => ({ ...state, loading: true })),
  on(Actions.getAllHeroesCompleted, (state, action) => ({
    ...state,
    loading: false,
    heroes: action.data
  }))
);

export function reducer(state: HeroState, action: Action) {
  return heroListReducer(state, action);
}
