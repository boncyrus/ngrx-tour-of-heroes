import { ActionReducerMap } from "@ngrx/store";
import * as fromDashboard from "./redcuers/top-heroes.reducer";

export const featureKey = "dashboardFeature";

export interface DashboardState {
  topHeroes: fromDashboard.DashboardState;
}

export const reducers: ActionReducerMap<DashboardState> = {
  topHeroes: fromDashboard.reducer
};
