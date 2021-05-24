import React from "react";
import { uuid } from "uuidv4";

import HashTagTextComponent from "./HashTagTextComponent";
import IconComponent from "./IconComponent";
import TodoTextComponent from "./TodoTextComponent";
import { ACTIONS } from "../store/action";
import { useStateValue } from "../store/StateProvider";

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
    <div style={styles.listItemContainer} onClick={onIconClicked}>
      {!item.checked ? (
        <IconComponent
          iconName="circle"
          customStyle={styles.incompleteIconStyle}
        />
      ) : (
        <IconComponent
          iconName="circle"
          customStyle={styles.completeIconStyle}
        />
      )}
      <div style={styles.itemTextContainer}>
        {modifiedText.map((text) => {
          return !text.includes("#") ? (
            <TodoTextComponent
              text={text}
              customStyle={styles.plainTextStyle}
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

const styles = {
  listItemContainer: {
    alignItems: "center",
    backgroundColor: "rgb(249,246,254)",
    borderRadius: 8,
    boxShadow:
      "1px 1px 2px 3px rgba(232,231,231,0.8)" /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */,
    display: "flex",
    flexDirection: "row",
    marginTop: "2.5%",
    minHeight: 25,
    padding: 10,
    padding: 5,
  },

  itemTextContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 16,
  },

  plainTextStyle: {
    color: "rgb(129,129,129)",
    marginRight: 2,
  },

  incompleteIconStyle: { color: "rgba(239,85,84,0.4)" },
  completeIconStyle: { color: "rgba(0,204,123,0.6)" },
};
