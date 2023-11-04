import { SearchItemState } from "@/redux/search/sliceStateTypes";

export enum Actions {
  SEARCH_SKILLS_REQUEST = "SEARCH_SKILLS_REQUEST",
  SEARCH_SKILLS_FAILURE = "SEARCH_SKILLS_FAILURE",
  SEARCH_SKILLS_SUCCESS = "SEARCH_SKILLS_SUCCESS",
  CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD",
}

export function changeSearchField(field: string) {
  return {
    type: Actions.CHANGE_SEARCH_FIELD,
    payload: field,
  };
}
