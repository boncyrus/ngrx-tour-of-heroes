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
import { HeroRoutingModule } from './hero-routing.module';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HeroAddFormComponent } from './hero-add-form/hero-add-form.component';

@NgModule({
    imports: [
        StoreModule.forFeature(fromStore.featureKey, fromStore.reducers),
        EffectsModule.forFeature([
            HeroEffects
        ]),
        SharedModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroEditorComponent,
        HeroListComponent,
        HeroEditComponent,
        HeroDetailsComponent,
        HeroAddComponent,
        HeroAddFormComponent
    ],
    providers: [
        HeroService,
        HeroEffects
    ]
})
export class HeroModule {}
