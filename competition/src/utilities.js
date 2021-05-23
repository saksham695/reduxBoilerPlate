export const getSearchedData = (list, updateHashTagList) => {
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

export const sortTodoList = (task1, task2) => {
  const todoTask1 = task1.id;
  const todoTask2 = task2.id;
  if (todoTask1 > todoTask2) {
    return -1;
  }
  return 1;
};
