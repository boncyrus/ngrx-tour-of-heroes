import { HeroAddComponent } from './hero-add/hero-add.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListResolver } from './hero-list';

const routes: Routes = [
    {
        path: '',
        component: HeroListComponent,
        resolve: {
            HEROES: HeroListResolver
        }
    },
    {
        path: 'details/:id/edit',
        component: HeroEditComponent
    },
    {
        path: 'details/:id',
        component: HeroDetailsComponent
    },
    {
        path: 'add',
        component: HeroAddComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        HeroListResolver
    ]
})
export class HeroRoutingModule {}
