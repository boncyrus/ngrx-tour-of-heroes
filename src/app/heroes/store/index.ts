import * as fromHeroList from "./redcuers/hero-list.reducer";
import { ActionReducerMap } from "@ngrx/store";

export const featureKey = "heroFeature";

export interface HeroState {
  list: fromHeroList.HeroState;
}

export const reducers: ActionReducerMap<HeroState> = {
  list: fromHeroList.reducer
};
