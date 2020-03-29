import { ReactiveFormsModule } from '@angular/forms';
import { HeroService } from './services/hero.service';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        HeroCardComponent,
        LoaderComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        HeroCardComponent,
        LoaderComponent,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule
    ],
    providers: [
        HeroService
    ]
})
export class SharedModule {}
