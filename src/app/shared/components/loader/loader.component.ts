import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bcm-loader',
    templateUrl: './loader.component.html',
    styleUrls: [
        './loader.component.scss'
    ]
})
export class LoaderComponent implements OnInit {
    @Input() public isBusy: boolean = false;

    constructor() {}

    public ngOnInit(): void {}
}
