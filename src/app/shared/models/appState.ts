import * as fromHeroes from '@app/heroes/store';
import * as fromDahsboard from '@app/dashboard/store';

export interface AppState {
    heroFeature: fromHeroes.HeroState;
    dashboardFeature: fromDahsboard.DashboardState;
}
