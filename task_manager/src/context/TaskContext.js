import React, {createContext, useState} from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({children}) => {
    const [TasksList, SetTaskList] = useState([
        {
            taskTitle: "lorem",
            taskDescription: "loremloremlorem",
            taskDueDate: "25-10-23"
        }
    ]);
    return(
        <TaskContext.Provider value={{TasksList, SetTaskList}}>
            {children};
        </TaskContext.Provider>
    );
}

export default TaskContext;