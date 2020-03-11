import { Observable } from "rxjs";
import { Hero } from "@shared/models/hero";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "@shared/models/appState";
import { map } from "rxjs/operators";
import * as fromActions from "../store/actions/top-heroes.actions";

@Component({
  selector: "bcm-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public heroes$: Observable<Hero[]>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(fromActions.Actions.getTopHeroes({}));
    this.heroes$ = this.store
      .select(x => x)
      .pipe(
        map(data => {
          return data.dashboardFeature.topHeroes.heroes;
        })
      );
  }
}
