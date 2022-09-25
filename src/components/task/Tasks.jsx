import React from "react";

export const Tasks = ({ inputText, taskList }) => {

  return (
    <div className="ss">
      {taskList.map((task) => {
       <div>{task.text}</div>;
      })}
    </div>
  );
};
