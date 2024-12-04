import React from 'react';

const TODO=({task,dispatch})=>{
    const deleteTask=()=>{
        dispatch({type:'DELETE_TASK',id:task.id});
    };
return(
    <div>
        <span>{task.name}</span>
        <button onClick={deleteTask}></button>
    </div>
)
}

export default TODO;
