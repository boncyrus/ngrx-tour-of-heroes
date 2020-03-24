import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '@shared/models/hero';

@Component({
    selector: 'bcm-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: [
        './hero-list.component.scss'
    ]
})
export class HeroListComponent implements OnInit {
    @Input() public heroes: Hero[];

    constructor() {}

    ngOnInit(): void {}

    public onClick(hero: Hero): void {
        console.log('hero was clicked', hero);
    }
}
