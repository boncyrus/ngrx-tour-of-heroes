import { Store } from "@ngrx/store";
import { AppState } from "@shared/models/appState";
import { Hero } from "@shared/models/hero";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "bcm-dashboard-list",
  templateUrl: "./dashboard-list.component.html",
  styleUrls: ["./dashboard-list.component.scss"]
})
export class DashboardListComponent implements OnInit {
  @Input() public heroes: Hero[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onClick(hero: Hero): void {

  }
}
