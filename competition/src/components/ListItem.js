import React from "react";
import { uuid } from "uuidv4";
import { ACTIONS } from "../store/action";
import { useStateValue } from "../store/StateProvider";
import HashTagTextComponent from "./HashTagTextComponent";
import IconComponent from "./IconComponent";
import TodoTextComponent from "./TodoTextComponent";

export default function ListItem({ item }) {
  const [{ hashtagStack }, dispatch] = useStateValue();

  const onIconClicked = () => {
    const checked = item.checked;
    const payload = {
      todo: item.todo,
      checked: !checked,
      id: item.id,
    };

    if (hashtagStack.length) {
      dispatch({
        type: checked
          ? ACTIONS.SEARCHED_TODO_NOT_COMPLETED
          : ACTIONS.SEARCHED_TODO_COMPLETED,
        payload,
      });
    }

    dispatch({
      type: checked ? ACTIONS.NOT_COMPLETED : ACTIONS.ITEM_COMPLETED,
      payload,
    });
  };
  const modifiedText = item.todo.split(" ");

  return (
    <div
      style={{
        backgroundColor: "rgb(249,246,254)",
        borderRadius: 8,
        padding: 5,
        minHeight: 25,
        // paddingRight: 10,
        // paddingLeft: 10,
        padding: 10,
        marginTop: "2.5%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxShadow:
          "1px 1px 2px 3px rgba(232,231,231,0.8)" /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */,
      }}
      onClick={onIconClicked}
    >
      {!item.checked ? (
        <IconComponent
          iconName="circle"
          customStyle={{ color: "rgba(239,85,84,0.4)" }}
        />
      ) : (
        <IconComponent
          iconName="circle"
          customStyle={{ color: "rgba(0,204,123,0.6)" }}
        />
      )}
      <div
        style={{
          paddingLeft: 15,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {modifiedText.map((text) => {
          return !text.includes("#") ? (
            <TodoTextComponent
              text={text}
              customStyle={{ color: "rgb(129,129,129)", marginRight: 2 }}
              key={uuid()}
            />
          ) : (
            <HashTagTextComponent text={text} key={uuid()} />
          );
        })}
      </div>
    </div>
  );
}
