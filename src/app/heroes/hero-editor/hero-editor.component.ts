import { Observable } from 'rxjs';
import { Hero } from '@shared/models/hero';
import { Component, OnInit, Input, ViewChild, NgZone, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'bcm-hero-editor',
    templateUrl: './hero-editor.component.html',
    styleUrls: [
        './hero-editor.component.scss'
    ]
})
export class HeroEditorComponent implements OnInit {
    @Input() public hero$: Observable<Hero>;
    public hero: Hero;

    @Output() public save: EventEmitter<Hero> = new EventEmitter<Hero>();

    get heroName(): string {
        return this.heroForm.get('name').value;
    }

    public heroForm = this.fb.group({
        name: [
            '',
            Validators.required
        ],
        id: [
            '',
            Validators.required
        ],
        description: [
            '',
            Validators.required
        ],
        url: [
            ''
        ]
    });

    constructor(private fb: FormBuilder) {}

    public ngOnInit(): void {
        this.hero$.subscribe((hero) => {
            console.log('subscribe', hero);
            this.hero = hero;
            this.heroForm.get('id').setValue(hero.id);
            this.heroForm.get('url').setValue(hero.url);
            this.heroForm.get('description').setValue(hero.description);
            this.heroForm.get('name').setValue(hero.name);
        });
    }

    public onSubmit(): void {
        if (this.heroForm.valid) {
            this.hero = {
                ...this.heroForm.value
            };

            this.save.emit(this.hero);
        }
    }
}
