import { ACTIONS } from "./action";
import { getSearchedData, sortTodoList } from "../utilities";

export const initialState = {
  completedTask: [],
  hashtagStack: [],
  searchedCompletedTask: [],
  searchedTodoTask: [],
  todoList: [],
};

export const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS.ADD_TO_LIST:
      return {
        ...state,
        todoList: [payload, ...state.todoList],
      };

    case ACTIONS.RESET_TO_DO_LIST:
      return {
        ...state,
        completedTask: [],
        hashtagStack: [],
        searchedCompletedTask: [],
        searchedTodoTask: [],
        todoList: [],
      };

    case ACTIONS.ITEM_COMPLETED: {
      return {
        ...state,
        todoList: state.todoList
          .filter((item) => item.id !== payload.id)
          .sort(sortTodoList),
        completedTask: [...state.completedTask, payload].sort(sortTodoList),
      };
    }

    case ACTIONS.NOT_COMPLETED:
      return {
        ...state,
        todoList: [...state.todoList, payload].sort(sortTodoList),
        completedTask: state.completedTask
          .filter((item) => item.id !== payload.id)
          .sort(sortTodoList),
      };

    case ACTIONS.SEARCHED_TODO_COMPLETED: {
      const updatedSearchedTodoTask = state.searchedTodoTask.filter(
        (item) => item.id !== payload.id
      );
      const searchedCompletedTask = [...state.searchedCompletedTask, payload];
      return {
        ...state,
        searchedTodoTask: updatedSearchedTodoTask.sort(sortTodoList),
        searchedCompletedTask: searchedCompletedTask.sort(sortTodoList),
      };
    }

    case ACTIONS.SEARCHED_TODO_NOT_COMPLETED:
      const updatedSearchedTodoTask = [...state.searchedTodoTask, payload];

      const searchedCompletedTask = state.searchedCompletedTask.filter(
        (item) => item.id !== payload.id
      );
      return {
        ...state,
        searchedTodoTask: updatedSearchedTodoTask.sort(sortTodoList),
        searchedCompletedTask: searchedCompletedTask.sort(sortTodoList),
      };

    case ACTIONS.ADD_HASHTAG: {
      const updateHashTagList = [...state.hashtagStack, payload];
      const todoList = getSearchedData(state.todoList, updateHashTagList);
      const completedTodoList = getSearchedData(
        state.completedTask,
        updateHashTagList
      );
      return {
        ...state,
        hashtagStack: updateHashTagList,
        searchedTodoTask: todoList,
        searchedCompletedTask: completedTodoList,
      };
    }

    case ACTIONS.GET_SESSION_DATA: {
      return {
        ...state,
        hashtagStack: [...payload.hashtagStack],
        completedTask: [...payload.completedTask],
        todoList: [...payload.todoList],
        searchedCompletedTask: [...payload.searchedCompletedTask],
        searchedTodoTask: [...payload.searchedTodoTask],
      };
    }
    case ACTIONS.REMOVE_HASHTAGS: {
      return {
        ...state,
        hashtagStack: [],
      };
    }
    default:
      return {
        ...state,
      };
  }
};
