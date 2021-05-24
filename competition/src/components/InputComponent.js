import React from "react";

import IconComponent from "./IconComponent";

export default function InputComponent({
  onHandleChange = () => {},
  onHandleSubmit = () => {},
  onIconClicked = () => {},
  icon,
  placeholder = "",
  type = "input",
  value = "",
}) {
  return (
    <div>
      <form
        onSubmit={(e) => onHandleSubmit(e)}
        style={styles.formContainerStyle}
      >
        <input
          className="input-style"
          onChange={(e) => onHandleChange(e)}
          placeholder={placeholder}
          style={styles.inputContainerStyle}
          type={type}
          value={value}
        />
        <IconComponent iconName={icon} onIconClicked={onIconClicked} />
      </form>
    </div>
  );
}

const styles = {
  inputContainerStyle: {
    borderBottomWidth: 1,
    borderColor: "rgb(227,226,227)",
    color: "rgb(165, 176, 246)",
    padding: 8,
    paddingBottom: 12,
    paddingTop: 12,
  },
  formContainerStyle: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
  },
};
