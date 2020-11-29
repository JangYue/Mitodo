export default function reducer(state,action) {  
    switch(action.type){
        case "changeEditChose":
            return {
                ...state,
                editBox:action.editBox
            }
       
        case "clickTodoItem": return{
            ...state,
            todo:action.todo
        }

        case "add_todoItem":return{
            ...state,
            todo:action.todo
        }
        case "delete_item":return{
            ...state,
            todo:action.todo
        }
        default : return state;
    }
    return state;
} 