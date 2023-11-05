import { call, debounce, delay, put, spawn } from "redux-saga/effects";
import { SataActions } from "@/redux/sagas/sataActions";
import { PayloadAction } from "@reduxjs/toolkit";
import { SearchItemState } from "@/redux/search/sliceStateTypes";
import {
  updateSearchResult,
  searchSkillsFailure,
  dataLoading,
} from "@/redux/search/slices";

export default function* rootSaga() {
  yield spawn(searchSkills);
}

let controller: AbortController;

function* fetchData(action: PayloadAction<string>) {
  if (action.payload === "") {
    yield put(updateSearchResult([]));
    return;
  }

  if (controller) controller.abort();
  controller = new AbortController();

  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      yield put(dataLoading());
      const response: Response = yield call(
        fetch,
        `http://localhost:7070/api/search?q=${action.payload}`,
        { signal: controller.signal },
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data: SearchItemState[] = yield call([response, response.json]);
      yield put(updateSearchResult(data));
      return;
    } catch (error: unknown) {
      if ((error as Error).name === "AbortError") {
        return;
      }
      if (attempt === 4) {
        yield put(searchSkillsFailure(error));
      } else {
        yield delay(500);
      }
    }
  }
}

function* searchSkills() {
  yield debounce(350, SataActions.CHANGE_SEARCH_FIELD, fetchData);
}
