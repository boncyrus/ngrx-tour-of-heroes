import { Hero } from '../../models/hero';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'bcm-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: [
        './hero-card.component.scss'
    ]
})
export class HeroCardComponent implements OnInit {
    @Input() public hero: Hero;
    @Output() public cardClick: EventEmitter<Hero> = new EventEmitter();
    @Input() public viewMode: 'full' | 'condensed' = 'condensed';
    constructor() {}

    ngOnInit(): void {}

    public onClick(): void {
        this.cardClick.emit(this.hero);
    }
}
