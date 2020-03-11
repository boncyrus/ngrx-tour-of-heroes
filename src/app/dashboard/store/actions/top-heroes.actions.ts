import { Hero } from "@shared/models/hero";
import { CompletionResponse } from "@shared/models/completionResponse";
import { props } from "@ngrx/store";
import { createAction } from "@ngrx/store";

export const getTopHeroes = createAction(
  "[Dashboard] Get top heroes",
  props<{}>()
);

export const getTopHeroesCompleted = createAction(
  "[Dashboard] Get top heroes completed",
  props<CompletionResponse<Hero[]>>()
);

export const Actions = {
  getTopHeroes,
  getTopHeroesCompleted
};
