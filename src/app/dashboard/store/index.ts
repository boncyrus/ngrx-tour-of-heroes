import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDashboard from './redcuers/top-heroes.reducer';

export const featureKey = 'dashboardFeature';

export interface DashboardState {
    topHeroes: fromDashboard.DashboardState;
}

export const reducers: ActionReducerMap<DashboardState> = {
    topHeroes: fromDashboard.reducer
};

export const selectDashboardFeature = createFeatureSelector(featureKey);
export const selectTopHeroesState = createSelector(selectDashboardFeature, (state: DashboardState) => state.topHeroes);
export const selectTopHeroesLoading = createSelector(selectTopHeroesState, fromDashboard.topHeroesLoading);
export const selectTopHeroes = createSelector(selectTopHeroesState, fromDashboard.topHeroes);
