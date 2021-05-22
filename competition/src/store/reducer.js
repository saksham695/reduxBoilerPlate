import { ACTIONS } from "./action";

export const initialState = {
  todoList: [],
  completedTask: [],
  hashtagStack: [],
};

export const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONS.ADD_TO_LIST:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };

    case ACTIONS.RESET_TO_DO_LIST:
      return {
        ...state,
        todoList: [],
        completedTask: [],
        hashtagStack: [],
      };

    case ACTIONS.ITEM_COMPLETED: {
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== payload.id),
        completedTask: [...state.completedTask, payload],
      };
    }

    case ACTIONS.ADD_HASHTAG: {
      return {
        ...state,
        hashtagStack: [...state.hashtagStack, payload],
      };
    }

    default:
      return {
        ...state,
      };
  }
};
