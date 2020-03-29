import { Observable } from 'rxjs';
import { Hero } from '@shared/models/hero';
import { Component, OnInit, Input, ViewChild, NgZone, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'bcm-hero-editor',
    templateUrl: './hero-editor.component.html',
    styleUrls: [
        './hero-editor.component.scss'
    ]
})
export class HeroEditorComponent implements OnInit {
    @Input() public hero$: Observable<Hero>;
    @Output() public save: EventEmitter<Hero> = new EventEmitter<Hero>();
    public hero: Hero;
    public heroForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.heroForm = this.fb.group({
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
    }

    public ngOnInit(): void {
        this.hero$.subscribe((hero) => {
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
