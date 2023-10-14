import { configureStore } from '@reduxjs/toolkit';
import { selectTab, addTodo } from '../reducers';
import toDoAndTabsReducer from '../reducers';

describe('Redux Tests', () => {
  it('should create a new todo', () => {
    const store = configureStore({
      reducer: toDoAndTabsReducer,
    });

    store.dispatch(
      addTodo({ id: 1, description: 'Test Todo', completed: false })
    );

    const newState = store.getState();
    expect(newState.todos).toHaveLength(1);
    expect(newState.todos[0].description).toBe('Test Todo');
  });

  it('should select a tab', () => {
    const store = configureStore({
      reducer: toDoAndTabsReducer,
    });

    store.dispatch(selectTab('newTab'));

    const newState = store.getState();
    expect(newState.selectedTab).toBe('newTab');
  });
});
