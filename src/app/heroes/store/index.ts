import * as fromHeroList from './redcuers/hero-list.reducer';
import * as fromHeroDetails from './redcuers/hero-details.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export const featureKey = 'heroFeature';

export interface HeroState {
    list: fromHeroList.HeroListState;
    details: fromHeroDetails.HeroDetailsState;
}

export const reducers: ActionReducerMap<HeroState> = {
    list: fromHeroList.reducer,
    details: fromHeroDetails.reducer
};

export const selectHeroFeature = createFeatureSelector(featureKey);
export const selectHeroListState = createSelector(selectHeroFeature, (state: HeroState) => state.list);
export const selectHeroDetailsState = createSelector(selectHeroFeature, (state: HeroState) => state.details);

// Hero List
export const selectHeroListLoading = createSelector(selectHeroListState, fromHeroList.heroListLoading);
export const selectHeroListHeroes = createSelector(selectHeroListState, fromHeroList.heroListHeroes);

// Hero Details
export const selectHeroDetailsHero = createSelector(selectHeroDetailsState, fromHeroDetails.heroDetailsHero);
export const selectHeroDetailsLoading = createSelector(selectHeroDetailsState, fromHeroDetails.heroDetailsLoading);
