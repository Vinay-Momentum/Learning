import React from "react";
import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext.js'

const ShowTasks = () => {
    const {taskState} = useContext(TaskContext);

    return(
        taskState.map((task,index) => {
            <li>hey</li>
        })
    );
}

export default ShowTasks;