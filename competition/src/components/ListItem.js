import React from "react";
import { ACTIONS } from "../store/action";
import { useStateValue } from "../store/StateProvider";
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
  return (
    <div
      style={{
        backgroundColor: "rgb(249,246,254)",
        borderRadius: 5,
        padding: 5,
        minHeight: 25,
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: "2%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {!item.checked ? (
        <IconComponent
          iconName="circle"
          customStyle={{ color: "white" }}
          onIconClicked={onIconClicked}
        />
      ) : (
        <IconComponent
          iconName="circle"
          customStyle={{ color: "green" }}
          onIconClicked={onIconClicked}
        />
      )}
      <div style={{ paddingLeft: 15 }}>
        <TodoTextComponent text={item.todo} />
      </div>
    </div>
  );
}

const CheckBoxComponent = () => {
  return (
    <div
      style={{
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "green",
      }}
    />
  );
};
