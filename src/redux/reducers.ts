import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TabsAndTodosState } from "../models/TabsAndTodosState";
import { Todo } from "../models/Todo";

const initialState: TabsAndTodosState = {
  selectedTab: "default",
  todos: [],
};

const tabsAndTodosSlice = createSlice({
  name: "tabsAndTodos",
  initialState,
  reducers: {
    selectTab(state, action: PayloadAction<string>) {
      state.selectedTab = action.payload;
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
  },
});

export const { selectTab, addTodo } = tabsAndTodosSlice.actions;
export default tabsAndTodosSlice.reducer;
