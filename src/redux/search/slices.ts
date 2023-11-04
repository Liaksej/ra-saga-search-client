import { createSlice } from "@reduxjs/toolkit";
import { SearchItemState } from "@/redux/search/sliceStateTypes";

interface State {
  data: SearchItemState[];
  error: Error | null;
  loading: boolean;
}

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    updateSearchResult: (state: State, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    },
    searchSkillsFailure: (state: State, action) => {
      state.error = action.payload;
      state.data = [];
      state.loading = false;
    },
    dataLoading: (state: State) => {
      state.data = [];
      state.error = null;
      state.loading = true;
    },
    reset: () => initialState,
  },
});

export const { updateSearchResult, searchSkillsFailure, dataLoading, reset } =
  searchSlice.actions;
export default searchSlice.reducer;
