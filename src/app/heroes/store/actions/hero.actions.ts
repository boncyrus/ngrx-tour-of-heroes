import { CompletionResponse } from "@shared/models/completionResponse";
import { Hero } from "@shared/models/hero";
import { createAction, props } from "@ngrx/store";

const getAllHeroes = createAction("[Hero] Get All", props<{}>());
const getAllHeroesCompleted = createAction(
  "[Hero] Get All Completed",
  props<CompletionResponse<Array<Hero>>>()
);

export const Actions = {
  getAllHeroes,
  getAllHeroesCompleted
};
