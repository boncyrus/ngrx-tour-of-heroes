import { SharedModule } from '@shared/shared.module';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import { HeroService } from '@shared/services/hero.service';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './store/effects/hero.effects';
import * as fromStore from './store';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

@NgModule({
    imports: [
        StoreModule.forFeature(fromStore.featureKey, fromStore.reducers),
        EffectsModule.forFeature([
            HeroEffects
        ]),
        SharedModule
    ],
    declarations: [
        HeroEditorComponent,
        HeroListComponent,
        HeroEditComponent,
        HeroDetailsComponent
    ],
    exports: [
        HeroEditorComponent,
        HeroListComponent,
        HeroEditComponent,
        HeroDetailsComponent
    ],
    providers: [
        HeroService,
        HeroEffects
    ]
})
export class HeroModule {}
