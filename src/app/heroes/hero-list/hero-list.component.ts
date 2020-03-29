import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '@shared/models/hero';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroListResolverKeys } from './hero-list.keys';

@Component({
    selector: 'bcm-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: [
        './hero-list.component.scss'
    ]
})
export class HeroListComponent implements OnInit {
    @Input() public heroes: Hero[];

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.heroes = this.activatedRoute.snapshot.data[HeroListResolverKeys.HEROES];
    }

    public onClick(hero: Hero): void {
        this.router.navigate([
            'details',
            hero.id
        ]);
    }

    public onAddClick() {
        this.router.navigate([
            'heroes',
            'add'
        ]);
    }
}
