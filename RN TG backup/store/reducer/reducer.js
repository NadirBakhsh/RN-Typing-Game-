const INTITIAL_STATE = {
    wordsArray : ["Activist","Activity","Address","Admit","Ago","Along","Aaa"],
    user : {playerName : "Guset", email: ''},
    level : "",
  }


  
  const reducer = (state = INTITIAL_STATE,action) =>{
    switch(action.type){
  
      case "ESAY" : return { ...state, shaffulTimer : 30000 , level : "esay"  }
  
      case "MEDIUM" : return {...state,shaffulTimer : 15000 , level : "medium" }

      case "HARD" : return {...state,shaffulTimer : 5000, level : "hard"}
      
      case "SET_USER" : return {...state, user: action.data}
     
      case "SET_ALL_USER" : return {...state, allUsers: action.data}
    }
      return state
  
  }

  export default reducer

  