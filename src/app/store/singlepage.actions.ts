import { createAction, props } from "@ngrx/store";

export const loadSinglePage = createAction('[SinglePage] Load SinglePage');
export const loadSinglePageSuccess = createAction(
  '[SinglePage] Load SinglePage Success',
  props<{ payload: any }>()
);
export const loadSinglePageError = createAction(
  '[SinglePage] Load SinglePage Error'
);
