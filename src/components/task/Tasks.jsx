import React from "react";

export const Tasks = ({ inputText, taskList }) => {
  var test = [{ text: "ssssss" }, { text: "vvvvv" }];
  return (
    <div className="ss">
      {console.log("TaskCard")}
      {console.log(taskList)}
      {taskList.forEach(elm =>{
        Object.keys(elm).forEach(task =>{
          {console.log(elm[task])}
          <div>{elm[task]}</div>
        })
      })}
      <div>{test[1].text}</div>
    </div>
  );
};
