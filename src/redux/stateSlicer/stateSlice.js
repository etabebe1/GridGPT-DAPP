import { createSlice } from "@reduxjs/toolkit";

// Initial name
// const DAPP_NAME = "GPTMembership";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counterkjgjakljgdh",
  initialState,
  reducers: {
    // Automatically generates an action creator and case reducer for increment
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // You can also pass a payload with the action
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The generated reducer
export default counterSlice.reducer;
