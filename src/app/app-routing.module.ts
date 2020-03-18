import { HeroEditComponent } from './heroes/hero-edit/hero-edit.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: HomeComponent
    },
    {
        path: 'hero',
        children: [
            {
                path: 'edit',
                component: HeroEditComponent
            },
            {
                path: 'details/:id',
                component: HeroDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
