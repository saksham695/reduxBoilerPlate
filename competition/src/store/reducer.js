import { ACTIONS } from "./action";

export const initialState = {
  todoList: [],
  completedTask: [],
  hashtagStack: [],
  searchedTodoTask: [],
  searchedCompletedTask: [],
};

const getSearchedData = (list, updateHashTagList) => {
  const filteredList = [];
  list.map((todoItem) => {
    let check = 0;
    (updateHashTagList || []).map((item) => {
      if (!check && todoItem.todo.includes(item.tag)) {
        check = 1;
        filteredList.push(todoItem);
      }
    });
  });
  return filteredList;
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

    case ACTIONS.NOT_COMPLETED:
      return {
        ...state,
        todoList: [...state.todoList, payload],
        completedTask: state.completedTask.filter(
          (item) => item.id !== payload.id
        ),
      };

    case ACTIONS.ADD_HASHTAG: {
      const updateHashTagList = [...state.hashtagStack, payload];
      const todoList = getSearchedData(state.todoList, updateHashTagList);
      const completedTodoList = getSearchedData(
        state.completedTask,
        updateHashTagList
      );
      console.log("reduces", todoList);
      return {
        ...state,
        hashtagStack: updateHashTagList,
        searchedTodoTask: todoList,
        searchedCompletedTask: completedTodoList,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
