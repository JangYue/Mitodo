import React,{useState} from "react"
import { Input,Button} from 'antd';
import "../style/editBox.css";
const {TextArea} = Input
function EditBox(props) { 
    const [itemValue,setItemValue] = useState("")
    const {editChose,editComplete,getTodoItem,content} = props
    var value="";
    return (
        <div className="edit_wrap">
            <div className="bianJi">
                <TextArea 
                className="bianTextArea" showCount maxLength={200} 
                bordered={false} placeholder={editChose==="add"?"请添加待办事项":content} autoSize
                onChange = {(e)=>{value=e.target.value}}
                >
                </TextArea>
                <Button className="btn" onClick={()=>{editComplete(value)}}>完成</Button>
            </div>
            <div className="mask"></div>
          </div>
    )
 }


export default EditBox;