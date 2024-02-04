import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
  } from './actionTypes';

  export const addTodo = (text) => ({
    type:ADD_TODO,
    payload:{text}
  });
  export const toggleTodo = (id) => ({
    type:TOGGLE_TODO,
    payload:{id}
  })
  export const removeTodo = (id) => 
  ({
    type:REMOVE_TODO,
    payload:{id}
  })

  export const markCompletedTodo = (id) => 
  ({
    type:MARK_COMPLETED,
    payload:{id}
  })

  export const markInCompletedTodo = (id) => ({
    type:MARK_INCOMPLETE,
    payload:{id}
  })
  export const filterTodo = (filter) => ({
    type:FILTER_TODOS,
    payload: { filter },
  });
  export const markAllCompletedTodo = (id) => ({
    type:MARK_ALL_COMPLETED
  });
  export const updateSearch = (searchTerm) =>( {
    type:UPDATE_SEARCH_TERM,
    payload:searchTerm
  });