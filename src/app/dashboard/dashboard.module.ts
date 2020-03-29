import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardEffects } from './store/effects/top-heroes.effects';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import * as fromStore from './store';
import { HeroService } from '@shared/services/hero.service';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        StoreModule.forFeature(fromStore.featureKey, fromStore.reducers),
        EffectsModule.forFeature([
            DashboardEffects
        ]),
        SharedModule,
        DashboardRoutingModule
    ],
    declarations: [
        HomeComponent,
        DashboardListComponent
    ],
    exports: [
        HomeComponent,
        DashboardListComponent
    ],
    providers: [
        HeroService,
        DashboardEffects
    ]
})
export class DashboardModule {}
