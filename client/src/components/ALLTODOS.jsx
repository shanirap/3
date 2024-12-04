import React,{useReducer} from 'react';
import TODO from './TODO';


const initialState = [
    { id: 1, name: 'משימה 1' },
    { id: 2, name: 'משימה 2' },
    { id: 3, name: 'משימה 3' },
  ];
  // פונקציית הרדיוסר שמנהלת את פעולות ההוספה והמחיקה
function reducer(state,action){
  switch(action.type){
    case 'ADD_TASK':
      return [...state,{id:Date.now(),name:action.name}];
    case 'DELETE_TASK':
      return state.filter(task=>task.id!==action.id);
    default:
      return state;
  }
}
const ALLTODOS=()=>{
  const [tasks,dispatch]=useReducer(reducer,initialState);
  const [taskName,setTeskName]=React.useState('');
const addTask=()=>{
  if(taskName){
    dispatch({type:'ADD_TASK',name:taskName});
    setTeskName('');
  }
};
return(
  <div>
    <h2>רשימת משימות</h2>
    <input               
    type="text"
    value={taskName}
    onChange={(e)=>setTeskName(e.target.value)}
    placeholder='הקלד שם משימה'
    >
    </input>
    <button onClick={addTask}>הוסף משימה</button>
    <div>
      {
        tasks.map((task)=>(
          <TODO  key={task.id} task={task} dispatch={dispatch} />
        )
        )
      }
    </div>
  </div>
);

}
export default ALLTODOS;

  

  