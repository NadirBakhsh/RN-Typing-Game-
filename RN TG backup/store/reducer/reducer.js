const INTITIAL_STATE = {
    wordsArray : ["able","accident","active"],
  }

  //,"activist","activity","address","admit","ago","along"
  
  const reducer = (state = INTITIAL_STATE,action) =>{
    switch(action.type){
  
      case "ESAY" : return { ...state, shaffulTimer : 20000 }
  
      case "MEDIUM" : return {...state,shaffulTimer : 10000 }

      case "HARD" : return {...state,shaffulTimer : 5000}
      
      case "SET_USER" : return {...state, user: action.data}
    }
      return state
  
  }

  export default reducer

  