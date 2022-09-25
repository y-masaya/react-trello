import React from "react";

export const Tasks = ({ inputText, taskList }) => {
  // var test = [{ text: "ssssss" }, { text: "vvvvv" }];

  return (
    <div className="ss">
      {/* {console.log("TaskCard")}
      {console.log(taskList)} */}
      {taskList.map((task) => {
        {console.log(task)}
        <div>dddd</div>
      })}
      <div>dd</div>
    </div>
  );
};
