import { Hero } from '@shared/models/hero';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bcm-hero-add-form',
    templateUrl: './hero-add-form.component.html',
    styleUrls: [
        './hero-add-form.component.scss'
    ]
})
export class HeroAddFormComponent implements OnInit {
    @Output() public heroSubmit = new EventEmitter<Hero>();
    public form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            name: [
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

    public ngOnInit(): void {}

    public onSubmit(): void {
        this.heroSubmit.emit(this.form.value);
    }
}
