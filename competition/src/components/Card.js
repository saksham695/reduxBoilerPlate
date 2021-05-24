import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";

import HashTagTextComponent from "./HashTagTextComponent";
import IconComponent from "./IconComponent";
import InputComponent from "./InputComponent";
import ListItem from "./ListItem";
import TodoTextComponent from "./TodoTextComponent";
import { ACTIONS } from "../store/action";
import { useStateValue } from "../store/StateProvider";

import "./styles/Card.css";

export default function Card() {
  const [todoItem, onChangeTodo] = useState("");
  const [hashTag, setHashTag] = useState("");
  const [
    {
      completedTask,
      hashtagStack,
      searchedCompletedTask,
      searchedTodoTask,
      todoList,
    },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    const storedData = sessionStorage.getItem("data");
    !!storedData &&
      dispatch({
        type: ACTIONS.GET_SESSION_DATA,
        payload: JSON.parse(storedData),
      });
  }, []);

  useEffect(() => {
    const data = {
      completedTask: [...completedTask],
      hashtagStack: [...hashtagStack],
      searchedCompletedTask: [...searchedCompletedTask],
      searchedTodoTask: [...searchedTodoTask],
      todoList: [...todoList],
    };
    sessionStorage.setItem("data", JSON.stringify(data));
  }, [completedTask, todoList, searchedCompletedTask, searchedTodoTask]);

  const onTodoItemChange = (e) => {
    onChangeTodo(e.target.value);
  };

  // method to add todo to list
  const addTodoList = (e) => {
    e.preventDefault();
    const payload = {
      completed: false,
      id: new Date().getTime(),
      todo: todoItem,
    };
    !!todoItem.length &&
      dispatch({
        payload,
        type: ACTIONS.ADD_TO_LIST,
      });
    onChangeTodo("");
  };

  const removeCurrentTask = () => {
    onChangeTodo("");
  };

  // method to add hash tag in search stack
  const onAddHashtagToStack = (e) => {
    e.preventDefault();
    !!hashTag.length &&
      dispatch({
        type: ACTIONS.ADD_HASHTAG,
        payload: { tag: hashTag, id: new Date().getTime() },
      });
    setHashTag("");
  };

  const onHashtagChange = (e) => {
    setHashTag(e.target.value);
  };

  const onRemoveHashtags = () => {
    dispatch({
      type: ACTIONS.REMOVE_HASHTAGS,
    });
  };
  const resetState = () => {
    dispatch({
      type: ACTIONS.RESET_TO_DO_LIST,
    });
  };

  const renderCardHeader = () => {
    return (
      <div className="card-header">
        <TodoTextComponent
          text="To do list"
          customStyle={styles.todoTextStyle}
        />
        <div style={styles.resetButtonContainerStyle} onClick={resetState}>
          <IconComponent
            customStyle={styles.refreshIconStyle}
            iconName="refresh"
          />
          <TodoTextComponent
            customStyle={styles.resetButtonTextStyle}
            text="Reset All Tasks"
          />
        </div>
      </div>
    );
  };

  const renderInputComponent = () => {
    return (
      <>
        {INPUT_DATA.map(
          ({
            key,
            onHandleChange,
            onHandleSubmit,
            onIconClicked,
            icon,
            placeholder,
            type,
            value,
          }) => {
            return (
              <div key={key} className="input-container">
                <InputComponent
                  onHandleChange={onHandleChange}
                  onHandleSubmit={onHandleSubmit}
                  placeholder={placeholder}
                  icon={icon}
                  type={type}
                  value={value}
                  onIconClicked={onIconClicked}
                />
              </div>
            );
          }
        )}
      </>
    );
  };

  const INPUT_DATA = [
    {
      icon: "close",
      key: "il1",
      onHandleChange: onTodoItemChange,
      onHandleSubmit: addTodoList,
      onIconClicked: removeCurrentTask,
      placeholder: "+  Add a task",
      type: "input",
      value: todoItem,
    },
    {
      icon: "refresh",
      key: "il2",
      onHandleChange: onHashtagChange,
      onHandleSubmit: onAddHashtagToStack,
      onIconClicked: onRemoveHashtags,
      placeholder: "Search with hashtags",
      type: "input",
      value: hashTag,
    },
  ];

  return (
    <div className="card-dimension" style={{ borderRadius: 10 }}>
      {renderCardHeader()}
      {renderInputComponent()}
      {!!hashtagStack.length && (
        <div className="hashtag-container" style={styles.hashTagContainer}>
          {hashtagStack.map((item) => {
            return <HashTagTextComponent text={item.tag} key={uuid()} />;
          })}
        </div>
      )}
      <div className="list-item-container">
        {((hashtagStack || []).length ? searchedTodoTask : todoList || []).map(
          (item) => (
            <ListItem item={item} key={uuid()} />
          )
        )}
        <TodoTextComponent
          text="Completed"
          customStyle={styles.completedTextStyle}
        />
        {((hashtagStack || []).length
          ? searchedCompletedTask
          : completedTask || []
        ).map((item) => (
          <ListItem item={item} key={uuid()} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  resetButtonContainerStyle: {
    alignItems: "center",
    backgroundColor: "rgb(232,249,241)",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    marginTop: "4%",
    padding: 10,
  },

  resetButtonTextStyle: {
    color: "rgb(0,204,123)",
    marginLeft: 10,
  },

  refreshIconStyle: {
    color: "rgb(0,204,123)",
  },

  todoTextStyle: {
    color: "rgb(129,129,129)",
    fontSize: 22,
  },

  completedTextStyle: {
    marginTop: "2%",
  },

  hashTagContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "normal",
    marginTop: "1%",
  },
};
