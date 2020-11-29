import React from "react"
import { Row, Col,Checkbox} from 'antd';
import "../style/todoitem.css"

function TodoItem(props) {
    const {item,changeState,maskEdit,index,deleteItem} = props;
    return (     
        <Row  className="todo_item" justify="center">
                    <Col span={12}>
                               <div  className={"todo_item_wrap"}>
                                <Checkbox
                                    onClick = {()=>{changeState(item,index)}}
                                    checked={item.checked}
                                    className={item.checked?"changeCheckbox":""}
                                >  
                                </Checkbox>
                                <span className={item.checked?"check_line item_content":"item_content"}
                                      onClick={()=>{maskEdit("edit",item.content)}}
                                >{item.content}</span>
                                <span onClick={()=>{deleteItem(index)}}>x</span>
                            </div>
                    </Col>
        </Row>
    )
}
export default TodoItem;