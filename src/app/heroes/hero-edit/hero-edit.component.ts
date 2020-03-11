import { Hero } from "@shared/models/hero";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "bcm-hero-edit",
  templateUrl: "./hero-edit.component.html",
  styleUrls: ["./hero-edit.component.scss"]
})
export class HeroEditComponent implements OnInit {
  @Input() public hero: Hero;
  constructor() {}

  ngOnInit(): void {}
}
