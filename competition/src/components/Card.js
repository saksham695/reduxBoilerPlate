import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";

import IconComponent from "./IconComponent";
import InputComponent from "./InputComponent";
import ListItem from "./ListItem";
import TodoTextComponent from "./TodoTextComponent";
import { ACTIONS } from "../store/action";
import { useStateValue } from "../store/StateProvider";

import "./styles/Card.css";
import HashTagTextComponent from "./HashTagTextComponent";

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
      todoList: [...todoList],
      searchedCompletedTask: [...searchedCompletedTask],
      searchedTodoTask: [...searchedTodoTask],
    };
    sessionStorage.setItem("data", JSON.stringify(data));
  }, [completedTask, todoList, searchedCompletedTask, searchedTodoTask]);

  const onTodoItemChange = (e) => {
    onChangeTodo(e.target.value);
  };

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
          customStyle={{ color: "rgb(129,129,129)", fontSize: 22 }}
        />
        <div style={styles.resetButtonContainerStyle} onClick={resetState}>
          <IconComponent
            customStyle={{ color: "rgb(0,204,123)" }}
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
      <div>
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
      icon: "close",
      onIconClicked: removeCurrentTask,
    },
    {
      key: "il2",
      onHandleChange: onHashtagChange,
      onHandleSubmit: onAddHashtagToStack,
      placeholder: "Search with hashtags",
      type: "input",
      value: hashTag,
      icon: "refresh",
      onIconClicked: onRemoveHashtags,
    },
  ];

  console.log("render");
  return (
    <div className="card-dimension" style={{ borderRadius: 10 }}>
      {renderCardHeader()}
      {renderInputComponent()}
      {!!hashtagStack.length && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "1%",
            justifyContent: "normal",
          }}
        >
          {hashtagStack.map((item) => {
            return <HashTagTextComponent text={item.tag} key={uuid()} />;
          })}
        </div>
      )}
      <div style={{ paddingTop: "2.5%", paddingBottom: "2.5%" }}>
        {((hashtagStack || []).length ? searchedTodoTask : todoList || []).map(
          (item) => (
            <ListItem item={item} key={uuid()} />
          )
        )}
        <TodoTextComponent text="Completed" customStyle={{ marginTop: "1%" }} />
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
};
