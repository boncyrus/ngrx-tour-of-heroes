import { heroList } from "../../data/fakeData";
import { Hero } from "../../models/hero";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "bcm-hero-card",
  templateUrl: "./hero-card.component.html",
  styleUrls: ["./hero-card.component.scss"]
})
export class HeroCardComponent implements OnInit {
  @Input() public hero: Hero = heroList[0];
  @Output() public click: EventEmitter<Hero> = new EventEmitter();
  @Input() public showDescription: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  public onClick(): void {
    this.click.emit(this.hero);
  }
}
