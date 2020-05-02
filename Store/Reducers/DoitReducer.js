const initialState =  {
  doits:[
    {name:'javascript object cloning', tasks:[{title:'search', completed:false }]}
  ]
}

function doitManager(state=initialState, action){
  let nextState, doitName
  switch(action.type){
    //case the add a new doit
    case 'ADD_NEW_DOIT':
      //build of the new state with the new doit
      nextState = {
        ...state,
        doits:[...state.doits, action.value]

      }
      //return of the new state
      return nextState
    //case to toogle an existant task as done or not
    case 'TOOGLE_ONE_TASK':
      //get of the informations in the action
      let taskTitle = action.value.taskTitle
      doitName = action.value.doitName
      //rebuilding of the doit to change the current task state in his task array
      let tasks = state.doits.filter(doit=>(doit.name===doitName))[0].tasks
        .map(task => (task.title===taskTitle)
          ?{...task, completed:true}
          :{...task})
      //bulding of the new state the return
      nextState = {
        doits:[ ...state.doits.map(doit=> (doit.name===doitName)? {...doit, tasks:[...tasks]}: {...doit})]
      }
      //return of the nextState
      return nextState
    //case to add  a new task
    case 'ADD_NEW_TASK':
      //get of the informations buy the action value
      let doitName = action.value.doitName
      let newTaskTitle = action.value.taskTi
      let newTask = { title: newTaskTitle, completed:false }
      let newTasks = [
        ...state.doits.filter(doit => (doit.name===doitName))[0].tasks, newTask
      ]
      nextState = {
        doits:[ ...state.doits.map(doit =>(doit.name===doitName)? {...doit, tasks:[...newTasks]}: {...doit})]
      }
      return nextState
    default:
      return state
  }
}

export default doitManager
