import React, { useState } from "react";

import IconComponent from "./IconComponent";
import InputComponent from "./InputComponent";
import TodoTextComponent from "./TodoTextComponent";
import { ACTIONS } from "../store/action";
import { useStateValue } from "../store/StateProvider";

import "./styles/Card.css";

export default function Card() {
  const [todoItem, onChangeTodo] = useState("");
  const [hashTag, setHashTag] = useState("");
  const [{ todoList, hashtagStack }, dispatch] = useStateValue();

  console.log("todoList", todoList);
  console.log("hashtagStack", hashtagStack);

  const onTodoItemChange = (e) => {
    onChangeTodo(e.target.value);
  };

  const addTodoList = (e) => {
    e.preventDefault();
    const payload = {
      todo: todoItem,
      completed: false,
    };

    dispatch({
      type: ACTIONS.ADD_TO_LIST,
      payload,
    });
    onChangeTodo("");
  };

  const onAddHashtagToStack = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_HASHTAG,
      payload: hashTag,
    });
    setHashTag("");
  };

  const onHashtagChange = (e) => {
    setHashTag(e.target.value);
  };

  const resetState = () => {
    dispatch({
      type: ACTIONS.RESET_TO_DO_LIST,
    });
  };

  const renderCardHeader = () => {
    return (
      <div className="card-header">
        <TodoTextComponent text="To do list" />
        <div style={styles.resetButtonContainerStyle} onClick={resetState}>
          <IconComponent
            iconName="refresh"
            customStyle={{ color: "rgb(0,204,123)" }}
          />
          <TodoTextComponent
            text="Reset All Tasks"
            customStyle={styles.resetButtonTextStyle}
          />
        </div>
      </div>
    );
  };

  const renderInputComponent = () => {
    return (
      <div>
        {INPUT_DATA.map(
          ({
            key,
            onHandleChange,
            onHandleSubmit,
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
                  type={type}
                  value={value}
                />
              </div>
            );
          }
        )}
      </div>
    );
  };

  const INPUT_DATA = [
    {
      key: "il1",
      onHandleChange: onTodoItemChange,
      onHandleSubmit: addTodoList,
      placeholder: "+  Add a task",
      type: "input",
      value: todoItem,
    },
    {
      key: "il2",
      onHandleChange: onHashtagChange,
      onHandleSubmit: onAddHashtagToStack,
      placeholder: "Search with hashtags",
      type: "input",
      value: hashTag,
    },
  ];

  return (
    <div className="card-dimension" style={{ borderRadius: 10 }}>
      {renderCardHeader()}
      {renderInputComponent()}
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
};
