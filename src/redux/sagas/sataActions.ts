export enum SataActions {
  CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD",
}

export function changeSearchField(field: string) {
  return {
    type: SataActions.CHANGE_SEARCH_FIELD,
    payload: field,
  };
}
