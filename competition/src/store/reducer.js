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
  console.log(type);
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

    case ACTIONS.SEARCHED_TODO_COMPLETED: {
      const updatedSearchedTodoTask = state.searchedTodoTask.filter(
        (item) => item.id !== payload.id
      );
      const searchedCompletedTask = [...state.searchedCompletedTask, payload];
      console.log("updatedSearchedTodoTask", updatedSearchedTodoTask);
      console.log("searchedCompletedTask", searchedCompletedTask);
      return {
        ...state,
        searchedTodoTask: updatedSearchedTodoTask,
        searchedCompletedTask: searchedCompletedTask,
      };
    }

    case ACTIONS.SEARCHED_TODO_NOT_COMPLETED:
      const updatedSearchedTodoTask = [...state.searchedTodoTask, payload];

      const searchedCompletedTask = state.searchedCompletedTask.filter(
        (item) => {
          console.log("should include", item.id !== payload.id);
          return item.id !== payload.id;
        }
      );

      console.log(
        "updatedSearchedTodoTask SEARCHED_TODO_NOT_COMPLETED",
        updatedSearchedTodoTask
      );
      console.log(
        "searchedCompletedTask SEARCHED_TODO_NOT_COMPLETED",
        searchedCompletedTask
      );

      return {
        ...state,
        searchedTodoTask: updatedSearchedTodoTask,
        searchedCompletedTask: searchedCompletedTask,
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
