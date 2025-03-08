import { thunks } from "@/thunks/apiThunks";
import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "api",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    extraReducersBuilder(builder, thunks);
  },
});

export const extraReducersBuilder = (builder, thunks) =>
  Object.keys(thunks).forEach((actionType) => {
    const stateName = actionType;
    builder
      .addCase(thunks[actionType].fulfilled, (state, action) => {
        state[stateName] = state[stateName] || {
          data: null,
          error: null,
          loading: false,
        };
        state[stateName].data = action.payload;
        state[stateName].loading = false;
      })
      .addCase(thunks[actionType].pending, (state) => {
        state[stateName] = state[stateName] || {
          data: null,
          error: null,
          loading: false,
        };
        state[stateName].loading = true;
        state[stateName].error = null;
        state[stateName].data = null;
      })
      .addCase(thunks[actionType].rejected, (state, action) => {
        state[stateName] = state[stateName] || {
          data: null,
          error: null,
          loading: false,
        };
        state[stateName].error = action.payload;
        state[stateName].loading = false;
      });
  });

export default apiSlice.reducer;
