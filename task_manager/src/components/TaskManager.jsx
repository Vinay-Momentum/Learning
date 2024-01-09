import React from "react";
import AddTask from "./AddTask";
import Category from "./Category";
import { useState } from "react";

const TaskManager = () => {
    return(
        <section className="taskmanager-section">
            <AddTask/>
            {/* <Category/> */}
        </section>
    );
}

export default TaskManager;