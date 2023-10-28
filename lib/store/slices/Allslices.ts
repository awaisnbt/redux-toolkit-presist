"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

interface CartItem {
  title: string;
  qty: number;
}

interface AuthState {
  Authcheck: boolean;
  siebarcheck: boolean;
  user: object;
}

const initialState: AuthState = {
  Authcheck: false,
  siebarcheck: false,
  user: {},
};

export const Allslice = createSlice({
  name: "Allslice",
  initialState,
  reducers: {
    AssignsideTrue: (state) => {
      state.siebarcheck = true;
    },
    Assignsidefalse: (state) => {
      state.siebarcheck = false;
    },
    updateUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
  },
});

export const { AssignsideTrue, Assignsidefalse, updateUser } = Allslice.actions;

export const selectAuth = (state: RootState) => state.Authcheck;

export default Allslice.reducer;
