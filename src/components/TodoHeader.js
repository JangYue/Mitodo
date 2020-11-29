import React,{useState} from "react"
import { Row, Col, Input} from 'antd';
import "../style/todoHeader.css"
const {Search} = Input

function TodoHeader (props){
    const {searchContent} = props
    let [value,setValue] = useState("");
    return (
        
            <div>
                 <Row className="todo_header" align="middle">
                    <Col span={24} >
                        <h1>待办</h1>
                    </Col>
                </Row>
                <Row  className="todo_search" justify="center">
                    <Col  span={12}>
                        <Search  placeholder="搜索代办" onChange={(e)=>{setValue(value=e.target.value)}}
                                 onSearch = {()=>{searchContent(value)}}
                        />
                    </Col>
                </Row>
                <Row justify="center" className="todo_add">
                    <Col offset={2} span={8} justify="right">
                        <span onClick={()=>{props.maskEdit("add","")}}>添加待办</span>
                    </Col>
                </Row>
            </div>
        )
}

export default TodoHeader;