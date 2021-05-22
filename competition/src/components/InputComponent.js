import React from "react";

export default function InputComponent({
  onHandleChange = () => {},
  onHandleSubmit = () => {},
  placeholder = "",
  type = "input",
  value = "",
}) {
  return (
    <div>
      <form onSubmit={(e) => onHandleSubmit(e)}>
        <input
          className="input-style"
          onChange={(e) => onHandleChange(e)}
          placeholder={placeholder}
          style={styles.inputContainerStyle}
          type={type}
          value={value}
        />
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
};
