import React,{useReducer} from "react"
import 'antd/dist/antd.css'; 
import "../style/todo.css"
import "../style/iconfont/iconfont.css"

import EditBox from "./EditBox"
import TodoItem from "./TodoItem"
import TodoHeader from "./TodoHeader"

import reducer from "../store/reducer"


export default function TodoList() {
    const [state,dispatch] = useReducer(reducer,{
        todo:[
            {checked:false,content:"欢迎使用待办"},
            {checked:false,content:"贴心代办，帮你梳理工作和生活"},
            {checked:false,content:"点击待办事项，可重新编辑待办"},
            
        ],
        editBox: {
            editChose:"",
            content:""
        }
              
     })

    const maskEdit = (operate,content)=>{
        console.log(content)
        document.getElementsByClassName("edit_wrap")[0].style.display = "block"
        let editBox = {
            editChose:operate,
            content
        }
        dispatch({type:"changeEditChose",editBox:editBox})
    }
    const editComplete=(todoValue)=>{
        document.getElementsByClassName("edit_wrap")[0].style.display="none"
        if(todoValue!==""){
            let todo = state.todo;
            let item = {checked:false,content:todoValue}
            todo.unshift(item)
            dispatch({type:"add_todoItem",todo:todo})
        }
    }
    const changeState=(item,index)=>{
        let todo = state.todo;
        let temp = item;
        temp.checked = !item.checked;
        todo[index] = temp
        if(temp.checked===true){
            todo.splice(index,1);
            todo.push(temp)
        }else{
            todo.splice(index,1);
            todo.unshift(temp)
        }
        dispatch({type:"clickTodoItem",todo:todo})
    }    
    const getTodoItem = (e)=>{
        let item = e.target.value;
        console.log(item)
    }
    const deleteItem = (index)=>{
        console.log(index)
        let todo = state.todo;
        todo.splice(index,1)
        dispatch({type:"delete_item",todo:todo})
    }
    const searchContent = (value)=>{
        console.log("值为:",value)
        let todo = state.todo;
        let res = []
        todo.map((item,index)=>{
            if(item.content.indexOf(value)>=0)
                res.push(item)
        })
        console.log(res)
    }
    return (
        <div className="wrap">
            <TodoHeader maskEdit={maskEdit} 
                        searchContent={searchContent}
            ></TodoHeader>
            {
            state.todo.map((item,index)=>{
                return(
                        <TodoItem key={index} item={item} index={index}
                                    changeState = {changeState}
                                    maskEdit = {maskEdit}
                                    deleteItem ={deleteItem}
                        ></TodoItem>
                        )
                })
            }
            <EditBox editChose={state.editBox.editChose} 
                     content={state.editBox.content}
                     editComplete={editComplete}
                     getTodoItem ={getTodoItem}
             ></EditBox>

        </div>
    )   
}
 
